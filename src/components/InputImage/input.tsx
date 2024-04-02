'use client'
import React from 'react'

import { cn } from '@/lib/utils'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
  width?: number
  height?: number
}

const PlusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="#FFF"
    viewBox="0 0 24 24"
  >
    <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
  </svg>
)

const InputImage = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, width = 197, height = 178, ...props }, ref) => {
    const [image, setImage] = React.useState('')
    return (
      <div
        className={`flex flex-col items-center justify-center relative ${className}`}
      >
        <p className="tracking-widest text-sm font-thin">
          adicione uma foto sua*
        </p>
        <label
          htmlFor="picture"
          className="cursor-pointer pointer-events-auto"
          style={
            image
              ? {
                  width: `${width}px`,
                  height: `${height}px`,
                }
              : {}
          }
        >
          <div
            className={`box-border rounded-lg ring-1 ring-handle-gray-700 border-1 border-handle-gray-700`}
            style={
              image
                ? {
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    marginLeft: '0.25rem',
                    overflow: 'hidden',
                    width: `${width}px`,
                    height: `${height}px`,
                  }
                : {}
            }
          >
            {!image && (
              <svg
                className=""
                width={width}
                height={height}
                viewBox={`${width - width * (width / 180)} ${-height + 130} ${width} ${height}`}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M177 118.283C162.157 98.7554 142.012 72.5322 94.3012 72.5322C45 72.5323 20.0843 100.987 1 130"
                  stroke="#323238"
                  strokeWidth="1.5"
                />
                <path
                  d="M124.298 33.4764C124.298 51.5873 110.358 66.2028 93.2411 66.2028C76.1243 66.2028 62.1838 51.5873 62.1838 33.4764C62.1838 15.3655 76.1243 0.75 93.2411 0.75C110.358 0.75 124.298 15.3655 124.298 33.4764Z"
                  stroke="#323238"
                  strokeWidth="1.5"
                />
              </svg>
            )}
            <input
              type="file"
              onInput={(e) => {
                const inputElement = e.target as HTMLInputElement
                if (inputElement.files && inputElement.files[0]) {
                  setImage(URL.createObjectURL(inputElement.files[0]))
                }
              }}
              id={'picture'}
              accept="image/*"
              className={cn(`hidden h-[${height}px] w-[${width}px]`, className)}
              ref={ref}
              {...props}
            />
          </div>
        </label>
        <div
          className={`h-[58px] w-[58px] p-0 m-0 text-white text-[58px] font-sans font-thin pointer-events-none bg-handle-blue shadow-2xl rounded-full absolute bottom-1/2 right-1/2 flex items-center justify-center`}
          style={{
            transform: `translate(${width - width * 0.5 + 20}px, ${height - height * 0.5 + 20}px)`,
          }}
        >
          <PlusIcon />
        </div>
      </div>
    )
  },
)
InputImage.displayName = 'InputImage'

export { InputImage }
