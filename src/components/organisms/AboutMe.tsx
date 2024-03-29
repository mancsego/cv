/* eslint-disable @typescript-eslint/no-unused-vars */
import { translate } from '@/common/translator'
import { useAppSelector } from '../../store'
import { selectAboutMe } from '../../store/features/cmsSlice'
import Timeline from './Timeline'

const AboutMe = (): JSX.Element => {
  const { education, experience } = useAppSelector(selectAboutMe)

  return (
    <section id="about-me">
      <div className="heading">
        <h2>{translate('about me')}</h2>
        <hr className="divider" />
      </div>
      <div className="flex justify-between flex-col md:flex-row xl:mx-16">
        <div className="w-full md:w-1/2">
          <h3 className="heading">Experience</h3>
          <Timeline id="expecrience" source={experience} />
        </div>
        <div className="w-full md:w-1/2">
          <h3 className="heading">Education</h3>
          <Timeline id="education" source={education} />
        </div>
      </div>
    </section>
  )
}

export default AboutMe
