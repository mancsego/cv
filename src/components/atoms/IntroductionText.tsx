import { useTranslations } from '@/hooks/translator'

const IntroductionText = (): JSX.Element => {
  const translate = useTranslations()

  return (
    <p className="tracking-widest">
      {translate('Hey, my name is')}
      <span className="block text-2xl uppercase">István</span>
    </p>
  )
}

export default IntroductionText
