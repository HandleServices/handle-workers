'use client'
import { useEffect, useState } from 'react'

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@/components/Select/Select'

interface SelectProps {
  values: string[]
  placeholder: string
  boxClassName?: string
  itemClassName?: string
}

function SelectComponent({
  values,
  placeholder = 'Select one',
  boxClassName = '',
  itemClassName = '',
  ...rest
}: SelectProps) {
  const [selectedValue, setSelectedValue] = useState('')

  return (
    <Select onValueChange={setSelectedValue} {...rest}>
      <SelectTrigger className={`w-[180px] ${boxClassName}`}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {values.map((value) => (
          <SelectItem key={value} value={value} className={itemClassName}>
            {value}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default SelectComponent
