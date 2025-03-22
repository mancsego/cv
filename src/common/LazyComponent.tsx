import { ComponentType, lazy, Suspense, useEffect, useRef, useState } from 'react'

const OPTIONS = {
  rootMargin: '50px',
  threshold: 1.0
}

const loading = 'animate-pulse w-full h-20 bg-stone-700 rounded-xs md:rounded-lg'

const LazyComponent = ({
  factory,
  id,
  delay = 500
}: {
  factory: () => Promise<{ default: ComponentType }>
  id: string
  delay?: number
}) => {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)
  const Component = lazy(factory)

  const content = <Component />

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(entry.isIntersecting)
        observer.disconnect()
      }
    }, OPTIONS)

    setTimeout(() => {
      if (!ref.current) return

      observer.observe(ref.current)
    }, delay)

    return () => {
      observer.disconnect()
    }
  }, [delay])

  return (
    <div id={id} ref={ref} className={!visible ? loading : 'lazy'}>
      <Suspense>{visible && content}</Suspense>
    </div>
  )
}

export default LazyComponent
