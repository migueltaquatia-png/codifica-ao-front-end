
import React, { useState } from 'react'

  function verificarSarumano(somFuncionando, figurinoCompleto) {

    const [resultados, setResultado] = React.useState()

  if (somFuncionando && figurinoCompleto) {
    setResultado("Palco liberado para Sarumano! Luzes, câmera, ilusão!");
  } else if (!somFuncionando && figurinoCompleto) {
    setResultado("Sem som. Realizar apresentação alternativa no salão.");
  } else if (somFuncionando && !figurinoCompleto) {
    setResultado("Faltando parte do figurino. Te vira no improviso!");
  } else {
    setResultado("Apresentação cancelada. Hora da mágica de desaparecer…");
  }
}


function Palco() {
  return (
    <div>
        <h3>Entrada no Palco</h3>
        <button onClick={verificarSarumano}>Entrada no Palco</button>
        
        </div>
  )
}

export default Palco