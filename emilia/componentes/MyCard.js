// MyCard.jsx
import React, { useContext } from "react";
import { Contexto } from "../context/Provider";

function MyCard() {
    const { canciones, busqueda, setCanciones } = useContext(Contexto);

    // Filtrar canciones según la búsqueda
    const cancionesFiltrados = canciones.filter((cancion) =>
        cancion.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

    function handleLike(id) {
        const updatedCanciones = cancionesFiltrados.map((cancion) => {
            if (cancion.id === id) {
                return { ...cancion, likes: (cancion.likes || 0) + 1 };
            }
            return cancion;
        });
        setCanciones(updatedCanciones);
    }

    function handleDelete(id) {
        const updatedCanciones = canciones.filter((cancion) => cancion.id !== id);
        setCanciones(updatedCanciones);
    }

    return (
        <div className="card-container">
            {cancionesFiltrados.map((cancion) => (
                <div key={cancion.id} className="card">
                    <div className="card-content">
                        <img className="imgCard" src={cancion.imagen} alt={cancion.edad} />
                        <h2>{cancion.nombre}</h2>
                    </div>
                    <button className="btnLike" onClick={() => handleLike(cancion.id)}>
                        Le diste like {cancion.likes || 0} veces
                    </button>
                    <button className="btnElim" onClick={() => handleDelete(cancion.id)}>
                        Eliminar
                    </button>
                </div>
            ))}
        </div>
    );
}

export default MyCard;
