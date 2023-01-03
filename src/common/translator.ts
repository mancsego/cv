import { selectTranslations } from '@/store/features/cmsSlice'
import { useAppSelector } from './../store/index'

export const translate = (key: string) => {
  const translations = useAppSelector(selectTranslations)
  return translations[key] ?? key
}
