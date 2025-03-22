import { TimelineProps } from '@/common/types'
import TimelineElement from '@/components/atoms/TimelineElement'

function Timeline({ source, id }: TimelineProps) {
  const elements = source.map(({ time, headline, desc }, i) => (
    <TimelineElement key={`${id}-${i}`} time={time} headline={headline} desc={desc} />
  ))
  return <ol className="relative border-l border-gray-200 pr-2">{elements}</ol>
}

export default Timeline
