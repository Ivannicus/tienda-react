import React, { useContext } from "react";
import { contextoProductos } from "./AppProvider";
import ItemCount from "./ItemCount";

const ItemDetail = ({producto}) => {

    

    const contexto = useContext(contextoProductos);

    const añadirCarrito = (cantidad) => {
        contexto.llenarCarrito(producto, cantidad);
        contexto.sumarItems(cantidad);
    }
 
    return (
        <div>
            <nav class="detailProduct">
                <h1>{producto.nombre}</h1>
                <img src={producto.url} height="400" alt=""></img>
                <h2>{producto.precio} CLP</h2>
                <p>{producto.descripcion}</p>
                <ItemCount añadirCarrito={añadirCarrito}/>
            </nav>
        </div>
        )
}

export default ItemDetail