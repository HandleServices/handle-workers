import React, { forwardRef } from 'react'
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
  small: '100px',
  medium: '150px',
  large: '200px',
}

const Loading = () => (
  <div className={` flex flex-row align-center justify-center content-center `}>
    <div className="w-4 h-4 rounded-full border-2 border-b-transparent animate-spin border-[inherit]"></div>
  </div>
)

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean
  size?: keyof typeof sizes | number | string
  height?: string | number
  buttonType?: keyof typeof colors
}

// eslint-disable-next-line react/display-name, no-empty-pattern
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (
    { className, children, loading, size = 'large', buttonType, ...rest },
    ref,
  ) => {
    rest.height = rest.height || '1.75rem'
    const sizeValue = sizes[size as keyof typeof sizes]
    const heightValue =
      typeof rest.height === 'number' ? `${rest.height}rem` : rest.height
    const color = colors[buttonType as keyof typeof colors]

    return (
      <button
        ref={ref}
        className={clsx(
          'rounded-md',
          'shadow-md',
          'hover:shadow-lg',
          'transition-shadow',
          'duration-200',
          'tracking-widest',
          'font-bold',
          'items-center',
          'justify-center',
          'text-center',
          'relative',
          className,
        )}
        style={{
          backgroundColor: `${color}`,
          height: `${heightValue}`,
          width: `${sizeValue}`,
        }}
        {...rest}
      >
        {loading && <Loading />}
      </button>
    )
  },
)

Button.displayName = 'Button'

export { Button }

// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   title: string
//   buttonType: 'primary' | 'secondary' | 'neutral' | 'icon'
//   buttonSize?: string
//   height?: string | number
//   icon?: string
//   children?: React.ReactNode
// }

// export default function CustomButton({
//   title,
//   buttonType,
//   buttonSize = 'large',
//   height = 2,
//   type = 'submit',
//   ...rest
// }: ButtonProps) {
//   buttonSize = sizes[buttonSize as keyof typeof sizes]
//   const hasIcon = buttonType === 'icon'

//   return (
//     <button
//       type={type}
//       {...rest}
//       style={{
//         backgroundColor: `${colors[buttonType as keyof typeof colors]}`,
//         color: `${buttonType === 'secondary' || buttonType === 'icon' ? colors.primary : 'white'}`,
//         height: `${height}rem`,
//       }}
//       className={clsx(
//         'rounded-md',
//         'shadow-md',
//         'hover:shadow-lg',
//         'transition-shadow',
//         'duration-200',
//         'tracking-widest',
//         'font-bold',
//         'grid',
//         'grid-cols-5',
//         'items-center',
//         'justify-around',
//         'text-center',
//         `${buttonSize}`,
//         'relative',
//       )}
//     >
//       {hasIcon && (
//         <div className={`flex flex-row align-center items-center `}>
//           <Image
//             src={GoogleSVG}
//             height={15}
//             width={15}
//             style={{ marginRight: `${5}px` }}
//             className={`col-span-1 absolute left-4`}
//             alt=""
//           />
//         </div>
//       )}
//       <p className={`col-span-${hasIcon ? 4 : 5} relative`}>{title}</p>
//     </button>
//   )
// }
