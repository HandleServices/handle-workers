import React from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import GoogleSVG from './assets/google-color-svgrepo-com.svg'

const colors = {
  primary: '#1A74EA',
  secondary: '#F7F8F4',
  neutral: '#7c828d',
  icon: '#F7F8F4',
}

const sizes = {
  small: 'px-[10px]',
  medium: 'px-[15px]',
  large: 'px-[20px]',
}

interface ButtonProps {
  title: string
  type: string
  size?: string
  height?: string | number
  icon?: string
}

export default function CustomButton({
  title,
  type,
  size = 'large',
  height = 2,
}: ButtonProps) {
  size = sizes[size as keyof typeof sizes]
  const hasIcon = type === 'icon'

  return (
    <button
      style={{
        backgroundColor: `${colors[type as keyof typeof colors]}`,
        color: `${type === 'secondary' || type === 'icon' ? colors.primary : 'white'}`,
        height: `${height}rem`,
      }}
      className={clsx(
        'rounded-md',
        'shadow-md',
        'hover:shadow-lg',
        'transition-shadow',
        'duration-200',
        'tracking-widest',
        'font-bold',
        'grid',
        'grid-cols-5',
        'items-center',
        'justify-around',
        'text-center',
        `${size}`,
      )}
    >
      {hasIcon && (
        <Image
          src={GoogleSVG}
          height={15}
          width={15}
          style={{ marginRight: `${5}px` }}
          className={`col-span-1`}
          alt=""
        />
      )}
      <p className={`col-span-${hasIcon ? 4 : 5}`}>{title}</p>
    </button>
  )
}
