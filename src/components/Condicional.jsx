import { useState } from "react";

export default function Teste() {

  const [email, setEmail] = useState();
  const [userEmail, setUserEmail] = useState()

  function EnviarEmail(e) {
    e.preventDefault();
    setUserEmail(email)
  }


  function LimparEmail(){
    setUserEmail('  ')
  }

  return (
    <>
      <h2>Cadratre seu email</h2>
      <form action="">
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Digite o seu email"
        />

        <button onClick={EnviarEmail}>Enviar email</button>
      </form>
      {userEmail && (
        <div>
          o e-mail do usuario e: {userEmail}
          <button  onClick={LimparEmail} >Limpar email</button>
        </div>
      )}
    </>
  );
}
