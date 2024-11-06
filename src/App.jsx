import './App.css'
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'

export default function App() {

  return (
    <>
      <div className='App'>
        <HelloWorld/>
        <SayMyName name='kaike'/>
        <SayMyName name='joao'/>
      </div>
    </>
  )
}

