import { LanguageProps } from '@/common/types'

import hu from '@/assets/flags/hu.svg'
import en from '@/assets/flags/en.svg'
import de from '@/assets/flags/de.svg'

const MAP: { [key: string]: string } = { hu, en, de }

const Language = ({ lang }: LanguageProps): JSX.Element => {
  const link = `?lang=${lang}`
  const source = MAP[lang]

  return (
    <a
      href={link}
      rel="noreferrer"
      className="p-2 hover:scale-125 transition-all duration-200"
    >
      <img
        className="border-2 border-slate-500"
        src={source}
        alt={lang}
        width={30}
        height={30}
      />
    </a>
  )
}

export default Language
