import React, { useState } from 'react'


function Fumaça () {
    const[resultado, setResultado] = useState()

function calcularseguranca() {
    let criancasPequenas = Number(prompt("quantas criancas pequenas tem ai?"))
    let velocidadeVento = Number(prompt("qual a velocidade do vento?"))

    if (criancasPequenas >= 0 && velocidadeVento <= 0.5) {
        setResultado('Fumaça liberada. Que comecem os mistérios!')
    } else {
        setResultado("Fumaça bloqueada. Aguardar condições ideais.")
    }
}


  return (
    <div>
        <h3>e a máquina de Fumaça Mística</h3>
        <button onClick={calcularseguranca}>Calcular Segurança</button>
        {resultado}
        </div>
  )
}

export default Fumaça