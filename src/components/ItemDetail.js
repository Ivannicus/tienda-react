import React, { useContext } from "react";
import { contextoProductos } from "./AppProvider";
import ItemCount from "./ItemCount";

const ItemDetail = ({producto}) => {

    const contexto = useContext(contextoProductos);

    const añadirCarrito = () => {
        contexto.llenarCarrito(producto)
        contexto.sumarItems()
    }

    const buscarCantidad = (cantidad) => {
        let contador = cantidad
        return(contador)
    }

 

    return (
        <div>
            <nav class="detailProduct">
                <h1>{producto[0].nombre}</h1>
                <img src={producto[0].url} height="400" alt=""></img>
                <h2>{producto[0].precio} CLP</h2>
                <ItemCount buscarCantidad={buscarCantidad}/>
                <button onClick={añadirCarrito}>Añadir al carrito</button>
            </nav>
        </div>
        )
}

export default ItemDetail