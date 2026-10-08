import './App.css'
import  Jogo from './components/jogo'
import  Pousada from './components/pousada'
import IdadesParaEleição from './components/IdadesParaEleição'
import Altura from './components/altura'
import Feira from './components/feira'
function App() {
  

  return (
    <div className="App">
      <h1>03 estados e componentes</h1>

         
      <Jogo />
      <Pousada />
      <IdadesParaEleição />
      <Altura />
      <Feira />
    </div>
  )
}

export default App
