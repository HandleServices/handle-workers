import React from 'react'

import TimePicker from '../components/TimePicker'

export default function Home() {
  return (
    <div className="grid grid-cols-[200px_1fr] items-center">
      <span>base Time Picker</span> <TimePicker />
      <span>Styled red time picker and vertical</span>{' '}
      <TimePicker
        groupClassName="flex-col gap-[20px] ring-2 ring-red-500 w-[200px] justify-center items-center"
        style={{
          color: 'red',
          fontSize: '25px',
        }}
      />
      <span>Great time picker</span>{' '}
      <TimePicker
        groupClassName="gap-[200px] mt-10 p-10 bg-gray-200"
        height={200}
        width={200}
        style={{
          color: 'blue',
          padding: '0px',
          margin: '0px',
          fontSize: '50px', // o Ideal é 1/4 do width
          lineHeight: '200px', // Deve ficar com o mesmo tamanho do component
          backgroundColor: 'white',
        }}
      />
      <span>Great time picker</span>{' '}
      <TimePicker
        groupClassName="gap-[200px]"
        height={400}
        width={400}
        style={{
          color: 'blue',
          padding: '0px',
          margin: '0px',
          fontSize: '100px', // o Ideal é 1/4 do width
          lineHeight: '600px', // Deve ficar com o mesmo tamanho do component
        }}
      />
      <span>Great time picker</span>{' '}
      <TimePicker
        groupClassName="gap-[200px]"
        height={600}
        width={600}
        style={{
          color: 'blue',
          padding: '0px',
          margin: '0px',
          fontSize: '150px', // o Ideal é 1/4 do width
          lineHeight: '600px', // Deve ficar com o mesmo tamanho do component
        }}
      />
    </div>
  )
}
