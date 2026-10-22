import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Home from './components/home'
import Ofertas from './components/Ofertas'
import sCompras from './components/sCompras'

function App() {
  const [pagina, setPagina] = useState(0)

  function mostrarhome (){
    setPagina(0)
  }

  return (
    <div className='app'>
      <nav>
        <button onClick={mostrarhome}>home</button>
        <button onClick={() => setPagina(1)}>ofertas</button>
        <button onClick={() => setPagina(2)}>minhas Compras</button>
      </nav>
      <h1>Navegaçao</h1>

       {pagina==0 && <Home />}
       {pagina==1 && <Ofertas />}
       {pagina==2 && <sCompras />}
        
      
    </div>
  )
}

export default App
