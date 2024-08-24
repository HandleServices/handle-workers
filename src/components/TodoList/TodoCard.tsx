import React, { useState } from 'react'

import { CustomCheckbox } from '../Checkbox'

export interface TodoCardProps {
  type: string
  client: string
  hour: string
}

const TodoCard = ({ type, client, hour }: TodoCardProps) => {
  const [checked, setChecked] = useState<boolean>(false)

  const handleClick = () => {
    setChecked((prevChecked) => !prevChecked)
  }

  return (
    <div className="bg-white h-20 w-full cursor-pointer" onClick={handleClick}>
      <div className="grid grid-cols-[30px_1fr_80px] h-full items-center">
        <CustomCheckbox
          id="card-check-box"
          label=""
          checkboxId="0"
          checked={checked === true}
          onCheckedChange={(checked) => {
            const isChecked = checked === 'indeterminate' ? true : checked
            setChecked(isChecked)
          }}
        />
        <div>
          <h3
            className={`text-handle-gray-300 select-none font-semibold text-base tracking-widest ${checked ? 'line-through' : ''}`}
          >
            {type}
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
