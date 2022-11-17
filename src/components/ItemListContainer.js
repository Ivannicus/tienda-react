import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom"
import { obtenerItems, obtenerItemsFiltrados } from "./Productos";
import { db } from "./firebase";

const ItemListContainer = () => {

    const [items, setItems] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        if (!id) {
            obtenerItems()
                .then((respuesta) => { setItems(respuesta) })
                .catch((error) => { console.log(error) })
        } 
        else {
            obtenerItemsFiltrados(id)
                .then((respuesta) => { setItems(respuesta) })
                .catch((error) => console.log(error))
        }
    }, [id])


    return (
        <div class="cardContainer">
            {items.length == 0 ? <h1>Obteniendo productos...</h1> : <ItemList productos={items} />}
        </div>)
}

export default ItemListContainer;