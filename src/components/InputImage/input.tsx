'use client'
import React from 'react'

import { cn } from '@/lib/utils'
import './style.css'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const [image, setImage] = React.useState('')
    return (
      <div>
        <p className="tracking-widest text-sm mb-[4px] ml-[13px] font-thin">
          adicione uma foto sua*
        </p>
        <label
          htmlFor="picture"
          className="flex flex-col items-center cursor-pointer max-h-[200px]"
        >
          <div
            className="box-border rounded-lg ring-1 ring-handle-gray-700 border-1 border-handle-gray-700 externBox h-[180px] w-[178px]"
            style={
              image
                ? {
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    marginLeft: '0.25rem',
                    overflow: 'hidden',
                  }
                : {
                    paddingTop: '3rem',
                  }
            }
          >
            {(!image && (
              <svg
                className=""
                width="178"
                height="130"
                viewBox="0 0 178 131"
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
            )) || <></>}
            <input
              type={type}
              onInput={(e) => {
                setImage(URL.createObjectURL(e.target.files[0]))
              }}
              id={'picture'}
              accept="image/*"
              className={cn('hidden h-[180px] w-[180px]', className)}
              ref={ref}
              {...props}
            />
          </div>
        </label>
        <div className="h-[58px] w-[58px] text-white text-[58px] font-sans font-thin  pointer-events-none bg-[#1A8FFFff] transform translate-x-[9.5rem] translate-y-[-45px] shadow-2xl rounded-full flex justify-center items-center">
          +
        </div>
      </div>
    )
  },
)
Input.displayName = 'Input'

export { Input }
