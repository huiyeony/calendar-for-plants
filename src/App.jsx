import './App.css'
import { Routes ,Route } from 'react-router-dom'
import Home from './pages/Home'
import New from './pages/New'
function App() {
  return <div>
    <div>홈 페이지</div>
    <Routes>
      <Route path='/' element= {<Home/>} />
      <Route path='/new' element= {<New/>} />
    </Routes>
  </div>
}

export default App
