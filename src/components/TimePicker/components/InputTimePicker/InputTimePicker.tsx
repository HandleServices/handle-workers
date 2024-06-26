import './inputTimePicker.styles.css'

import Input from '../../../Input'

export interface InputTimePickerProps {
  width?: number
  height?: number
  hour: string
  setHour: React.Dispatch<React.SetStateAction<string>>
  style?: React.CSSProperties
  className?: string
}

const InputTimePicker: React.FC<InputTimePickerProps> = ({
  width = 140,
  height = 60,
  hour,
  setHour,
  style,
}) => {
  return (
    <Input
      type="time"
      className={`tracking-[0.5em] m-0 bg-handle-background}`}
      style={{
        width,
        height,
        textAlign: 'center',
        fontWeight: 300,
        lineHeight: `${height / 16}rem`,
        fontSize: `${width / 64}rem`,
        ...style,
      }}
      onChange={(event) => setHour(event.target.value)}
      value={hour}
    />
  )
}

export default InputTimePicker
