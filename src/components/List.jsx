import Item from './Item'

export default function List(){
  return(
    <>
    <h1>Minha Lista</h1>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <Item marca={'Ferrari'} ano_lancamento={1985}/>
      <Item />  
      <Item marca={'Ronault'} ano_lancamento={19}/>
    </ul>
    </>
  )
}