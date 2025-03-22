import { create } from 'zustand'

type CmsStore = {
  loaded: boolean
  cms: {
    intro: string
    about_me: {
      education: unknown[]
      experience: unknown[]
    }
  }
  translations: Record<string, string>
  fetch: () => Promise<void>
}

const useCmsStore = create<CmsStore>((set, get) => ({
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

    try {
      const { cms, translations = {} } = await fetchDb(lang)

      set({ cms, translations, loaded: true })
    } catch (e) {
      set({ loaded: false })
    }
  }
}))

export { useCmsStore }
