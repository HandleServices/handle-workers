'use client'

import { InputHTMLAttributes, memo } from 'react'
import './input.styles.css'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string
  inheritColor?: string
}

function Input({
  name,
  className,
  inheritColor,
  width,
  height,
  ...props
}: InputProps) {
  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      <input
        required
        id={name}
        style={{ width, height }}
        className={`text-xl text-primaryGray bg-transparent border-[0.094rem] rounded-lg border-primaryGray outline-none p-4 focus:border-handle-blue focus:caret-handle-blue transition duration-200 placeholder-transparent peer`}
        {...props}
      />
      <label
        htmlFor={props?.id}
        className={`absolute transition-all duration-200 text-sm left-4 px-1 tracking-wider -top-2.5 text-primaryGray ${'bg-'.concat(inheritColor ?? 'background')} peer-focus:text-handle-blue peer-focus:text-sm peer-focus:-top-2.5 peer-focus:translate-y-0 peer-placeholder-shown:text-xl peer-placeholder-shown:text-primaryGray peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2
        `}
      >
        {props?.placeholder}
      </label>
    </div>
  )
}

export default memo(Input) as unknown as typeof Input
