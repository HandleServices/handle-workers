import { ComponentProps } from 'react'

export function ArrowIcon(props: ComponentProps<'svg'>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="white"
      width={32}
      height={32}
      {...props}
    >
      <path d="M15.75 9.525l-4.586-4.586a1.5 1.5 0 00-2.121 2.122l4.586 4.585a.5.5 0 010 .708l-4.586 4.585a1.5 1.5 0 002.121 2.122l4.586-4.586a3.505 3.505 0 000-4.95z" />
    </svg>
  )
}
