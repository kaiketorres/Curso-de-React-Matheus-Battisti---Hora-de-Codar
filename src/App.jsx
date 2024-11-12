import './App.css'
import { useState } from 'react'
import SeuNome from './SeuNome'
import Saudacao from './saudacao.jsx'

export default function App() {


  const [nome, setNome ] = useState()

  return (
    <>
      <div className='App'>
        <h1>Renderizacao de Listas</h1>
        <SeuNome setNome={setNome}/>
        <Saudacao nome={nome}/>
      </div>
    </>
  )
}

