'use client'

import { addMonths, addYears, format, subMonths, subYears } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { ChevronLeft, ChevronRight, PencilIcon, X } from 'lucide-react'
import * as React from 'react'
import { DateFormatter, DayPicker } from 'react-day-picker'

import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  mode?: 'single' | 'multiple' | 'range'
}

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  mode = 'single',
  ...props
}: CalendarProps) {
  const [selectedDate, setSelectedDate] = React.useState<
    Date | Date[] | undefined
  >(mode === 'multiple' ? [] : new Date())
  const [isOpen, setIsOpen] = React.useState(false)

  function weekCount(year: number, monthNumber: number) {
    // month_number is in the range 1..12
    const firstOfMonth = new Date(year, monthNumber - 1, 1)
    const lastOfMonth = new Date(year, monthNumber, 0)
    const used = firstOfMonth.getDay() + lastOfMonth.getDate()
    return Math.ceil(used / 7)
  }

  /**
   * @param date - Entry date to be converted.
   * @returns string - A month with first char as upper case.
   */
  function upperCaseMonth(date: Date): string {
    return (
      format(date, 'MMMM', { locale: ptBR }).charAt(0).toUpperCase() +
      format(date, 'MMMM', { locale: ptBR }).slice(1)
    )
  }

  const handlePrevMonth = () => {
    setSelectedDate(subMonths(selectedDate as Date, 1))
  }

  const handleNextMonth = () => {
    setSelectedDate(addMonths(selectedDate as Date, 1))
  }

  const handlePrevYear = () => {
    setSelectedDate(subYears(selectedDate as Date, 1))
  }

  const handleNextYear = () => {
    setSelectedDate(addYears(selectedDate as Date, 1))
  }

  const numberOfWeeks = weekCount(
    (selectedDate instanceof Date ? selectedDate : new Date()).getFullYear(),
    (selectedDate instanceof Date ? selectedDate : new Date()).getMonth() + 1,
  )

  const formatWeekdayName: DateFormatter = (day) => {
    return format(day, 'ccccc', { locale: ptBR })
  }

  const handleDayClick = (day: Date) => {
    if (mode === 'multiple') {
      const newSelection = Array.isArray(selectedDate)
        ? selectedDate.includes(day)
          ? selectedDate.filter((date) => date.getTime() === day.getTime())
          : [...selectedDate, day]
        : [day]
      setSelectedDate(newSelection)
    } else {
      setIsOpen(false)
      setSelectedDate(day)
    }
  }

  return (
    <>
      {!isOpen && (
        <div
          className="relative group hover:underline underline-offset-auto text-handle-blue cursor-pointer flex flex-row"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div>
            <span className="text-handle-blue tracking-widest select-none text-2xl font-medium">
              {format(
                selectedDate instanceof Date ? selectedDate : new Date(),
                'dd',
                { locale: ptBR },
              ) +
                ' de ' +
                upperCaseMonth(
                  selectedDate instanceof Date ? selectedDate : new Date(),
                )}
            </span>
            <span className="text-handle-blue tracking-widest select-none ">
              {', ' +
                format(
                  selectedDate instanceof Date ? selectedDate : new Date(),
                  'cccc',
                  { locale: ptBR },
                )}
            </span>
          </div>
          <PencilIcon className="text-handle-gray group-hover:text-handle-blue h-3 w-3" />
        </div>
      )}
      {isOpen && (
        <DayPicker
          selected={
            Array.isArray(selectedDate) ? selectedDate : [selectedDate as Date]
          }
          locale={ptBR}
          formatters={{
            formatWeekdayName,
          }}
          onDayClick={handleDayClick}
          month={selectedDate instanceof Date ? selectedDate : undefined}
          showOutsideDays={showOutsideDays}
          className={cn(
            'w-[377px] h-[217px] border-1.5 rounded-md shadow-sm shadow-black p-2',
            className,
          )}
          classNames={{
            months:
              'flex flex-col sm:flex-row space-y-4 w-full h-full sm:space-x-20 sm:space-y-0',
            month: 'w-full space-y-4',
            caption: 'flex justify-center relative items-center',
            caption_label: 'text-sm font-medium',
            nav: 'space-x-1 flex items-center',
            nav_button: cn(
              buttonVariants({ variant: 'outline' }),
              'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
            ),
            nav_button_previous: 'absolute left-1',
            nav_button_next: 'absolute right-1',
            table: 'w-full h-[60%] border-collapse space-y-1',
            head_row: 'flex justify-evenly gap-4 w-full mb-1',
            head_cell:
              'text-handle-blue font-medium text-[0.875] border-handle-blue border-1.5 p-0 h-5 w-5 rounded-full flex justify-center items-center',
            row: 'flex justify-evenly w-full',
            cell: `h-${numberOfWeeks === 6 ? 5 : 6} overflow-auto w-full text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20`,
            day: cn(
              buttonVariants({ variant: 'ghost' }),
              'h-full w-3/4 p-0 font-[0.875rem] aria-selected:opacity-100 hover:cursor-pointer',
            ),
            day_range_end: 'day-range-end',
            day_selected:
              'bg-handle-blue text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground',
            day_today: 'bg-accent text-accent-foreground',
            day_outside:
              'day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30',
            day_disabled: 'text-muted-foreground opacity-50',
            day_range_middle:
              'aria-selected:bg-accent aria-selected:text-accent-foreground',
            day_hidden: 'invisible',
            ...classNames,
          }}
          components={{
            Caption: ({ ...props }) => (
              <div className="relative" {...props}>
                <div className="w-full h-8 pl-1 pt-3 flex flex-row items-center">
                  <button onClick={handlePrevMonth} className={'p-0'}>
                    <ChevronLeft strokeWidth={1} className="h-4 font-thin" />
                  </button>
                  <span className="text-handle-blue text-2xl font-bold tracking-widest w-36 text-center">
                    {upperCaseMonth(
                      selectedDate instanceof Date ? selectedDate : new Date(),
                    )}
                  </span>
                  <button onClick={handleNextMonth} className={'p-0'}>
                    <ChevronRight strokeWidth={1} className="h-4" />
                  </button>
                  <button onClick={handlePrevYear} className={'p-0'}>
                    <ChevronLeft strokeWidth={1} className="h-4" />
                  </button>
                  <span className="text-md font-medium text-handle-blue tracking-widest">
                    {(selectedDate instanceof Date
                      ? selectedDate
                      : new Date()
                    ).getFullYear()}
                  </span>
                  <button onClick={handleNextYear} className={'p-0'}>
                    <ChevronRight strokeWidth={1} className="h-4" />
                  </button>
                </div>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="absolute right-0 top-0 text-handle-gray-300 p-1 py-2 "
                >
                  <X strokeWidth={1} />
                </button>
              </div>
            ),
          }}
          {...props}
        />
      )}
    </>
  )
}

Calendar.displayName = 'Calendar'

export { Calendar }
