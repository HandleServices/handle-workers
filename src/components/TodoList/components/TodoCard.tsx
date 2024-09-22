import React, { useState } from 'react'

import { CustomCheckbox } from '../../Checkbox'

export interface TodoCardProps {
  service: string
  client: string
  hour: string
}

const TodoCard = ({ service, client, hour }: TodoCardProps) => {
  const [checked, setChecked] = useState<boolean>(false)

  const handleClick = () => {
    setChecked(!checked)
  }

  return (
    <div className="bg-white h-20 w-full cursor-auto">
      <div className="grid grid-cols-[40px_1fr_80px] h-full items-center">
        <div
          className="p-1 h-20 cursor-pointer flex justify-center items-center"
          onClick={handleClick}
        >
          <CustomCheckbox
            id="card-check-box"
            className="cursor-pointer "
            label=""
            checkboxId="0"
            checked={checked === true}
            onCheckedChange={(checked) => {
              const isChecked = checked === 'indeterminate' ? true : checked
              setChecked(isChecked)
            }}
          />
        </div>

        <div>
          <h3
            className={`text-handle-gray-300 select-none font-semibold text-base tracking-widest ${checked ? 'line-through' : ''}`}
          >
            {service}
          </h3>
          <p
            className={`text-handle-gray select-none text-sm tracking-widest ${checked ? 'line-through' : ''}`}
          >
            {client}
          </p>
        </div>
        <p
          className={`text-handle-blue font-bold text-sm select-none self-center text-center w-[72px] bg-handle-background-blue rounded-sm tracking-widest ${checked ? 'line-through' : ''}`}
        >
          {hour}
        </p>
      </div>
    </div>
  )
}

export default TodoCard
