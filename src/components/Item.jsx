import PropsTypes from 'prop-types'


export default function Item( {marca, ano_lancamento} ){
  return(
    <>
    <li>{marca} - {ano_lancamento}</li>
    </>
  )
}

Item.prototype = {
  marca:PropsTypes.string.isRequired,
  ano_lancamento: PropsTypes.number.isRequired
}

Item.defaultProps = {
  marca: 'teste',
  ano_lancamento: 3
}


