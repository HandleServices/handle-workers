import './TimePickerComponent.css'

import Input from '../Input'

interface TimePickerComponentProps {
  width?: number
  height?: number
  hour: string
  setHour: React.Dispatch<React.SetStateAction<string>>
  style?: React.CSSProperties
  className?: string
}

const TimePickerComponent: React.FC<TimePickerComponentProps> = ({
  width = 140,
  height = 60,
  hour,
  setHour,
  style,
}) => {
  return (
    <Input
      type="time"
      style={{
        width,
        height,
        textAlign: 'center',
        letterSpacing: '.5rem',
        lineHeight: `${height}px`,
        fontSize: `${width / 4}px`,
        ...style,
      }}
      onChange={(event) => setHour(event.target.value)}
      value={hour}
    />
  )
}

export default TimePickerComponent
