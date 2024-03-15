import React from 'react'
import { Input } from '@/components/InputImage/input'

export default function Home() {
  return (
    <div className="flex flex-row">
      {/* <div className="w-[200px] h-[200px] "></div> */}
      <div className="w-[200px] h-[200px] ">
        <Input id="picture" type="file" />
      </div>
    </div>
  )
}
