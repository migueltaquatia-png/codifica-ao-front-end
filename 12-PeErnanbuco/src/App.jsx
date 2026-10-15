import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Desenvolvedor from './components/desenvolvedor'
import OraçãoDeploy from './components/OraçãoDeploy'
import OraçãoEstudante from './components/OraçãoEstudante'
import OraçãoProgramador from './components/OraçãoProgramador'
import OraçãoAprendiz from './components/OraçãoAprendiz'

function App() {
  const [respostas, setRespostas] = useState(0)

  return (
    <div><h3>Painel de orações</h3>
    
    <nav>
    <button onClick={() => setRespostas(0)}>Oração do desenvolvedor Web</button>
    <button onClick={() => setRespostas(1)}>Oração do deploy</button>
    <button onClick={() => setRespostas(2)}>Oração do estudante</button>
    <button onClick={() => setRespostas(3)}>Oração do programador</button>
    <button onClick={() => setRespostas(4)}>Oração do aprendiz</button>
    </nav>

    {respostas==4 && <OraçãoAprendiz />}
     {respostas==3 && <OraçãoProgramador />}
    {respostas==0 && <Desenvolvedor />}
    {respostas==1 && <OraçãoDeploy  />}
    {respostas==2 && <OraçãoEstudante />}
    
    
    
    
    
    </div>
    
  )
}

export default App
