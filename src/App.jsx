import './App.css'
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/pessoa'

export default function App() {

  return (
    <>
      <div className='App'>
        <HelloWorld/>
        <SayMyName name={'kaike'}/>
          <SayMyName name={'joao'}/>
        <Pessoa nome={'kaike'} idade={21} profissao={'ourives'}  />
      </div>
    </>
  )
}

