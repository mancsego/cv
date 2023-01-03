import { translate } from '@/common/translator'

const IntroductionText = (): JSX.Element => {
  return (
    <p className="tracking-widest">
      {translate('Hey, my name is')}
      <span className="block text-2xl uppercase">István</span>
    </p>
  )
}

export default IntroductionText
