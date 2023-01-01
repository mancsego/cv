import './Stack.css'
import react from '@/assets/react.png'
import vue from '@/assets/vue.png'
import ts from '@/assets/ts.png'
import js from '@/assets/js.png'
import spring from '@/assets/spring-boot.png'
import java from '@/assets/java.png'
import php from '@/assets/php.png'
import laravel from '@/assets/laravel.png'
import aws from '@/assets/aws.png'

const Stack = () => {
  const technologies = [
    [
      { src: react, title: 'React', cls: '' },
      { src: vue, title: 'Vue', cls: '' },
      { src: ts, title: 'Typescript', cls: 'rounded-lg' },
      { src: js, title: 'Javascript', cls: 'rounded-lg' },
    ],
    [
      { src: spring, title: 'Spring Boot', cls: '' },
      { src: java, title: 'Java', cls: 'bg-white rounded-lg' },
      { src: laravel, title: 'Laravel', cls: '' },
      { src: php, title: 'PHP', cls: '' },
    ],
    [
      {
        src: aws,
        title: 'Amazon Web Services',
        cls: 'bg-white rounded-lg p-2',
      },
    ],
  ]
  const content = technologies.map((tech) =>
    tech.map(({ src, title, cls }) => (
      <img src={src} alt={title} title={title} className={cls} key={title} />
    ))
  )
  return (
    <div className="mt-5">
      <h3>My Stack</h3>
      <div className="wrapper">
        <div className="w-full xl:w-2/5">{content[0]}</div>
        <div className="w-full xl:w-2/5">{content[1]}</div>
        <div className="w-full xl:w-1/5">{content[2]}</div>
      </div>
    </div>
  )
}

export default Stack
