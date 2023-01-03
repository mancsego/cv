export interface CmsState {
  loaded: boolean
  data: {
    cms: CmsData
    translations: {
      [key: string]: string
    }
  }
}

export interface CmsData {
  intro: string
  about_me: {
    education: TimelineInstance[]
    experience: TimelineInstance[]
  }
}

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
