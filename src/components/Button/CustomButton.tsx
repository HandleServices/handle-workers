import React, { forwardRef } from 'react'
import { cva } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'
import Google from './assets/google'

const variants = cva(
  [
    'rounded-md',
    'shadow-md',
    'hover:shadow-lg',
    'transition-shadow',
    'duration-200',
    'tracking-[0.2em]',
    'font-bold',
    'items-center',
    'justify-center',
    'text-center',
    'relative',
    'h-10',
  ],
  {
    variants: {
      variant: {
        primary: ['bg-[#1A74EA]', 'text-white'],
        secondary: ['bg-[#F7F8F4]', 'text-[#1A74EA]'],
        neutral: ['bg-[#7c828d]', 'text-white'],
      },
      size: {
        small: ['w-40', 'text-xs'],
        medium: ['w-52', 'text-xs'],
        large: ['w-64', 'text-[0.9em]'],
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'large',
    },
  },
)

interface loadingProps {
  type: string
}

function Loading({ type }: loadingProps): JSX.Element {
  if (type === 'secondary') {
    return (
      <div
        className={` flex flex-row align-center justify-center content-center `}
      >
        <div className="w-4 h-4 rounded-full border-2 border-b-transparent animate-spin border-[#1A74EA]"></div>
      </div>
    )
  }
  return (
    <div
      className={` flex flex-row align-center justify-center content-center `}
    >
      <div className="w-4 h-4 rounded-full border-2 border-b-transparent animate-spin"></div>
    </div>
  )
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean
  size?: 'small' | 'medium' | 'large'
  variant?: 'primary' | 'secondary' | 'neutral'
  icon?: string
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ icon, className, children, loading, size, variant, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        className={twMerge(variants({ variant, size, className }))}
        {...rest}
      >
        {(loading && <Loading type={variant || ''} />) ||
          (icon && (
            <div
              className={`grid grid-cols-12 w-full h-full align-center items-center content-center`}
            >
              <Google
                className={'col-span-2'}
                style={{ alignSelf: 'center', justifySelf: 'center' }}
              />
              <p className={`col-span-10 text-center`}>{children}</p>
            </div>
          )) ||
          children}
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
