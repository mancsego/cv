import aws from '@/assets/stack/aws.png'
import gcp from '@/assets/stack/gcp.png'
import java from '@/assets/stack/java.png'
import js from '@/assets/stack/js.png'
import kotlin from '@/assets/stack/kotlin.webp'
import laravel from '@/assets/stack/laravel.png'
import next from '@/assets/stack/next.png'
import php from '@/assets/stack/php.png'
import react from '@/assets/stack/react.png'
import spring from '@/assets/stack/spring-boot.png'
import ts from '@/assets/stack/ts.png'
import vue from '@/assets/stack/vue.png'
import Slide from '@/components/atoms/Slide'
import { useTranslations } from '@/hooks/translator'
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/react'
import { ImgHTMLAttributes } from 'react'

const technologies = [
  { src: react, title: 'React', width: 50 },
  { src: next, title: 'Next.js', cls: 'bg-white' },
  { src: vue, title: 'Vue' },
  { src: ts, title: 'Typescript' },
  { src: js, title: 'Javascript' },
  { src: spring, title: 'Spring Boot', width: 50 },
  { src: java, title: 'Java', cls: 'bg-white' },
  { src: kotlin, title: 'Kotlin', cls: 'bg-white' },
  { src: laravel, title: 'Laravel', cls: 'bg-white', width: 50 },
  { src: php, title: 'PHP', cls: 'px-2 bg-white', width: 50 },
  {
    src: aws,
    title: 'Amazon Web Services',
    cls: 'bg-white py-2 px-1',
    width: 50
  },
  {
    src: gcp,
    title: 'Google Cloud Platform',
    cls: 'bg-white p-1'
  }
]

function Stack() {
  const translate = useTranslations()

  const content = technologies.map(({ src, title, cls, width }) => {
    const className = `${cls ?? ''} h-9 my-2 scalable p-1 rounded-lg`.trim()
    const props: ImgHTMLAttributes<HTMLImageElement> = {
      src,
      title,
      className,
      height: 55,
      width: width ?? 45,
      loading: 'lazy'
    }
    return (
      <Popover className="relative flex content-around" key={title}>
        <PopoverButton className="grow flex justify-around focus:outline-none">
          <img {...props} />
        </PopoverButton>
        <PopoverPanel anchor="bottom" className="overflow-hidden! bg-radial from-react-gray to-80%">
          <Slide direction="up" className="text-center">
            <div className="px-2 py-4">{title}</div>
          </Slide>
        </PopoverPanel>
      </Popover>
    )
  })

  return (
    <PopoverGroup className="flex flex-col items-center flex-wrap">
      <h3 className="mb-2">{translate('My Stack')}</h3>
      <div className="w-full grid grid-flow-col grid-rows-3 gap-1">{content}</div>
    </PopoverGroup>
  )
}

export default Stack
