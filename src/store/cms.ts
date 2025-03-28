import { create } from 'zustand'

type TimelineInstance = {
  time: string
  headline: string
  desc: string
}

type CmsStore = {
  loaded: boolean
  cms: {
    intro: string
    about_me: {
      education: TimelineInstance[]
      experience: TimelineInstance[]
    }
  }
  translations: Record<string, string>
  fetch: () => Promise<void>
}

const useCmsStore = create<CmsStore>((set) => ({
  loaded: false,
  cms: {
    intro: '',
    about_me: {
      education: [],
      experience: []
    }
  },
  translations: {},
  fetch: async () => {
    const { fetchDb } = await import('../common/backend')
    const match = location.search.match(/lang=(?<lang>.{2})/)
    const lang = match?.groups?.lang ?? 'en'

    const { cms, translations = {} } = await fetchDb(lang)

    set({ cms, translations, loaded: true })
  }
}))

export { useCmsStore }
export type { TimelineInstance }
