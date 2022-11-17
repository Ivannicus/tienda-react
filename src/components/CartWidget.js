import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { contextoProductos } from "./AppProvider";

const CartWidget = () => {
    const productos = useContext(contextoProductos)
    return (
        <Link to="/cart" class="cartWidget">
            <img src="https://www.fisiocrem.com/wp-content/uploads/2020/06/cart-icon-300x300.png" class="iconoCarro"></img>
            <p>{productos.cantidad}</p>
        </Link>
)}

export default CartWidget;