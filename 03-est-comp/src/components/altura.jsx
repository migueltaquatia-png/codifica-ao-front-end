import React, { useState } from "react";

function Altura() {
  const [resultado, setResultado] = useState("");

  const calcularPeso = () => {
    let gênero = prompt("Qual seu gênero? M || F")?.toUpperCase();
    let altura = parseFloat(prompt("qual sua altura"));

    if (!gênero || isNaN(altura)) return;

    let pesoIdealM = 72.7 * altura - 58;
    let pesoIdealF = 62.1 * altura - 44.7;

    if (gênero === "M") {
      setResultado(`seu peso é: ${pesoIdealM.toFixed(2)} `);
    } else if (gênero === "F") {
      setResultado(`Seu peso é: ${pesoIdealF.toFixed(2)} `);
    } else {
      setResultado(
        "coloque m para macho e f para femeia"
      );
    }
  };

  return (
    <div className="seu peso ideal">
      <h3>sue peso ideal</h3>
      <button onClick={calcularPeso}>peso</button>
      {resultado && <p>{resultado}</p>}
    </div>
  );
}

export default Altura;