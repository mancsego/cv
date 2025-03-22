import { useCmsStore } from '@/store/cms'

const useTranslations = () => {
  const t = useCmsStore((state) => state.translations)

  return (key: string) => t[key] ?? ''
}

export { useTranslations }