
import React, { useState } from 'react'

function Deslocamento() {

    const[resultado, setResultado] = useState("");

function calcularDeslocamento (){
    let estaGripafo = Number(prompt("vc esta gripado:"))
    let tempoViagem = Number(prompt("tempo da viagem: "))

    if(estaGripafo >= 45){
       setResultado("Viagem autorizada. Rumo ao show!")
    }
    else{
        setResultado("Deslocamento inviável. Melhor recusar este evento.")
    }
}

  return (
    <div>
     <h3>e o deslocamento para eventos</h3>
     <button onClick={calcularDeslocamento}>deslocamento e</button>
     {resultado}
        </div>
  )
}

export default Deslocamento