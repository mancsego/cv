import Divider from '../atoms/Divider'
import Timeline from './Timeline'

const AboutMe = (): JSX.Element => {
  const experience = [
    {
      time: 'March 2022',
      headline: 'Marketing UI design in Figma',
      desc: 'All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.',
    },
    {
      time: 'February 2022',
      headline: 'Marketing UI design in Figma',
      desc: 'All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.',
    },
  ]
  const education = [
    {
      time: 'sdf.sdmflds 2022',
      headline: 'Marketing UI design in Figma',
      desc: 'All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.',
    },
    {
      time: 'sdljflds 2022',
      headline: 'Marketing UI design in Figma',
      desc: 'All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.',
    },
  ]
  return (
    <div id="about-me">
      <div className="heading">
        <h2>about me</h2>
        <Divider />
      </div>
      <div className="flex justify-between flex-col md:flex-row xl:mx-16">
        <div className="w-full md:w-1/2">
          <h3 className="heading">Experience</h3>
          <Timeline id="expecrience" source={experience} />
        </div>
        <div className="w-full md:w-1/2">
          <div className="heading">Education</div>
          <Timeline id="education" source={education} />
        </div>
      </div>
    </div>
  )
}

export default AboutMe
