
import React, { useState } from 'react'

function verificarLiberacaoJaula(visitantesNaArea, horaAtual) {

  

  const semVisitantes = visitantesNaArea === 0;
  const foraDoExpediente = horaAtual < 8 || horaAtual > 18;

  if (semVisitantes && foraDoExpediente) {
    ("Liberação autorizada. Abrindo jaula.");
  } else {
    ("Liberação negada. Área em uso ou fora do horário permitido.");
  }
}


verificarLiberacaoJaula(0, 20); 
verificarLiberacaoJaula(2, 20); 
verificarLiberacaoJaula(0, 14);

function jaulas() {
  return (
    <div>
    <h3>jaukas automatizadas</h3>
    <button on onClick={verificarLiberacaoJaula}>jaulas automatizadas</button>
    {resultado}
        </div>
  )
}

export default jaulas