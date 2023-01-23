import { SocialProps } from '../../common/types'

const SocialLink = ({ icon, link }: SocialProps): JSX.Element => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      aria-label={link}
      className="px-2 hover:scale-125 transition-all duration-200"
    >
      <svg className="fill-primary h-8 w-8">
        <use xlinkHref={'#' + icon} />
      </svg>
    </a>
  )
}

export default SocialLink
