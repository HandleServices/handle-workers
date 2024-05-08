import React from 'react'

export const AboutIcon: React.ElementType = ({
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
      <path d="M24 12A12 12 0 1112 0a12.013 12.013 0 0112 12zm-10 0a2 2 0 00-2-2h-2v2h2v7h2zm-2-7a1.5 1.5 0 101.5 1.5A1.5 1.5 0 0012 5z" />
    </svg>
  )
}
