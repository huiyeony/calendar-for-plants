import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import New from './pages/New'
import Unknown from './pages/Unkown'
import { createContext } from 'react'
import useCalendar from './hooks/useCalendar'
import useTodo from './hooks/useTodo'

export const CalendarContext = createContext()
export const TodosContext = createContext()

function App() {
  console.log('App 컴포넌트 렌더링 ')

  const props = useCalendar()
  const data = useTodo()

  return (
    <div>
      <CalendarContext.Provider value={props}>
        <TodosContext.Provider value={data}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/unknown" element={<Unknown />} />
          </Routes>
        </TodosContext.Provider>
      </CalendarContext.Provider>
    </div>
  )
}

export default App
