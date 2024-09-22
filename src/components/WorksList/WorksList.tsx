import { twMerge } from 'tailwind-merge'

import type { WorkOrder } from '@/types/models/Order.model'

import WorkCard from './components/WorkCard'

export interface WorkListProps {
  worksList: WorkOrder[]
  minHeight: number
  className?: string
}

const WorksList = ({ className, worksList, minHeight }: WorkListProps) => {
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
