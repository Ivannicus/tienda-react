import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom"
import { obtenerItems } from "./Productos";

const ItemListContainer = () => {

    const [items, setItems] = useState([]);

    const { id } = useParams();
    useEffect(() => {

        obtenerItems(id)
            .then((res) => {
                const productos = res.docs.map(doc => ({ ...doc.data(), id: doc.id }))
                setItems(productos)
            })
            .catch((error) => { console.log(error) })
    }, [id])

    

    return (
        <div class="cardContainer">
            {items.length == 0 ? <h1>Obteniendo productos...</h1> : <ItemList productos={items} />}
        </div>)
}

export default ItemListContainer;