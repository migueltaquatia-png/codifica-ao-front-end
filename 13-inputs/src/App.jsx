import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='app'>
    <h1>Inputs controlados</h1>
     <label htmlFor="">Login</label>
    <input type="text" />
    <button>entrar</button>
   </div>
  )
}

export default App
