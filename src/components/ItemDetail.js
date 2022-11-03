import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({producto}) => {
    console.log(producto)
    return (
        <div>
            <nav class="detailProduct">
                <h1>{producto[0].nombre}</h1>
                <img src={producto[0].url} height="400"></img>
                <h2>{producto[0].precio} CLP</h2>
                <button>Añadir al carrito</button>
                <ItemCount />
            </nav>
        </div>
        )
}

export default ItemDetail