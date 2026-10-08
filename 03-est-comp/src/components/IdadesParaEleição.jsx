import React, { useState } from 'react'  

function Votar() {
  const [resultado, setResultado] = useState("");

  const executarVoto = () => {
    let idade = Number(prompt("qual sua idade"))

    if (idade < 16) {
      setResultado("você não pode votar");
    } else if (idade === 16 || idade === 17) {
      setResultado("voto facultativo")
    } else if (idade >= 18 && idade <= 65) {
      setResultado("voto obrigatório")
    } else if (idade > 65) {
      setResultado("voto facultativo")
    }
  }

  return (
    <div className="votar">
      <h2>Votar</h2>
      <button onClick={executarVoto}>Vote</button>
      {resultado}
    </div>
  )
}

export default Votar