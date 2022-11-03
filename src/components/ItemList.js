import React from "react";
import { Link } from "react-router-dom";

const ItemList = (prop) => {

    return prop.productos.map(producto => {
        return (
            <div class="card"><Link to={"/item/" + producto.id.toString()}>
                <img src={producto.url} height="200"></img>
                <h3>{producto.nombre}</h3>
                <h4>{producto.precio} CLP</h4>
            </Link></div>
        )
    })


}

export default ItemList;