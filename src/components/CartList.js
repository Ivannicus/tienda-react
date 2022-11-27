import React, { useContext } from "react"
import { Link } from "react-router-dom";
import { contextoProductos } from "./AppProvider";
import Cart from "./Cart";

const CartList = () => {
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
                    return (<Cart item={item} />)
                })
            }
            <nav class="botonesCarrito">
                <h3>Valor Total de Compra: {total}</h3>
                <button onClick={vaciarCarrito} class="botonItem">Vaciar Carrito</button>
                <Link to="/checkout">
                    <button class="botonItem">Comprar</button>
                </Link>
            </nav>
        </div>
    )
}

export default CartList