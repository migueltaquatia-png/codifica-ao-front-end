import React, { useState } from 'react'

function CentroDeComando() {
    const [resultado, setResultado] = useState("");

  function calcularOacesso (){
        let crachaValido = Number(prompt("vc tem cracha valido?"))
        digitalReconhecida = Number(prompt("sua digital esta reconhecida?"))

        if(crachaValido === 1 && digitalReconhecida === 1){
            setResultado("Acesso permitido")
        }else{
            setResultado("Acesso negado")
        }
    }
  return (
    <div>
       <h3>e o acesso ao centro de comando</h3>
<button onClick={CentroDeComando}>centro de comando</button>
{resultado}
        </div>
  )
}

export default CentroDeComando