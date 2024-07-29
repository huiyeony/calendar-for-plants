import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import New from './pages/New'
import { useState, createContext, useContext } from 'react'
import useCalendar from './hooks/useCalendar'

export const MyContext = createContext()

function App() {
  console.log('App 컴포넌트 렌더링 ')
  const props = useCalendar()
  return (
    <div>
      <MyContext.Provider value={props}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
        </Routes>
      </MyContext.Provider>
    </div>
  )
}

export default App
