import React from 'react'

import TimePicker from '../components/TimePicker'

export default function Home() {
  return (
    <div>
      <TimePicker />
      <TimePicker width={200} height={100} />
      <TimePicker width={250} height={150} />
    </div>
  )
}
