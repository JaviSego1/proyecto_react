import React from "react";

function DetalleVideojuego({ videojuego, onClose, onEliminar }) {
  return (
    <div className="detalle-videojuego">
      <h2>{videojuego.nombre}</h2>
      <img src={videojuego.url_imagen} alt={videojuego.nombre} width="300" />
      <p>{videojuego.descripcion}</p>
      <p>Fecha de lanzamiento: {videojuego.fecha_lanzamiento}</p>
      <p>Compañía: {videojuego.compania}</p>
      <p>Precio: {videojuego.precio} €</p>
      <button onClick={onClose}>Cerrar</button>
      <button onClick={() => onEliminar(videojuego.id)}>Eliminar</button>
    </div>
  );
}

export default DetalleVideojuego;
