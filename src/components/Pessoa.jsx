import PropsTypes from 'prop-types'

export default function Pessoa( {nome, idade, profissao} ) {
  return(
    <div>
      <p>Meu nome e {nome} tenho {idade} e meu trabalho e {profissao}</p>
    </div>
  )
} 

Pessoa.prototype = {
  nome: PropsTypes.string.isRequired,
  idade: PropsTypes.number.isRequired,
  profissao: PropsTypes.string.isRequired
}

Pessoa.defaultProps = {
  nome: 'andre',
  idade: 18,
  profissao: 'lixeiro'
}