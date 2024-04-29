import React from 'react'

import { Button } from '@/components/Button'
import Input from '@/components/Input'
import { InputImage } from '@/components/InputImage'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/Select/Select'

export default function CompleteRegister() {
  return (
    <form className="grid grid-rows-[80px_1fr_1fr_50px] w-full h-full items-center gap-12">
      <h1 className="text-2xl font-semibold tracking-wider text-handle-blue text-center">
        Nos conte sobre sua vida profissional :)
      </h1>
      <div className="md:grid md:grid-cols-[1fr_2fr] sm:flex sm:flex-col sm:items-center gap-6">
        <div className="flex flex-col items-center">
          <InputImage />
        </div>
        <div className="flex flex-col justify-evenly gap-[38px] w-full min-[200px]:mt-6 ">
          <Input
            placeholder="Nome"
            customBgColor="bg-handle-background"
            sz="large"
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
        <div className=""></div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Button size="large" variant={'primary'} className="text-lg" >
          Continuar
        </Button>
      </div>
    </form>
  )
}
