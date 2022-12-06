import Divider from '../atoms/Divider'

const AboutMe = (): JSX.Element => {
  return (
    <div id="about-me">
      <div className="heading">
        <h2>about me</h2>
        <Divider />
      </div>
      <div className="flex justify-between">
        <div className="grow h-20 bg-slate-200">Experience</div>
        <div className="grow h-20 bg-indigo-400">Education</div>
      </div>
    </div>
  )
}

export default AboutMe
