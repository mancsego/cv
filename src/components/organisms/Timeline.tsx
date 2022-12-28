import { TimelineProps } from '../../common/types'
import TimelineElement from '../atoms/TimelineElement'

const Timeline = ({ source, id }: TimelineProps): JSX.Element => {
  const elements = source.map(({ time, headline, desc }, i) => (
    <TimelineElement
      key={`${id}-${i}`}
      time={time}
      headline={headline}
      desc={desc}
    />
  ))
  return <ol className="relative border-l border-gray-200 pr-2">{elements}</ol>
}

export default Timeline
