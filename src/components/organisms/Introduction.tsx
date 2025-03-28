import IntroductionText from '@/components/atoms/IntroductionText'
import Stack from '@/components/molecules/Stack'
import { useCmsStore } from '@/store/cms'

function CVButton() {
  const downloadCV = async () => {
    const { fetchFile } = await import('@/common/backend')
    void fetchFile()
  }

  return (
    <div
      className="inline-flex content-center item-center my-2 btn-rounded fill-white hover:bg-primary hover:fill-black"
      onClick={downloadCV}>
      <div>
        <svg className="h-4 w-3">
          <use xlinkHref="#download" />
        </svg>
      </div>
    </div>
  )
}

function Introduction() {
  const desc = useCmsStore((state) => state.cms.intro)

  const heroLg = new URL('@/assets/me.webp', import.meta.url).href
  const heroMd = new URL('@/assets/me_md.webp', import.meta.url).href
  const heroSm = new URL('@/assets/me_sm.webp', import.meta.url).href

  return (
    <section>
      <div className="flex flex-col md:flex-row justify-around">
        <div className="basis-1/2 flex justify-around items-center xl:pl-14">
          <picture className="grow relative">
            <div className="absolute inset-0 l bg-radial from-transparent from-30% to-react-gray"></div>
            <source media="(max-width: 767px)" srcSet={heroSm} />
            <source media="(max-width: 1365px)" srcSet={heroMd} />
            <source media="(min-width: 1365px)" srcSet={heroLg} />
            <img
              src={heroLg}
              alt="portrait-image"
              fetchPriority="high"
              className="object-cover object-[50%_20%] size-full md:max-h-[1000px] lg:max-h-[900px] overflow-hidden rounded-2xl"
            />
          </picture>
          <div className="px-5 grow absolute md:hidden left-0 right-0 bottom-0 bg-gradient-to-b from-transparent to-react-gray">
            <IntroductionText />
          </div>
        </div>
        <div className="basis-1/2 px-5">
          <div className="hidden md:block">
            <IntroductionText />
          </div>
          <div>{desc}</div>
          <CVButton />
          <Stack />
        </div>
      </div>
    </section>
  )
}

export default Introduction
