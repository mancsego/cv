import Timeline from '@/components/organisms/Timeline'
import { useTranslations } from '@/hooks/translator'
import { useCmsStore } from '@/store/cms'

function AboutMe() {
  const translate = useTranslations()
  const { experience, education } = useCmsStore((state) => state.cms.about_me)

  return (
    <section id="about-me">
      <div className="heading">
        <h2>{translate('about me')}</h2>
        <hr className="divider" />
      </div>
      <div className="flex justify-between flex-col md:flex-row xl:mx-16">
        <div className="w-full md:w-1/2">
          <h3 className="heading">{translate('Experience')}</h3>
          <Timeline id="experience" source={experience} />
        </div>
        <div className="w-full md:w-1/2">
          <h3 className="heading">{translate('Education')}</h3>
          <Timeline id="education" source={education} />
        </div>
      </div>
    </section>
  )
}

export default AboutMe
