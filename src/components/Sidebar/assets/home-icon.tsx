import React from 'react'

export const HomeIcon: React.ElementType = ({
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
      <path d="M22 5.724V2a1 1 0 10-2 0v2.366L14.797.855a4.98 4.98 0 00-5.594 0l-7 4.724A4.995 4.995 0 000 9.724V19c0 2.757 2.243 5 5 5h2a1 1 0 001-1v-9c0-.551.448-1 1-1h6c.552 0 1 .449 1 1v9a1 1 0 001 1h2c2.757 0 5-2.243 5-5V9.724a4.995 4.995 0 00-2-4z" />
    </svg>
  )
}
