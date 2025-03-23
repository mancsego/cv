import { ComponentType, lazy, Suspense, useEffect, useMemo, useRef, useState } from 'react'

const OPTIONS = {
  rootMargin: '50px',
  threshold: 1.0
}

const loading = 'animate-pulse w-full bg-stone-700 rounded-xs md:rounded-lg'

const LazyComponent = ({
  factory,
  id,
  delay = 500,
  minHeight = 100
}: {
  factory: () => Promise<{ default: ComponentType }>
  id: string
  delay?: number
  minHeight?: number
}) => {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)
  const Component = lazy(factory)

  const content = <Component />
  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setVisible(entry.isIntersecting)
          observer.disconnect()
        }
      }, OPTIONS),
    []
  )
  setTimeout(() => {
    if (!ref.current) return

    observer.observe(ref.current)
  }, delay)

  useEffect(() => {
    return () => {
      observer.disconnect()
    }
  }, [observer])

  return (
    <div
      id={id}
      ref={ref}
      className={visible ? 'lazy' : loading}
      style={{ minHeight: `${minHeight}px` }}>
      <Suspense>{visible && content}</Suspense>
    </div>
  )
}

export default LazyComponent
