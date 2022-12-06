import Divider from '../atoms/Divider'
import SocialLink from '../atoms/SocialLink'

const Social = (): JSX.Element => {
  return (
    <div id="social">
      <div className="heading">
        <h2>social</h2>
        <Divider />
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
    </div>
  )
}

export default Social
