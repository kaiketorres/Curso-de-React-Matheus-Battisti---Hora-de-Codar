export default function OutraLista({ itens }) {
  return (
    <>
      <h3>Lista de coisa boas:</h3>
      {itens.length > 0
        ? itens.map((item, index) => (
            <p>
              {item} - {index}
            </p>
          ))
        : alert("teste")}
    </>
  );
}
