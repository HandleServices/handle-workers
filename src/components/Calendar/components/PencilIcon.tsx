import * as React from 'react'

interface PencilIconProps {
  width?: number
  height?: number
}

const PencilIcon = ({ width = 11, height = 11, ...props }: PencilIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    {...props}
  >
    <g fill="#7887A4" clipPath="url(#a)">
      <path d="M.988 8.466A1.667 1.667 0 0 0 .5 9.645v.855h.855c.442 0 .866-.176 1.179-.488l5.56-5.56-1.546-1.545-5.56 5.56ZM10.144.856a1.093 1.093 0 0 0-1.546 0l-1.46 1.462 1.545 1.545 1.46-1.46a1.094 1.094 0 0 0 0-1.547Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.5.5h10v10H.5z" />
      </clipPath>
    </defs>
  </svg>
)
export default PencilIcon
