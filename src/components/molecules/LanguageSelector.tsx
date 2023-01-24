import Language from '../atoms/Language'

const LanguageSelector = (): JSX.Element => {
  return (
    <div className="absolute top-7 left-6 flex flex-col items-center">
      <Language lang="en" />
      <Language lang="de" />
      <Language lang="hu" />
    </div>
  )
}

export default LanguageSelector
