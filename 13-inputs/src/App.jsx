import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Demo from './pages/Demo'
import Ex0081 from './pages/ex0081'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='app'>
    <Demo />
    <Home />
    <Ex0081 />
    
   </div>
  )
}

export default App
