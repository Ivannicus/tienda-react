import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail";
import { obtenerItemUnico } from "./Productos";

const ItemDetailContainer = () => {

    const { id } = useParams();
    const [item, setItem] = useState([])

    useEffect(() => {
        obtenerItemUnico(id)
            .then((respuesta) => setItem({ ...respuesta.data(), id: respuesta.id }))
            .catch((error) => console.log(error))
    })


    return (item.length === 0 ? <h2>Obteniendo Item... </h2> : <ItemDetail producto={item} />)
}

export default ItemDetailContainer;