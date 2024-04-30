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
    width={40}
    height={40}
    fill="none"
    stroke="#FFF"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
  >
    <path d="M12 5v14m-7-7h14" />
  </svg>
)

const InputImage = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, width = 180, height = 180, ...props }, ref) => {
    const [image, setImage] = React.useState('')
    const smaller = height >= width ? width : height
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
            className={`box-border rounded-lg border-default-width border-handle-gray-700`}
            style={
              image
                ? {
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    overflow: 'hidden',
                    width: `${width}px`,
                    height: `${height}px`,
                  }
                : {}
            }
          >
            {!image && (
              <svg
                width={width}
                height={height}
                viewBox={`0 -60 180 180`}
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
          className={`p-0 m-0 text-white text-[58px] font-sans font-thin pointer-events-none bg-handle-blue shadow-lg drop-shadow-lg rounded-full absolute bottom-1/2 right-1/2 flex items-center justify-center`}
          style={{
            width: `${smaller * 0.32}px`,
            height: `${smaller * 0.32}px`,
            transform: `translate(${width * 0.6}px, ${height * 0.6}px)`,
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
