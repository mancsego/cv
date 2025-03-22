import SocialLink from '@/components/atoms/SocialLink'

function Social() {
  return (
    <footer id="social" className="mb-8 md:mb-auto">
      <div className="heading">
        <h2>social</h2>
        <hr className="divider" />
      </div>
      <div className="flex justify-between md:justify-center py-5">
        <SocialLink
          icon="fb"
          link="https://www.facebook.com/mancsegoakaistvanabraham"
        />
        <SocialLink icon="gh" link="https://github.com/mancsego" />
        <SocialLink icon="ig" link="https://www.instagram.com/mancsego/" />
        <SocialLink
          icon="li"
          link="https://www.linkedin.com/in/istvan-abraham/"
        />
      </div>
    </footer>
  )
}

export default Social
