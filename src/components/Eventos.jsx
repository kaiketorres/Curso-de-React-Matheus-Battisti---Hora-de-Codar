export default function Evento( {numero}) {
  
   const Alert = () => alert("Opa fui ativado ");
  
  return (
    <>
      <p>Clique para disparar um evento {numero}</p>
      <button onClick={Alert}>Ativar</button>
    </>
  );
}
