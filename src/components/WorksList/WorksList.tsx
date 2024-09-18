import { twMerge } from 'tailwind-merge'

import type { WorkService } from '@/types/models/Service.model'

import WorkCard from './components/WorksCard'

export interface ServiceListProps {
  worksList: WorkService[]
  minHeight: number
  className?: string
}

const WorksList = ({ className, worksList, minHeight }: ServiceListProps) => {
  return (
    <div
      className={twMerge(
        'flex flex-col p-2 pb-6 rounded-md w-5/6 py-2',
        className,
      )}
    >
      <div
        style={{ minHeight: `${minHeight}px` }}
        className="bg-white px-6 py-2 w-full"
      >
        {worksList &&
          worksList.map((work, index) => (
            <div className="w-full" key={index}>
              <WorkCard cardInfo={work} />
              <hr />
            </div>
          ))}
      </div>
    </div>
  )
}

export default WorksList
