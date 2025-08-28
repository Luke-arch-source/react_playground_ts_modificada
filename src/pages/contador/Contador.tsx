import { useState } from "react";


function Contador() {

  const [valor, setValor] = useState(0);

  function handleClick(){
    setValor(valor + 1)
  }

  function handleLose() {
    setValor(valor - 1)
  }

  function handleMultiplierFour() {
    setValor(valor * 4)
  }

  function handleMultiplierTwo() {
    setValor(valor * 4)
  }


  



  return (
    <>
      <h1>Componente Contador</h1>
      <p>O valor inicial é: {valor}</p>
      <button onClick={handleClick}>Adicionar 1</button>
      <button onClick={handleLose}>Subtrair 1</button>
      <button onClick={handleMultiplierFour}>Multiplicar por 4</button>
      <button onClick={handleMultiplierTwo}>Multiplicar por 2</button>
    </>

  )
}

export default Contador