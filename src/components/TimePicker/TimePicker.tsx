import './inputTimePicker.styles.css'

import Input from '../Input'

export interface TimePickerProps {
  width?: number
  height?: number
  hour: string
  setHour: React.Dispatch<React.SetStateAction<string>>
  style?: React.CSSProperties
  className?: string
}

const TimePicker: React.FC<TimePickerProps> = ({
  width = 140,
  height = 60,
  hour,
  setHour,
  style,
  className,
}) => {
  return (
    <Input
      type="time"
      className={`m-0 bg-handle-background ${className}`}
      inputClassName={`${className} `}
      style={{
        width,
        height,
        textAlign: 'center',
        fontWeight: 100,
        lineHeight: `${height / 16}rem`,
        fontSize: `${width / 70}rem`,
        ...style,
      }}
      onChange={(event) => setHour(event.target.value)}
      value={hour}
    />
  )
}

export default TimePicker
