import { Transition } from '@headlessui/react'
import { ReactNode } from 'react'

const baseProps = {
  appear: true,
  show: true,
  enter: 'transition-transform duration-500 ease-out',
  enterTo: 'opacity-100 translate-x-0 translate-y-0'
}
const transitions = {
  left: 'data-[enter]:duration-300 data-[enter]:data-[closed]:translate-x-full data-[leave]:duration-300 data-[leave]:data-[closed]:-translate-x-full',
  right:
    'data-[enter]:duration-300 data-[enter]:data-[closed]:-translate-x-full data-[leave]:duration-300 data-[leave]:data-[closed]:translate-x-full',
  down: 'data-[enter]:duration-300 data-[enter]:data-[closed]:-translate-y-full data-[leave]:duration-300 data-[leave]:data-[closed]:translate-y-full',
  up: 'data-[enter]:duration-300 data-[enter]:data-[closed]:translate-y-full data-[leave]:duration-300 data-[leave]:data-[closed]:-translate-y-full'
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
  const classes = `${transitions[direction]} ${className}`

  return (
    <Transition {...props}>
      <div className={classes}>{children}</div>
    </Transition>
  )
}
