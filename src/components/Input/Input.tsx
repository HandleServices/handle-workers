'use client'

import { InputHTMLAttributes } from 'react'
import './input.styles.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string
  inheritColor?: string
}

export default function Input({
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

// text-xl text-primaryGray absolute left-4 top-1/2 transform -translate-y-1/2 px-1 duration-200 tracking-wider

// text-primaryGray absolute top-0 scale-75 left-4 peer-placeholder-shown:text-xl peer-placeholder-shown:transform peer-placeholder-shown:-translate-y-1/2 px-1 duration-200 tracking-wider transition-all peer-focus:text-handle-blue peer-focus:scale-75 peer-focus:top-0

// text-xl text-primaryGray text-opacity-80 absolute left-4 top-1/2 transform -translate-y-1/2 px-1 duration-200 tracking-wider peer-focus:text-handle-blue pointer-events-none peer-focus:scale-75 peer-focus:top-0 transition-al

// peer-placeholder-shown:scale-125 peer-placeholder-shown:transform peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:scale-90 peer-focus:top-0 peer-focus:px-1 pointer-events-none peer-first:top-3

// ${'bg-'.concat(inheritColor ?? 'background')}
