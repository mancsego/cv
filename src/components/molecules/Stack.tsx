import aws from '@/assets/stack/aws.png'
import java from '@/assets/stack/java.png'
import js from '@/assets/stack/js.png'
import laravel from '@/assets/stack/laravel.png'
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
  [
    { src: react, title: 'React', cls: '', width: 50 },
    { src: vue, title: 'Vue', cls: '' },
    { src: ts, title: 'Typescript', cls: 'rounded-lg' },
    { src: js, title: 'Javascript', cls: 'rounded-lg' }
  ],
  [
    { src: spring, title: 'Spring Boot', cls: '', width: 50 },
    { src: java, title: 'Java', cls: 'bg-white rounded-lg' },
    { src: laravel, title: 'Laravel', cls: '', width: 65 },
    { src: php, title: 'PHP', cls: '' }
  ],
  [
    {
      src: aws,
      title: 'Amazon Web Services',
      cls: 'bg-white rounded-lg p-2',
      width: 60
    }
  ]
]

function Stack() {
  const translate = useTranslations()

  const content = technologies.map((tech) =>
    tech.map(({ src, title, cls, width }) => {
      const className = `${cls} h-9 my-2 scalable`.trim()
      const props: ImgHTMLAttributes<HTMLImageElement> = {
        src,
        title,
        className,
        height: '55',
        width: width ?? '45',
        loading: 'lazy'
      }
      return (
        <Popover className="relative flex content-around" key={title}>
          <PopoverButton className="grow flex justify-around focus:outline-none">
            <img {...props} />
          </PopoverButton>
          <PopoverPanel
            anchor="bottom"
            className="overflow-hidden! bg-linear-to-b from-react-gray to-react-gray/10">
            <Slide direction="up" className="text-center">
              <div className="px-3 pb-4">{title}</div>
            </Slide>
          </PopoverPanel>
        </Popover>
      )
    })
  )
  return (
    <PopoverGroup className="flex flex-col items-center flex-wrap">
      <h3 className="mb-2">{translate('My Stack')}</h3>
      <div className="w-full grid grid-flow-col grid-rows-3 gap-1">{content}</div>
    </PopoverGroup>
  )
}

export default Stack
