"use client"

import { useState } from "react"


const Page = () => {

  const[ nombre , setnombre] = useState ('Carlos');

  const[ contador , setContador] = useState(0);

  function Contar(){
    setContador(contador + 1)
  }
  
  function limpiar(){
    setContador(0)
  }
  return(
    <div> 
      <h1>The Final Boss</h1>
      <h2>Estructuras de datas</h2>
      <h3>{nombre}</h3>
      <button onClick={Contar}>
        Contar
      </button>
      <p>{contador} veces precionadas </p>
      <button onClick={limpiar}>
        Limpiar
      </button>
      <p>Preciona Limpiar para reiniciar la cuenta </p>
    </div>
      )
  }  
export default Page
