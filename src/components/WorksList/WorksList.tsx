import type { WorkService } from '@/types/models/Service.model'

import WorkCard from './components/WorksCard'

export interface ServiceListProps {
  worksList: WorkService[]
  minHeight: number
  className?: string
}

const WorksList = ({
  className,
  worksList,
  minHeight,
  ...props
}: ServiceListProps) => {
  return (
    <div
      className={`flex flex-col p-2 pb-6 rounded-md w-5/6 py-2 h-full ${className}`}
    >
      <div
        style={{ minHeight: `${minHeight}px` }}
        className="bg-white h-full px-6 py-2"
      >
        {worksList &&
          worksList.map((work, index) => {
            return (
              <div className="w-full" key={index}>
                <WorkCard cardInfo={work} />
                <hr />
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default WorksList
