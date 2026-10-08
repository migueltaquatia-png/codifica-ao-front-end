import React, { useState } from "react";

function Altura() {
  const [resultado, setResultado] = useState("");

  const calcularPeso = () => {
    let genero = prompt("Qual seu gênero? (M/F)")?.toUpperCase();
    let altura = parseFloat(prompt("Qual sua altura? (em metros)"));

    if (!gênero || isNaN(altura)) return;

    let pesoidealM = 72.7 * altura - 58;
    let pesoidealF = 62.1 * altura - 44.7;

    if (gênero === "M") {
      setResultado(`Seu peso ideal é: ${pesoIdealM.toFixed(2)} kg`);
    } else if (gênero === "F") {
      setResultado(`Seu peso é: ${pesoIdealF.toFixed(2)} kg`);
    } else {
      setResultado(
        "deu merda coloque m para macho ou f para feminino"
      );
    }
  };

  return (
    <div className="seu peso ideal">
      <h3>peso ideal</h3>
      <button onClick={calcularPeso}>calculadora de peso ideal</button>
      {resultado && <p>{resultado}</p>}
    </div>
  );
}

export default Altura;