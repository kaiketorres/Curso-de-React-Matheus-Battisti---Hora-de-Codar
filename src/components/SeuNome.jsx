export default function SeuNome({setNome}){
  return (
    <div>
      <p>Digite seu nome:</p>
      <input type="text" placeholder="Qual e seu nome" onChange={(e) => setNome(e.target.value)} />
    </div>
  )
}