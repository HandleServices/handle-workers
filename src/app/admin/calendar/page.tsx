'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { DialogTitle } from '@radix-ui/react-dialog'
import { addDays, differenceInDays } from 'date-fns'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'

import SvgComponent from '@/app/auth/(initial)/assets/google'
import { Calendar } from '@/components/Calendar/Calendar'
import DialogButton from '@/components/Dialog/components/DialogButton'
import { DialogFooter } from '@/components/Dialog/Dialog'
import Input from '@/components/Input'
import { LabelError } from '@/components/LabelError'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/Select/Select'
import TimePicker from '@/components/TimePicker'
import TodoList from '@/components/TodoList'
import { Todo } from '@/components/TodoList/TodoList'

import CalendarTrigger from './components/CalendarTrigger'
import { Input as CalendarInput } from './components/Input'

const CalendarPage = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [todos, setTodos] = React.useState<Todo[]>([])
  const [dialogCalendarIsOpen, setDialogCalendarIsOpen] =
    React.useState<boolean>(false)
  const [dialogIsOpen, setDialogIsOpen] = React.useState(false)
  const [selectedDate, setSelectedDate] = React.useState<Date>(new Date())
  const [isSendingData, setIsSendingData] = useState(false)
  const [services, setServices] = useState<string[]>([
    'Service 1',
    'Service 2',
    'Service 3',
  ])

  const [hour] = useState('00:00')
  const [loading, setLoading] = useState(false)

  const TodoSchema = z.object({
    client: z.string().min(1, 'Precisa identificar a tarefa!'),
    service: z.string().min(1, 'Necessário selecionar um tipo de serviço!'),
    hour: z.string(),
    date: z.string(),
  })

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(TodoSchema),
    defaultValues: {
      client: '',
      service: '',
      hour: '00:00',
      date: new Date().toISOString().substring(0, 10),
    },
  })

  // TODO: Make a request to get services from the server
  // TODO: Manipulate data and make logic here.
  const onSubmit = async (data: Todo): Promise<void> => {
    setIsSendingData(true)
    setLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 3000)).then(() => {
      setTodos([...todos, data])
      console.log(data)
    })
    setLoading(false)
    reset()
    setIsSendingData(false)
    setDialogIsOpen(false)
    setDialogCalendarIsOpen(false)
  }

  return (
    <div className="grid grid-cols-2 gap-16 w-[85%] h-[95%] self-center overflow-none">
      <div>
        <CalendarTrigger
          type="text"
          selectedDate={selectedDate}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        />
        <Calendar
          selectedDate={selectedDate}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          setSelectedDate={setSelectedDate}
          className={`bg-white ${isOpen ? '' : 'h-0 p-0 overflow-hidden'}`}
        />

        <div>
          <h1 className={`text-xl font-bold mb-4 ${isOpen ? 'mt-10' : ''}`}>
            Tarefas diárias
          </h1>
        </div>
        <div
          className={`bg-white w-full rounded-lg ${isOpen ? 'h-[55%]' : 'h-5/6'}`}
        >
          <DialogButton
            className="p-4 text-end select-none rounded-md"
            isSendingData={isSendingData}
            buttonTitle="+ Adicionar Tarefa"
            buttonClassName="w-48 p-1"
            isOpen={dialogIsOpen}
            setIsOpen={setDialogIsOpen}
          >
            <DialogTitle>
              <p className="text-handle-blue text-2xl font-medium select-none mb-0">
                Cadastrando uma nova tarefa...
              </p>
              <p className="text-handle-blue text-base font-light select-none mt-0">
                por favor preencha os campos necessários
              </p>
            </DialogTitle>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              <div className="sm:w-full flex flex-col gap-1 select-none">
                <Input
                  customBgColor="bg-white"
                  type="text"
                  id="client"
                  height={32}
                  placeholder="Nome do cliente"
                  labelClassName="text-base tracking-widest text-handle-gray select-none"
                  inputClassName="border-handle-gray h-8 select-none"
                  className="text-handle-gray select-none"
                  {...register('client')}
                  error={!!errors.client}
                />
                <LabelError errors={errors} name="client" />
              </div>
              <div className="flex flex-col gap-1 select-none">
                {/*  TODO: This select are not getting blue when tab selected */}
                <Controller
                  name="service"
                  control={control}
                  render={({ field }) => (
                    <Select
                      value={field.value}
                      onValueChange={(value) => field.onChange(value)}
                    >
                      <SelectTrigger
                        className="h-8 select-none border-handle-gray text-handle-gray"
                        error={!!errors.service}
                      >
                        <SelectValue
                          defaultValue={services}
                          placeholder="Serviço prestado"
                        />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem
                            className="bg-white h-8 select-none"
                            key={service}
                            value={service}
                          >
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
                <LabelError errors={errors} name="service" />
              </div>
              <div>
                <div className="flex flex-row justify-evenly mt-4">
                  <div className="flex flex-row ">
                    <Controller
                      name="hour"
                      control={control}
                      defaultValue={hour}
                      render={({ field }) => (
                        <CalendarInput
                          placeholder="Horário"
                          customBgColor="bg-white"
                          textSize={12}
                          width={150}
                          height={30}
                          className="border-none group p-0"
                          labelClassName="left-[20%] -top-1 px-1 h-5 text-handle-gray text-lg font-semibold group-active:text-blue"
                        >
                          <TimePicker
                            {...register('hour')}
                            hour={field.value}
                            setHour={field.onChange}
                            width={100}
                            height={30}
                            className="border-handle-gray select-none bg-white w-30 h-full text-handle-gray"
                            style={{
                              fontSize: '1.5rem',
                              padding: 0,
                              height: 'auto',
                              fontWeight: '300',
                            }}
                          />
                        </CalendarInput>
                      )}
                    />
                    <span className="self-end ml-1 text-handle-gray text-[8px] font-semibold select-none">
                      horas/min
                    </span>
                  </div>
                  <div className="group">
                    <Controller
                      name="date"
                      control={control}
                      defaultValue={new Date().toISOString().substring(0, 10)}
                      render={({ field }) => (
                        <CalendarInput
                          placeholder="Data"
                          customBgColor="bg-white"
                          width={150}
                          height={30}
                          textSize={12}
                          className="border-none w-30 h-9 group"
                          labelClassName="left-[20%] top-1 px-2 h-4 flex flex-col justify-center text-handle-gray text-lg font-semibold group-active:text-blue"
                        >
                          <CalendarTrigger
                            type="inputText"
                            isOpen={dialogCalendarIsOpen}
                            setIsOpen={setDialogCalendarIsOpen}
                          />
                          <input
                            key={'dialogDate'}
                            {...register('date')}
                            value={field.value}
                            onClick={() => setDialogCalendarIsOpen(true)}
                            type="date"
                            className="text-handle-gray outline-none text-center w-full h-full border-1.5 border-handle-gray group-focus:border-handle-blue rounded-md"
                          />
                          <Calendar
                            selectedDate={addDays(new Date(field.value), 1)}
                            setIsOpen={setDialogCalendarIsOpen}
                            isOpen={dialogCalendarIsOpen}
                            closeOnSelectDay={true}
                            setSelectedDate={(e) => {
                              const date = e
                                .toLocaleString('en-CA')
                                .split(',')[0]
                                .split('/')
                              field.onChange(date[0])
                            }}
                            className={`bg-white ${dialogCalendarIsOpen ? 'absolute shadow-black shadow-md top-8' : 'absolute h-0 w-0 p-0 overflow-hidden'}`}
                          />
                        </CalendarInput>
                      )}
                    />
                  </div>
                </div>
              </div>
              <DialogFooter className="sm:justify-center sm:items-center mt-4">
                <button
                  type="submit"
                  aria-label="close"
                  className={`bg-handle-blue text-white w-28 self-center tracking-widest rounded-md p-2 select-none ${loading ? 'bg-handle-gray text-white' : ''}`}
                  disabled={loading}
                >
                  Salvar
                </button>
              </DialogFooter>
            </form>
          </DialogButton>
          <TodoList
            todos={todos.filter((todo) => {
              return (
                differenceInDays(
                  addDays(new Date(todo.date), 1),
                  selectedDate,
                ) === 0 &&
                addDays(new Date(todo.date), 1).getDay() ===
                  selectedDate.getDay()
              )
            })}
            minHeight={360}
            className={`transition-all duration-1000`}
          />
        </div>
      </div>
      <div className="transition-all duration-1000 h-[90%]">
        <h1 className={`text-xl font-bold mb-4 ${isOpen ? 'mt-10' : ''}`}>
          Calendário
        </h1>
        <div className="h-5/6 w-full bg-white flex flex-row items-center justify-center rounded-lg gap-4">
          <SvgComponent />
          <a href="#" className="text-2xl text-handle-blue">
            Sincronizar conta Google
          </a>
        </div>
      </div>
    </div>
  )
}

export default CalendarPage
