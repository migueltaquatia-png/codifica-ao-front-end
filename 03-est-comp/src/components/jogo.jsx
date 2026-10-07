import React, { useState } from 'react'


function jogo() {
    const[resultado, setResultado] = useState()

   function classificar() {
    let ponto = Number(prompt("quanto pontos?"))
    if(ponto <= 10){
        setResultado("mogo o betinha..")
    }else if(ponto >10 && ponto <= 100){
        setResultado("quase la para mogar esse betinha..")
    }else if(ponto <= 200){
        setResultado("supimpa")
    }else{
        setResultado("farmou aura")
    }
    }           
  return (
    <div className='jogo'>
        <h2>jogo do mano juca</h2>
        <button onClick={classificar}>classificar</button>
        {resultado}
    </div>
    
  )
}

export default jogo