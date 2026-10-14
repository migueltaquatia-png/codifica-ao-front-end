import React, { useState } from 'react'

function RecrutamentoGanso() {

    const [resultado, setResultado] = useState("");

   function calcularRecrutamento() {
    let saberNadar = Number(prompt("vc sabe nadar?"))
    let idade = Number(prompt("qual sua idade?"))
    let temRecomendacoao = Number(prompt("vc tem recomendacao?"))

    if (saberNadar === 1 && idade >= 18 && temRecomendacoao === 1) {
      setResultado("vc pode se alistar")
    } if (saberNadar === 1 && idade >= 14 && temRecomendacoao === 0) {
      setResultado("Aprovado sob recomendação. Monitorar nas primeiras viagens.")
    }else {
        setResultado("vc nao pode se alistar")
    }
   }

  return (
    <div>
        <h3>recrutamento do Ganso</h3>
        <button onClick={calcularRecrutamento}>Calcular Recrutamento</button>
        <p>{resultado}</p>
    </div>
  )
}

export default RecrutamentoGanso