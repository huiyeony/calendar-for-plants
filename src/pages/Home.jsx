import './Home.css'
import Header from '../components/Header'
import Button from '../components/Button'
import { useContext } from 'react'
import CalendarBody from '../components/CalendarBody'
import { MyContext } from '../App'
const Home = () => {
  console.log('Home 컴포넌트 렌더링')
  const { pivotDate, daysInMonth, dispatch, selectedDate } =
    useContext(MyContext)

  return (
    <>
      <Header
        leftChild={<Button text="<" onClick={dispatch.handlePrevMonth} />}
        center={`${pivotDate.year}년 ${pivotDate.month}월`}
        rightChild={<Button text=">" onClick={dispatch.handleNextMonth} />}
      />
      <CalendarBody
        pivotDate={pivotDate}
        daysInMonth={daysInMonth}
        selectedDate={selectedDate}
      />
    </>
  )
}
export default Home
