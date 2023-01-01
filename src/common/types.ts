export interface TimelineInstance {
  time: string
  headline: string
  desc: string
}

// Props
export interface TimelineProps {
  id: string
  source: TimelineInstance[]
}

export interface InputProps {
  label: string
  onChange: Function
  id?: string
  type?: string
  placeholder?: string
}

export interface SocialProps {
  icon: string
  link: string
}

export interface NavItemProps {
  link: string
  title: string
  onClick: Function
}
