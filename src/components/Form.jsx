import { useState } from "react";

export default function Form() {

  const CadratroUser = (e) => {
    e.preventDefault();
    alert("User Cadratrado");
  };


  const [name,setName] = useState('')
  const [senha,setSenha] = useState('')
  return (
    <>
      <form action="" onSubmit={CadratroUser}>
        <div>
          <label htmlFor="name">Name:</label>
          <input onChange={(e ) => setName(e.target.value)  }
            type="text"
            id="name"
            name="name"
            placeholder="Digite seu nome"
          />
        <p>{name} - {senha}</p>
        </div>
        <div>
          <label htmlFor="senha">Senha:</label>
          <input  onChange={(e) => setSenha(e.target.value)}
            type="password"
            id="senha"
            name="senha"
            placeholder="Digite a sua Senha"
          />
        </div>
        <div>
          <input type="submit" value="Cadratro" />
        </div>
      </form>
    </>
  );
}
