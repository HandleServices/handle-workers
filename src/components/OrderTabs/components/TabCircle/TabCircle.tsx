import React from 'react'

type TabCircleProps = { color: string; className?: string }

const TabCircle = ({ color, className }: TabCircleProps) => {
  return <div className={`h-4 w-4 rounded-full ${color} ${className}`} />
}

export { TabCircle }
