import './App.css'
import { Routes ,Route } from 'react-router-dom'
import Home from './pages/Home'
import New from './pages/New'
function App() {
  return (<div>
    
    <Routes>
      <Route path='/' element= {<Home/>} />
      <Route path='/new' element= {<New/>} />
    </Routes>
  </div>
  )
}

export default App
