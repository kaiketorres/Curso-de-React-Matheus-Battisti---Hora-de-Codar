export default function Saudacao({nome}){

  function perarSaudacao(algumNome){
    return `ola, ${algumNome}, tudo bem`
  }

  return(
    <>
    {nome && <p>{perarSaudacao(nome)}</p>}
    </>
  )
}