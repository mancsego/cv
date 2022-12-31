import { TimelineInstance } from '../../common/types'

const TimelineElement = ({
  time,
  headline,
  desc,
}: TimelineInstance): JSX.Element => {
  return (
    <li className="mb-8 ml-4">
      <div className="absolute w-4 h-4 bg-gray-200 rounded-full -left-2 border border-white"></div>
      <time className="mb-1 text-sm font-normal leading-none text-secondary">
        {time}
      </time>
      <h4 className="py-2">{headline}</h4>
      <p className="text-base font-normal text-secondary pr-1 ">{desc}</p>
    </li>
  )
}

export default TimelineElement
