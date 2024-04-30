import React from 'react'

export const CalendarIcon: React.ElementType = ({
  fill,
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  const svgRef = React.useRef<SVGSVGElement>(null)

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill={fill}
      data-name="Layer 1"
      viewBox="0 0 24 24"
      width={512}
      height={512}
      ref={svgRef}
      {...props}
    >
      <path d="M24 7v1H0V7a5 5 0 015-5h1V1a1 1 0 012 0v1h8V1a1 1 0 012 0v1h1a5 5 0 015 5zm0 10c0 3.86-3.141 7-7 7s-7-3.14-7-7 3.141-7 7-7 7 3.14 7 7zm-5 .586l-1-1V15a1 1 0 00-2 0v2c0 .265.105.52.293.707L17.586 19A1 1 0 0019 17.586zM8 17a8.98 8.98 0 013.349-7H0v9a5 5 0 005 5h6.349A8.98 8.98 0 018 17z" />
    </svg>
  )
}
