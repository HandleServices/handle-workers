import './TimePickerComponent.css'

import resolveConfig from 'tailwindcss/resolveConfig'

import Input from '../Input'
import config from './../../../tailwind.config'

const handleColors = resolveConfig(config).handle.colors

function inputStyle(value: string) {
  return {
    color:
      value !== '00:00' ? handleColors.blue.DEFAULT : handleColors.gray[700],
    borderColor:
      value !== '00:00' ? handleColors.blue.DEFAULT : handleColors.gray[700],
  }
}

interface TimePickerComponentProps {
  width?: number
  height?: number
  hour: string
  setHour: React.Dispatch<React.SetStateAction<string>>
  labelName: string
  style?: React.CSSProperties
  className?: string
}

const TimePickerComponent: React.FC<TimePickerComponentProps> = ({
  width = 140,
  height = 60,
  hour,
  setHour,
  labelName,
  style,
}) => {
  return (
    <div>
      <label
        style={{
          ...inputStyle(hour),
        }}
      >
        {labelName}
      </label>
      <Input
        type="time"
        style={{
          width,
          height,
          textAlign: 'center',
          letterSpacing: '.5rem',
          lineHeight: `${height}px`,
          fontSize: `${height / 30}rem`,
          ...inputStyle(hour),
          ...style,
        }}
        onChange={(event) => setHour(event.target.value)}
        value={hour}
      />
    </div>
  )
}

export default TimePickerComponent
