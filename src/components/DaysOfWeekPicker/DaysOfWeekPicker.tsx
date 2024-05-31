import { ToggleGroup, ToggleGroupItem } from '@radix-ui/react-toggle-group'
import React, { forwardRef } from 'react'

const DAYS = [
  { key: 'domingo', label: 'dom' },
  { key: 'segunda', label: 'seg' },
  { key: 'terca', label: 'ter' },
  { key: 'quarta', label: 'qua' },
  { key: 'quinta', label: 'qui' },
  { key: 'sexta', label: 'sex' },
  { key: 'sabado', label: 'sab' },
]

interface DaysOfWeekGroupProps {
  className?: string
  children: React.ReactNode
  onChange?: (value: string[]) => void
}

const DaysOfWeekGroup = forwardRef<HTMLDivElement, DaysOfWeekGroupProps>(
  ({ onChange, ...props }, ref) => {
    return (
      <ToggleGroup
        aria-label="Escolha os dias da semana"
        type="multiple"
        className={props.className}
        {...props}
        ref={ref}
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          justifyContent: 'center',
          padding: '0.2px 0px',
        }}
        onValueChange={onChange}
      >
        {props.children}
      </ToggleGroup>
    )
  },
)

DaysOfWeekGroup.displayName = 'DaysOfWeekGroup'

interface DaysItemProps {
  value: string
  children: React.ReactNode
}

const DaysItem = forwardRef<HTMLButtonElement, DaysItemProps>(
  ({ ...props }, ref) => {
    return (
      <ToggleGroupItem
        ref={ref}
        style={{
          height: '2.8125rem',
          width: '2.8125rem',
          textAlign: 'center',
          borderRadius: '50%',
          padding: '0.1px 0px 4px 0px',
        }}
        {...props}
        className="text-base tracking-[0.08rem] text-handle-gray-300 rounded-full outline-none focus-visible:ring-0 border-1.5 border-handle-gray-300 data-[state=on]:border-handle-blue data-[state=on]:bg-handle-background-blue font-normal data-[state=on]:text-handle-blue"
        value={props.value}
        key={props.value}
        aria-label={props.value}
      >
        {props.children}
      </ToggleGroupItem>
    )
  },
)

DaysItem.displayName = 'DaysItem'

interface DayOfWeekPickerProps {
  className?: string
  props?: React.ComponentProps<'div'>
  onChange?: (value: string[]) => void
}

export const DaysOfWeekPicker = forwardRef<
  HTMLDivElement,
  DayOfWeekPickerProps
>(({ onChange, ...props }, ref) => {
  return (
    <DaysOfWeekGroup onChange={onChange} {...props} ref={ref}>
      {DAYS.map((day) => (
        <DaysItem key={day.key} value={day.key}>
          {day.label}
        </DaysItem>
      ))}
    </DaysOfWeekGroup>
  )
})

DaysOfWeekPicker.displayName = 'DayOfWeekPicker'
