import React from "react";

function ListaVideojuegos({ videojuegos, setVideojuegoSeleccionado }) {
  return (
    <div>
      {videojuegos.map((videojuego) => (
        <div key={videojuego.id} onClick={() => setVideojuegoSeleccionado(videojuego)}>
          <h2>{videojuego.nombre}</h2>
          <img src={videojuego.url_imagen} alt={videojuego.nombre} width="200" />
          <p>Precio: ${videojuego.precio}</p>
          <p>{videojuego.descripcion.substring(0, 100)}...</p>
        </div>
      ))}
    </div>
  );
}

export default ListaVideojuegos;