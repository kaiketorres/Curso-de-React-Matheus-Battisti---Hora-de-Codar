import './App.css'
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'
import List from './components/List'
import Evento from './components/Eventos'
import Form from './components/Form'

export default function App() {

  return (
    <>
      <div className='App'>
        <h1>Testando CSS</h1>
        <HelloWorld/>
        <SayMyName name={'kaike'}/>
        <SayMyName name={'torres'}/>
        <Pessoa />
        <Pessoa nome={'kaike'} idade={21} profissao={'ourives'}/>
        <List/>
        <Evento numero={1}/>
        <Evento numero={2}/>
        <Form/>
      </div>
    </>
  )
}

