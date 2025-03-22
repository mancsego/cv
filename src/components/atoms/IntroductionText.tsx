import { useTranslations } from '@/hooks/translator'

function IntroductionText() {
  const translate = useTranslations()

  return (
    <p className="tracking-widest">
      {translate('Hey, my name is')}
      <span className="block text-2xl uppercase">István</span>
    </p>
  )
}

export default IntroductionText
