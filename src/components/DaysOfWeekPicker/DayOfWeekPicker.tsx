import { ToggleGroup, ToggleGroupItem } from '@radix-ui/react-toggle-group'
import React, { forwardRef, Ref } from 'react'

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
    key: 'terca',
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

interface StyledToggleButtonGroupProps {
  className?: string
  children: React.ReactNode
  onChange?: (value: string[]) => void
}

const StyledToggleButtonGroup = forwardRef<
  HTMLDivElement,
  StyledToggleButtonGroupProps
>(({ onChange, ...props }, ref) => {
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
})

StyledToggleButtonGroup.displayName = 'StyledToggleButtonGroup' // Add display name

interface StyledToggleProps {
  value: string
  children: React.ReactNode
}

const StyledToggle = forwardRef<HTMLButtonElement, StyledToggleProps>(
  ({ ...props }, ref) => {
    return (
      <ToggleGroupItem
        ref={ref}
        style={{
          height: '2.8125rem',
          width: '2.8125rem',
          textAlign: 'center',
          borderRadius: '50%',
          fontSize: '1.1rem',
          padding: '0.1px 0px 4px 0px',
        }}
        {...props}
        className="text-base tracking-[0.08rem] text-handle-gray-700 rounded-full outline-none focus-visible:ring-0 border-[0.094rem] border-handle-gray-700 data-[state=on]:border-handle-blue data-[state=on]:bg-handle-background-blue font-medium data-[state=on]:text-handle-blue"
        value={props.value}
        key={props.value}
        aria-label={props.value}
      >
        {props.children}
      </ToggleGroupItem>
    )
  },
)

StyledToggle.displayName = 'StyledToggle' // Add display name

interface DayOfWeekPickerProps {
  className?: string
  props?: React.ComponentProps<'div'>
  onChange?: (value: string[]) => void
}

export const DayOfWeekPicker = forwardRef<HTMLDivElement, DayOfWeekPickerProps>(
  ({ onChange, ...props }, ref) => {
    return (
      <StyledToggleButtonGroup onChange={onChange} {...props} ref={ref}>
        {DAYS.map((day) => (
          <StyledToggle key={day.key} value={day.key}>
            {day.label}
          </StyledToggle>
        ))}
      </StyledToggleButtonGroup>
    )
  },
)

DayOfWeekPicker.displayName = 'DayOfWeekPicker' // Add display name
