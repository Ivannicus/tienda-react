import React, { useContext } from "react";
import { contextoProductos } from "./AppProvider";
import ItemCount from "./ItemCount";

const ItemDetail = ({producto}) => {

    const contexto = useContext(contextoProductos);

    const añadirCarrito = (cantidad) => {
        contexto.llenarCarrito(producto[0], cantidad);
        contexto.sumarItems(cantidad);
    }
 
    

    return (
        <div>
            <nav class="detailProduct">
                <h1>{producto[0].nombre}</h1>
                <img src={producto[0].url} height="400" alt=""></img>
                <h2>{producto[0].precio} CLP</h2>
                <p>{producto[0].descripcion}</p>
                <ItemCount añadirCarrito={añadirCarrito}/>
            </nav>
        </div>
        )
}

export default ItemDetail