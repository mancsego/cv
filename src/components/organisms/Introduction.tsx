import IntroductionText from '@/components/atoms/IntroductionText'
import Stack from '@/components/molecules/Stack'
import { useCmsStore } from '@/store/cms'

function Introduction() {
  const desc = useCmsStore((state) => state.cms.intro)

  const downloadCV = async () => {
    const { fetchFile } = await import('../../common/backend')
    void fetchFile('istvan_abraham_cv.pdf')
  }
  return (
    <section className="flex flex-col md:flex-row justify-around">
      <div id="me" className="md:basis-1/2 flex justify-center items-end">
        <div className="grow md:hidden backdrop-blur-xs px-5">
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
            className="inline-flex content-center item-center my-2 btn-rounded fill-white hover:bg-primary hover:fill-black"
            onClick={downloadCV}>
            <div>
              <svg className="h-4 w-3">
                <use xlinkHref="#download" />
              </svg>
            </div>
          </div>
        </div>
        <Stack />
      </div>
    </section>
  )
}

export default Introduction
