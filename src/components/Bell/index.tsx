import BellIcon from './assets/Bell'

type BellComponentProps = {
  width?: number
  height?: number
  className?: string
}

export default function Bell({
  width = 22,
  height = 22,
  className,
  ...props
}: BellComponentProps) {
  return (
    <div className="self-center cursor-pointer">
      <BellIcon
        width={width}
        height={height}
        className={`${className}`}
        {...props}
      />
    </div>
  )
}
