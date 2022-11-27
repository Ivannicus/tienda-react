import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { contextoProductos } from "./AppProvider";


const Checkout = () => {

    const contexto = useContext(contextoProductos);

    const vaciarCarrito = () => {
        contexto.vaciarCarrito();
    }
    return (
        <form class="formulario">
            <h2 class="tituloFormulario">Ingresa tus datos para completar tu pedido</h2>
            <input placeholder="nombre" class="inputFormulario"></input>
            <input placeholder="correo" type="email" class="inputFormulario"></input>
            <div class="botonesCarrito">
                <Link to="/checkoutconfirmation">
                    <button class="botonItem" onClick={vaciarCarrito}>Comprar</button>
                </Link>
                <Link to="/cart">
                    <button class="botonItem">Volver al Carrito</button>
                </Link>
            </div>
        </form>


    )
}

export default Checkout;