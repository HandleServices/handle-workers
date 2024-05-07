import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckIcon, DividerHorizontalIcon } from '@radix-ui/react-icons'
import * as React from 'react'

interface CustomCheckboxProps
  extends React.ComponentPropsWithoutRef<typeof Checkbox.Root> {
  label: string
  checkboxId: string
}

const CustomCheckbox = React.forwardRef<
  React.ElementRef<typeof Checkbox.Root>,
  CustomCheckboxProps
>(({ label, checkboxId, ...props }, ref) => (
  <div className="flex gap-2 items-start">
    <Checkbox.Root
      {...props}
      ref={ref}
      id={checkboxId}
      className="w-4 h-4 mt-1 rounded-sm ring-1 ring-inset ring-handle-gray-700 focus:outline-none focus:ring-1 focus:ring-inset data-[state=checked]:ring-handle-blue"
    >
      <Checkbox.Indicator className="text-handle-blue">
        {props.checked === 'indeterminate' && <DividerHorizontalIcon />}
        {props.checked === true && <CheckIcon />}
      </Checkbox.Indicator>
    </Checkbox.Root>

    <label
      className="max-w-[300px] text-[0.95rem] leading-normal"
      htmlFor={checkboxId}
    >
      {label}
    </label>
  </div>
))

CustomCheckbox.displayName = 'CustomCheckbox'

export { CustomCheckbox }
