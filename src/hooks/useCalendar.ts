import { useEffect, useState } from 'react'
import {
  format,
  eachDayOfInterval,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  getDay,
} from 'date-fns'

const useCalendar = () => {
  const [pivotDate, setPivotDate] = useState(new Date())

  const [pivotYear, setPivotYear] = useState(
    format(pivotDate, 'yyyy')
  )
  const [pivotMonth, setPivotMonth] = useState(
    format(pivotDate, 'MM')
  )
  const [pivotDay, setPivotDay] = useState(
    format(pivotDate, 'dd')
  )
  const [selectedDate, setSelectedDate] = useState<String>(
    format(pivotDate, 'yyyy-MM-dd')
  )
  const [startMonth, setStartMonth] = useState(
    startOfMonth(pivotDate)
  )
  const [endMonth, setEndMonth] = useState(
    endOfMonth(pivotDate)
  )
  const [startFirstWeek, setStartFirstWeek] = useState(
    startOfWeek(startMonth, { weekStartsOn: 0 })
  )
  const [endLastWeek, setEndLastWeek] = useState(
    endOfWeek(endMonth, { weekStartsOn: 0 })
  )

  const [days, setDays] = useState(
    eachDayOfInterval({
      start: startFirstWeek,
      end: endLastWeek,
    })
  )
  const [daysInMonth, setDaysInMonth] = useState(
    days.map((day) => ({
      date: format(day, 'yyy-MM-dd'),
      year: format(day, 'yyyy'),
      month: format(day, 'MM'),
      day: format(day, 'dd'),
      dayIndexOrWeek: getDay(day),
    }))
  )
  const handlePrevYear = () => {
    setPivotDate(
      new Date(
        pivotDate.getFullYear() - 1,
        pivotDate.getMonth(),
        1,
        0,
        0,
        0
      )
    )
  }
  const handleNextYear = () => {
    setPivotDate(
      new Date(
        pivotDate.getFullYear() + 1,
        pivotDate.getMonth(),
        1,
        0,
        0,
        0
      )
    )
  }
  const handlePrevMonth = () => {
    setPivotDate(
      new Date(
        pivotDate.getFullYear(),
        pivotDate.getMonth() - 1,
        1,
        0,
        0,
        0
      )
    )
  }
  const handleNextMonth = () => {
    setPivotDate(
      new Date(
        pivotDate.getFullYear(),
        pivotDate.getMonth() + 1,
        1,
        0,
        0,
        0
      )
    )
  }
  const handleSelectDate = (selectDate) => {
    setSelectedDate(selectDate)
  }
  useEffect(() => {
    const [year, month, day] = format(
      pivotDate,
      'yyyy-MM-dd'
    ).split('-')
    setPivotYear(year)
    setPivotMonth(month)
    setPivotDay(day)

    const s_month = startOfMonth(pivotDate)
    const e_month = endOfMonth(pivotDate)
    const s_week = startOfWeek(s_month, { weekStartsOn: 0 })
    const e_week = endOfWeek(e_month, { weekStartsOn: 0 })
    setStartMonth(s_month)
    setEndMonth(e_month)
    setStartFirstWeek(s_week)
    setEndLastWeek(e_week)

    const dates = eachDayOfInterval({
      start: s_week,
      end: e_week,
    })
    setDays(dates)

    const datesInMonth = dates.map((day) => {
      return {
        date: format(day, 'yyyy-MM-dd'),
        year: format(day, 'yyyy'),
        month: format(day, 'MM'),
        day: format(day, 'dd'),
        dayIndexOrWeek: getDay(day),
      }
    })
    setDaysInMonth(datesInMonth)
  }, [pivotDate])

  return {
    pivotDate: {
      year: pivotYear,
      month: pivotMonth,
      day: pivotDay,
    },
    daysInMonth,
    dispatch: {
      handlePrevYear,
      handleNextYear,
      handlePrevMonth,
      handleNextMonth,
    },
    selectedDate: {
      selectedDate: selectedDate,
      selectDate: handleSelectDate,
    },
  }
}
export default useCalendar
