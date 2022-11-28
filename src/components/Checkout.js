import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { contextoProductos } from "./AppProvider";
import { añadirPedido } from "./Productos";

const Checkout = () => {


    const contexto = useContext(contextoProductos);

    let fecha = new Date().toLocaleDateString();

    let pedidoFinal = [];

    for (let i of contexto.productos) {
        pedidoFinal.push([{ "nombre": i[0].nombre, "descripcion": i[0].descripcion, "precio": i[0].precio, "cantidad": i[1] }])
    }

    const compra = { "nombre": contexto.nombre, "email": contexto.email, "pedido": JSON.stringify(pedidoFinal), "fecha": fecha, "status": contexto.status };

    const finalizarCompra = () => {
        contexto.vaciarCarrito();
        const id = añadirPedido(compra);
        id.then((res) => contexto.idCompra(res))
    }


    return (
        <form class="formulario">
            <h2 class="tituloFormulario">Ingresa tus datos para completar tu pedido</h2>
            <input placeholder="nombre" class="inputFormulario" onChange={(e) => contexto.asignarNombre(e.target.value)}></input>
            <input placeholder="correo" type="email" class="inputFormulario" onChange={(e) => contexto.asignarEmail(e.target.value)}></input>
            <div class="botonesCarrito">
                <Link to="/cart">
                    <button class="botonItem">Volver al Carrito</button>
                </Link>
                <Link to="/checkoutconfirmation">
                    <button class="botonItem" onClick={finalizarCompra}>Comprar</button>
                </Link>

            </div>
        </form>
    )
}

export default Checkout;