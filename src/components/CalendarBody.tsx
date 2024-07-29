import styled from 'styled-components'
import React from 'react'
import { useContext } from 'react'
import { MyContext } from '../App'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  background-color: white;
  padding: 25px 0;
  border-radius: 20px;
`
const DaysWarpper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, minmax(50px, 1fr));
`
const Day = styled.div<{
  $isCurrentMonth: boolean
  $isSelectedDay: boolean
  $isSunday: boolean
}>`
  background-color: ${(props) =>
    props.$isSelectedDay ? '#dee2e6' : props.$isSunday ? '#f5f7fa' : '#ffffff'};
  color: ${(props) => (!props.$isCurrentMonth ? '#d5dee8' : '#000000')};
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid #dee2e6;
`
const CalendarItem = styled.div<{ $isSunday: boolean }>`
  display: flex;
  justify-content: center;
  color: ${(props) => (props.$isSunday ? '#d5dee8' : '#000000')};
`
const CalendarBody = ({ pivotDate, daysInMonth, selectedDate }) => {
  console.log('Calendar Body 컴포넌트 렌더링')
  const weeks = ['일', '월', '화', '수', '목', '금', '토']

  return (
    <Container>
      <DaysWarpper>
        {weeks.map((week, index) => (
          <CalendarItem key={week} $isSunday={index === 0}>
            {week}
          </CalendarItem>
        ))}
      </DaysWarpper>

      <DaysWarpper>
        {daysInMonth.map((day) => (
          <Day
            key={day.date}
            onClick={() => selectedDate.selectDate(day.date)}
            $isCurrentMonth={pivotDate.month === day.month}
            $isSelectedDay={selectedDate.selectedDate === day.date}
            $isSunday={day.dayIndexOrWeek === 0}
          >
            {day.day}일
          </Day>
        ))}
      </DaysWarpper>
    </Container>
  )
}

export default CalendarBody
