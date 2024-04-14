export default function TimePickerLabel({ children, className, ...rest }) {
  return (
    <label className={className} {...rest}>
      {children}
    </label>
  )
}
