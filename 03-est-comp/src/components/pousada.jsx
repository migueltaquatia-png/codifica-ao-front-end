import React from 'react'



function pousada() {
    const [valor, setValor] = React.useState()

function classificar() {    
    let dias = parseFloat(prompt("quanto tempo vc vai ficar?"))
    let valor

    if(dias <= 5){
        valor = 100;
    }else if(dias <= 10){
        valor = 90;
    }else{
        valor = 80;
    }
    let total = dias * valor
    let multa = 150
    let desconto = total * 25/100
    let totalFinal = total - desconto + multa

    setValor(totalFinal)
    
}


  return (
    <div className='pousada'>
        <h2>pousada, e ai tropa</h2>
         <button onClick={classificar}>pousada mano juca</button>
         {valor}
    </div>
  )
}

export default pousada