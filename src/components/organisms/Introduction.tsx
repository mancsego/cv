import './Introduction.css'
import { useAppSelector } from '../../store'
import { selectIntro } from '../../store/features/cmsSlice'
import IntroductionText from '../atoms/IntroductionText'
import Stack from '../molecules/Stack'

const Introduction = (): JSX.Element => {
  const desc = useAppSelector(selectIntro)
  const downloadCV = async () => {
    const { fetchFile } = await import('../../common/backend')
    void fetchFile('istvan_abraham_cv.pdf')
  }
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
        <div>
          <div>{desc}</div>
          <div
            id="download"
            onClick={() => {
              void downloadCV()
            }}
          >
            <svg className="fill-primary h-4 w-4">
              <use xlinkHref="#download" />
            </svg>
          </div>
        </div>
        <Stack />
      </div>
    </div>
  )
}

export default Introduction
