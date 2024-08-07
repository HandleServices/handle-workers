import * as React from 'react'

const SearchIcon: React.ElementType = ({
  fill,
  className,
  height,
  width,
  onClick,
  ...props
}: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill={fill}
    className={className}
    onClick={onClick}
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#7887A4"
        d="m15.812 15.476-3.98-3.98a6.677 6.677 0 1 0-.942.943l3.98 3.98a.667.667 0 0 0 .942-.943Zm-9.138-2.862a5.334 5.334 0 1 1 5.333-5.333 5.34 5.34 0 0 1-5.333 5.333Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.007.614h16v16h-16z" />
      </clipPath>
    </defs>
  </svg>
)
export default SearchIcon
