import './App.css'
import  Jogo from './components/jogo'
import  Pousada from './components/pousada'
import IdadesParaEleição from './components/IdadesParaEleição'
import Altura from './components/altura'
import Feira from './components/feira'
import Ganso from './components/Ganso'
import RecrutamentoGanso from './components/recrutamentoGanso'
import Fumaça from './components/Fumaça Mística'
import Deslocamento from './components/deslocamento'
import TransporteInterno from './components/TransporteInterno'
import CentroDeComando from './components/centroDeComando'



function App() {
  

  return (
    <div className="App">
      <h1>03 estados e componentes</h1>
      
<h2>#0030</h2>
   <CentroDeComando />
   <TransporteInterno />
   <Deslocamento />
   <Fumaça />
   <RecrutamentoGanso />
   <Ganso />
<hr />


         <h2>#0027 .sq05</h2>
      <Jogo />
      <Pousada />
      <IdadesParaEleição />
      <Altura />
      <Feira />
    </div>
  )
}

export default App
