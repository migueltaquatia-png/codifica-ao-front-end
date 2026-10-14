import React, { useState } from 'react'

function TransporteInterno() {

const[resultado, setResultado] = useState("")


    function calcularTransporteInterno() {
        let emManutencao = Number(prompt("O transporte interno está em manutenção? (1 para sim, 0 para não)"))
        let emergenciaAtiva = Number(prompt("Há uma emergência ativa"))

        if (emManutencao === 1 && emergenciaAtiva === 1) {
            setResultado("Transporte liberado para uso")
        } 
        else {
            setResultado("Transporte indisponível por motivo de segurança")
        }

    }

  return (
    <div>
        <h3>Sistema de Transporte Interno</h3>
        <button onClick={calcularTransporteInterno}>Calcular Transporte Interno</button>
        <p>{resultado}</p>
        </div>
  )
}

export default TransporteInterno