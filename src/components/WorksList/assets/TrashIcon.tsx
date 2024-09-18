import * as React from 'react'

interface TrashIconProps {
  width?: number
  height?: number
  viewBox?: string
}

const TrashIcon = ({ width, height, viewBox, ...props }: TrashIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox={viewBox}
    {...props}
  >
    <path
      fill="#7887A4"
      d="M14.319 2.727h-2.796A3.415 3.415 0 0 0 8.183 0H6.817a3.416 3.416 0 0 0-3.34 2.727H.682a.682.682 0 1 0 0 1.364h.586l.884 9.19a3.396 3.396 0 0 0 3.393 3.083H9.45a3.396 3.396 0 0 0 3.395-3.087l.87-9.186h.603a.682.682 0 0 0 0-1.364Zm-7.5-1.363h1.363c.888 0 1.638.572 1.92 1.363H4.9a2.043 2.043 0 0 1 1.92-1.363Zm3.209 9.745a.681.681 0 1 1-.964.964L7.5 10.51l-1.563 1.563a.68.68 0 0 1-.964 0 .681.681 0 0 1 0-.964l1.563-1.563-1.563-1.564a.681.681 0 1 1 .964-.964L7.5 8.582l1.564-1.564a.681.681 0 1 1 .964.964L8.464 9.546l1.564 1.563Z"
    />
  </svg>
)
export default TrashIcon
