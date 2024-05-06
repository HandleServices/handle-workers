'use client'
import React from 'react'

import { Button } from '@/components/Button'
import { DayOfWeekPicker } from '@/components/DaysOfWeekPicker'
import Input from '@/components/Input'
import { InputImage } from '@/components/InputImage'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/Select/Select'
import TimePicker from '@/components/TimePicker'

export default function CompleteRegister() {
  const [selectedDay, setSelectedDay] = React.useState<string>('')
  return (
    <form className="grid grid-rows-[20px_1fr_1fr_50px] w-full h-full gap-12">
      <h1 className="text-2xl font-semibold tracking-wider text-handle-blue text-center">
        Nos conte sobre sua vida profissional :)
      </h1>
      <div className="md:grid md:grid-cols-[1fr_2fr] sm:flex sm:flex-col sm:items-center gap-6">
        <div className="flex flex-col items-center">
          <InputImage />
        </div>
        <div className="flex flex-col justify-evenly gap-[38px] w-full min-[200px]:mt-6 min-[200px]:max-[374px]:w-full items-center">
          <Input
            placeholder="Nome"
            customBgColor="bg-handle-background"
            sz="large"
            className="w-full"
          />
          <Select>
            <SelectTrigger className="bg-transparent h-16">
              <SelectValue placeholder={'Selecione sua profissão'} />
            </SelectTrigger>
            <SelectContent>
              {[
                'Desenvolvedor',
                'Designer',
                'Engenheiro',
                'Estudante',
                'Outro',
              ].map((item) => {
                return (
                  <SelectItem
                    className="bg-transparent"
                    key={item}
                    value={item}
                  >
                    {item}
                  </SelectItem>
                )
              })}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="border-[0.098rem] border-handle-gray-700 w-full h-full rounded-sm">
        <label className="absolute text-sm tracking-widest -mt-[15px] bg-handle-background ml-2 p-1">
          Meu expediente
        </label>
        <div className="flex flex-col items-center  w-full h-full justify-center min-[200px]:py-4 min-[200px]:px-1">
          <div>
            <label htmlFor="" className="self-start mb-[7px] mt-[7px]">
              Selecione os dias que você trabalha :)
            </label>
            <DayOfWeekPicker
              value={selectedDay}
              onValueChange={(selectedDay: string) => {
                if (selectedDay) setSelectedDay(selectedDay)
              }}
              className="h-full gap-[21.59px] min-[200px]:max-[500px]:gap-1 mb-[25px] w-full"
            />
          </div>
          <TimePicker className="gap[95px] w-full" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Button size="large" variant={'primary'} className="text-lg">
          Continuar
        </Button>
      </div>
    </form>
  )
}
