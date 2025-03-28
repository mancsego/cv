import TimelineElement from '@/components/atoms/TimelineElement.tsx'
import { TimelineInstance } from '@/store/cms.ts'

function Timeline({ source, id }: { id: string; source: TimelineInstance[] }) {
  if (!source!.length) return <div className="loading h-24"></div>

  const elements = source.map(({ time, headline, desc }: TimelineInstance, i: number) => (
    <TimelineElement key={`${id}-${i}`} time={time} headline={headline} desc={desc} />
  ))
  return <ol className="relative border-l border-gray-200 pr-2">{elements}</ol>
}

export default Timeline
