import React, { useState } from "react";

function Feira() {
  const [resultado, setResultado] = useState("");

  const calcularCompra = () => {
    let quantidade = Number(prompt("quantas maçãs você comprar seu lixo? "));

    if (isNaN(quantidade) || quantidade <= 0) {
      setResultado("digite o válido de maças.");
      return;
    }

    let precoUnitario = quantidade < 12 ? 0.30 : 0.25;
    let total = quantidade * precoUnitario;

    setResultado(`total da compra: R$ ${total.toFixed(2)}`);
  };

  return (
    <div className="feira-container">
      <h3>Comprar maças</h3>

      <button onClick={calcularCompra}>Total da compra</button>

      {resultado && <p>{resultado}</p>}
    </div>
  );
}

export default Feira;