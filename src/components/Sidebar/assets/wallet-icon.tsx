import React from 'react'

export const WalletIcon: React.ElementType = ({
  fill,
  className,
  ...props
}: React.SVGProps<SVGSVGElement>) => {
  const svgRef = React.useRef<SVGSVGElement>(null)

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      className={className}
      viewBox="0 0 24 24"
      width={512}
      height={512}
      ref={svgRef}
      {...props}
    >
      <path d="M18.5 9.5A1.5 1.5 0 0020 8v-.687A5.32 5.32 0 0014.687 2H13.5v-.5a1.5 1.5 0 00-3 0V2H9.313a5.313 5.313 0 00-1.541 10.4l2.728.746V19H9.313A2.316 2.316 0 017 16.687V16a1.5 1.5 0 00-3 0v.687A5.32 5.32 0 009.313 22H10.5v.5a1.5 1.5 0 003 0V22h1.187a5.313 5.313 0 001.541-10.4l-2.728-.744V5h1.187A2.316 2.316 0 0117 7.313V8a1.5 1.5 0 001.5 1.5zm-3.118 4.979a2.314 2.314 0 01-.7 4.521H13.5v-5.035zM10.5 10.035l-1.882-.514A2.314 2.314 0 019.313 5H10.5z" />
    </svg>
  )
}
