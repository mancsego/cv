import aws from '@/assets/stack/aws.png'
import java from '@/assets/stack/java.png'
import js from '@/assets/stack/js.png'
import laravel from '@/assets/stack/laravel.png'
import php from '@/assets/stack/php.png'
import react from '@/assets/stack/react.png'
import spring from '@/assets/stack/spring-boot.png'
import ts from '@/assets/stack/ts.png'
import vue from '@/assets/stack/vue.png'
import { useTranslations } from '@/hooks/translator'
import { useState } from 'react'

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
  const [selected, setSelected] = useState('')

  const content = technologies.map((tech) =>
    tech.map(({ src, title, cls, width }) => (
      <div className="w-1/4 xl:w-2/5" key={title}>
        <img
          src={src}
          loading="lazy"
          alt={title}
          className={cls}
          key={title}
          width={width ?? 45}
          height="55"
          onClick={() => {
            setSelected(title)
          }}
        />
      </div>
    ))
  )
  return (
    <div className="mt-5">
      <h3>{translate('My Stack')}</h3>
      <div className="wrapper content-center">{content}</div>
      <div className="flex justify-center h-6 font-light text-sm uppercase tracking-widest">
        {selected}
      </div>
    </div>
  )
}

export default Stack
