function CardRazas({imagen,nombreRaza}) {
    return (
      <li className="card">
        <div className="contenedor-imagen">
          <img src={imagen} alt={nombreRaza} />
        </div>
        <span className="tituloRaza">
          {nombreRaza}
        </span>
  
      </li>
    )
  }

  export default CardRazas;