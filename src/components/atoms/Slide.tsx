import { Transition } from '@headlessui/react'
import { ReactNode } from 'react'

const baseProps = {
  appear: true,
  show: true,
  enter: 'transition-transform duration-500 ease-out',
  enterTo: 'opacity-100 translate-x-0 translate-y-0'
}
const transitions = {
  left: 'opacity-0 translate-x-3',
  right: 'opacity-0 -translate-x-3',
  up: 'opacity-0 translate-y-10',
  down: 'opacity-0 -translate-y-10'
}

export default function Slide({
  children,
  direction,
  className = ''
}: {
  children: ReactNode
  direction: 'left' | 'right' | 'up' | 'down'
  className?: string
}) {
  const props = { ...baseProps, enterFrom: transitions[direction] }

  return (
    <Transition {...props}>
      <div className={className}>{children}</div>
    </Transition>
  )
}
