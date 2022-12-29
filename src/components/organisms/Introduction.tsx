import { useAppSelector } from '../../store'
import { selectIntro } from '../../store/features/cmsSlice'
import IntroductionText from '../atoms/IntroductionText'
import './Introduction.css'

const Introduction = (): JSX.Element => {
  const desc = useAppSelector(selectIntro)
  return (
    <div className="flex flex-col md:flex-row justify-around">
      <div id="me" className="md:basis-1/2 flex justify-center items-end">
        <div className="grow md:hidden backdrop-blur-sm px-5">
          <IntroductionText />
        </div>
      </div>
      <div className="md:basis-1/2 px-4 xl:pl-0 xl:pr-5">
        <div className="py-6 hidden md:block">
          <IntroductionText />
        </div>
        {desc}
      </div>
    </div>
  )
}

export default Introduction
