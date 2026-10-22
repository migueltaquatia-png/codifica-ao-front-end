import React, { useState } from 'react'

function Home() {
    const[inputLogin, setInputLogin] = useState("")
    const[resultado , setResultado]  = useState("")
   function efetuarLogin(){
     if (inputLogin == "admin"){
      setResultado("vc recebeu acesso de admir")
     }else{
      setResultado("vc errou muito feio")
   }
      
    }
  return (
    <div className='Home'>
        <h1>Inputs controlados</h1>
     <label htmlFor="">Login</label>
    <input type="text" 
    value={inputLogin}
    onChange={(e) => setInputLogin(e.target.value)}
    />


    <p>
        {/* {inputLogin} */}
    </p>


    <button onClick={efetuarLogin}>entrar</button>
    <p>
      {resultado}
    </p>
    </div>
  )
}

export default Home