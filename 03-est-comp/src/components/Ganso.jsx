import React, { useState } from 'react'

function Ganso() {

const[resultado, setResultado] = useState()

    function calcularFuturos(){
    let tripulantes = Number(prompt("quantos tripulantes tem ai sue merda? "))
    let comida = Number(prompt("quantos quilo de comida para vc comer ?"))
    let comidaParaEssesMerdas = comida / tripulantes
    
    if(marujos >= 10 && comidaParaEssesMerdas >= 1.5){
    setResultado("Provisoes suficientes")

    }else{
        setResultado("algo esta errado")
    }

    } 

  return (
    <div className='ganso'>
        <h3>Ganso</h3>
        <button onClick={calcularFuturos}>ganso - provisoes</button>
        {resultado}
        </div>
  )
}

export default Ganso