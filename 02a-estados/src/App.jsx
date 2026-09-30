import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [saida, setSaida] = useState(0)

  function calcularMedia(){
    let nota1 = parseFloat(prompt("digite a primeira nota: "))
    let nota2 = parseFloat(prompt("digite a segunda nota: "))
    let nota3 = parseFloat(prompt("digite a terceira nota: "))
    let media = (nota1 + nota2 + nota3) / 3;
    setSaida(media)
  }
   function rolarD6(){
    let n = Math.ceil( Math.random() * 6)
    setSaida(n)
   }
   function rolarD8(){
    let n = Math.ceil( Math.random() * 8)
    setSaida(n)
   }
   function rolarD12(){
    let n = Math.ceil( Math.random() * 12)
    setSaida(n)
   }
   function rolarD20(){
    let n = Math.ceil( Math.random() * 20)
    setSaida(n)
   }
   function rolarD100(){
    let n = Math.ceil( Math.random() * 100)
    setSaida(n)
   }

   function senhaValida(){
    let senha = parseFloat(prompt("digite a senha: "));
   
    if (numerodeuso == 1234) {
      alert("pode entra")
      } else if (numerodeuso == 1) {
       alert("senha errada")
    }
    setSaida(senha)
   }

   function numeroGrande(){
    
   }
   


  return (
   <div className='app'>
    <h1>Estados!!!!!!</h1>
    <button onClick={calcularMedia}>media</button>
     <button onClick={rolarD6}>d6</button>
     <button onClick={rolarD8}>D8</button>
     <button onClick={rolarD12}>D12</button>
     <button onClick={rolarD20}>D20</button>
     <button onClick={rolarD100}>D100</button>
     <button onClick={senhaValida}>validacao de senha</button>
     <button onClick={numeroGrande}>numero maior</button>
      

    <p>
      resultado: {saida}
    </p>

   </div>
  )
}

export default App
