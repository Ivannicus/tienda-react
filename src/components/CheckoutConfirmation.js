import React, { useContext } from "react"
import { Link } from "react-router-dom";
import { contextoProductos } from "./AppProvider"


const CheckoutConfirmation = () => {

    const contexto = useContext(contextoProductos);

    const resetear = () => {
        contexto.idCompra("");
        contexto.asignarNombre("");
        contexto.asignarEmail("");
    }


    return (
        <div class="confirmacionCheckout">
            <h2 class="itemsCheckout">¡Hola {contexto.nombre}! Tu compra realizada con éxito!</h2>
            <h3 class="itemsCheckout">Recibirás un correo a tu email: {contexto.email}</h3>
            <h3 class="itemsCheckout">El ID de tu compra es el siguiente: {contexto.id}</h3>
            <button class="botonItem" onClick={resetear}><Link to="/">Volver a la página principal</Link></button>
        </div>
    )
}

export default CheckoutConfirmation