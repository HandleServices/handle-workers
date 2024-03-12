import { ToggleGroup, ToggleGroupItem } from '@radix-ui/react-toggle-group'
import React from 'react'

const DAYS = [
  {
    key: 'domingo',
    label: 'dom',
  },
  {
    key: 'segunda',
    label: 'seg',
  },
  {
    key: 'terÃ§a',
    label: 'ter',
  },
  {
    key: 'quarta',
    label: 'qua',
  },
  {
    key: 'quinta',
    label: 'qui',
  },
  {
    key: 'sexta',
    label: 'sex',
  },
  {
    key: 'sabado',
    label: 'sab',
  },
]

const StyledToggleButtonGroup = ({ ...props }) => {
  return (
    <ToggleGroup
      aria-label="Escolha os dias da semana"
      type="multiple"
      className={props.className}
      {...props}
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(7, 1fr)',
        justifyContent: 'center',
        padding: '0.2px 0px',
      }}
    >
      {props.children}
    </ToggleGroup>
  )
}

const StyledToggle = ({ ...props }) => {
  return (
    <ToggleGroupItem
      style={{
        height: '2.879375rem',
        width: '2.8125rem',
        textAlign: 'center',
        borderRadius: '50%',
        fontSize: '1.1rem',
        padding: '0.1px 0px 4px 0px',
      }}
      {...props}
      className="text-base tracking-[0.08rem] text-handle-gray-700 rounded-full outline-none focus-visible:ring-0 border-[1.82px] border-black data-[state=on]:border-handle-blue data-[state=on]:bg-handle-blue-500-15 font-medium  data-[state=on]:border-2 data-[state=on]:text-handle-blue"
      value={props.value}
      key={props.value}
      aria-label={props.value}
    >
      {props.children}
    </ToggleGroupItem>
  )
}

export const DayOfWeekPicker = ({ ...props }) => {
  return (
    <StyledToggleButtonGroup {...props}>
      {DAYS.map((day) => (
        <StyledToggle key={day.key} value={day.key}>
          {day.label}
        </StyledToggle>
      ))}
    </StyledToggleButtonGroup>
  )
}
