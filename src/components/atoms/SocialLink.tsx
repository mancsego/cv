function SocialLink({ icon, link }: { icon: string; link: string }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" aria-label={link} className="px-2 scalable">
      <svg className="fill-primary size-9">
        <use xlinkHref={'#' + icon} />
      </svg>
    </a>
  )
}

export default SocialLink
