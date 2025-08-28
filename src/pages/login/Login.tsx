import { useEffect, useState } from "react";
import Home from "../home/Home";

function Login() {


  const [isLogged, setIsLogged] = useState(false);
  const [kit, setKit] = useState('');



  useEffect(() => {
  
        if(isLogged){

          setKit('Entrada aceita!');
        }else{
          setKit('Login falhou ou não foi tentado ainda!');
        }
  
        }, [isLogged]);


  // return (
  //   <>
  //     {isLogged ? (
  //       <Home />
  //     ) : (
  //       <>
  //         {/* <h1> Login </h1>
  //         <button onClick={() => setIsLogged(true)}>Entrar</button> */}



  //         <h3>{kit}</h3>
  //         <button onClick={() => setIsLogged(true)}>{isLogged ? "Login Concluído com sucesso" : "Login falhou!"}</button>

  //       </>
  //     )}
  //   </>
  // );


  return (
    <>
      <h1>Login</h1>
      <h3>{kit}</h3>
      <button onClick={() => setIsLogged(true)}>{isLogged ? "Login Concluído com sucesso" : "Botão para logar"}</button>
    </>
  );
}

export default Login