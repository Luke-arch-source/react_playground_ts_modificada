import { useEffect, useState } from "react";

function Tarefa() {

  const [completed, setCompleted] = useState(false);
    const [tarefa, setTarefa] = useState('');

    useEffect(() => {

      if(completed){
        setTarefa('Parabéns! Você concluiu a tarefa!');
      }else{
        setTarefa('');
      }

    }, [completed]);
  return (

    <>
      <h1>Componente Tarefa</h1>
      <h3>{tarefa}</h3>
      <button onClick={() => setCompleted(true)}>{completed ? "Desfazer" : "Concluir"}</button>
    </>
    
  )
}

export default Tarefa