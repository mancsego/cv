import './Stack.css'
import react from '@/assets/stack/react.png'
import vue from '@/assets/stack/vue.png'
import ts from '@/assets/stack/ts.png'
import js from '@/assets/stack/js.png'
import spring from '@/assets/stack/spring-boot.png'
import java from '@/assets/stack/java.png'
import php from '@/assets/stack/php.png'
import laravel from '@/assets/stack/laravel.png'
import aws from '@/assets/stack/aws.png'
import { useState } from 'react'
import { translate } from '@/common/translator'

const Stack = () => {
  const [selected, setSelected] = useState('')
  const technologies = [
    [
      { src: react, title: 'React', cls: '', width: 50 },
      { src: vue, title: 'Vue', cls: '' },
      { src: ts, title: 'Typescript', cls: 'rounded-lg' },
      { src: js, title: 'Javascript', cls: 'rounded-lg' },
    ],
    [
      { src: spring, title: 'Spring Boot', cls: '', width: 50 },
      { src: java, title: 'Java', cls: 'bg-white rounded-lg' },
      { src: laravel, title: 'Laravel', cls: '', width: 65 },
      { src: php, title: 'PHP', cls: '' },
    ],
    [
      {
        src: aws,
        title: 'Amazon Web Services',
        cls: 'bg-white rounded-lg p-2',
        width: 60,
      },
    ],
  ]
  const content = technologies.map((tech) =>
    tech.map(({ src, title, cls, width }) => (
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
    ))
  )
  return (
    <div className="mt-5">
      <h3>{translate('My Stack')}</h3>
      <div className="wrapper">
        <div className="w-full xl:w-2/5">{content[0]}</div>
        <div className="w-full xl:w-2/5">{content[1]}</div>
        <div className="w-full xl:w-1/5">{content[2]}</div>
      </div>
      <div className="flex justify-center h-6 font-light text-sm uppercase tracking-widest">
        {selected}
      </div>
    </div>
  )
}

export default Stack
