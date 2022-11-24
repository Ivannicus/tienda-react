import React, { useContext } from "react"
import { contextoProductos } from "./AppProvider";
import Checkout from "./Checkout";

const CheckoutList = () => {
    let total = 0;
    const contexto = useContext(contextoProductos);

    const vaciarCarrito = () => {
        contexto.vaciarCarrito();
    }

    for (let i = 0; i < contexto.productos.length; i++) {
        total += contexto.productos[i][0].precio * contexto.productos[i][1]
    }

    return (
        <div class="carritoContainer">
            {
                contexto.productos.map(item => {
                    return (<Checkout item={item} />)
                })
            }
            <nav class="botonesCarrito">
                <h3>Valor Total de Compra: {total}</h3>
                <button onClick={vaciarCarrito} class="botonItem">Vaciar Carrito</button>
                <button class="botonItem">Comprar</button>
            </nav>
        </div>
    )
}

export default CheckoutList