import React from "react";
import { useState } from "react";

const ItemCount = ({añadirCarrito}) => {

    const [contador, setContador] = useState(1);

    const handleSuma = () => {
        setContador(contador + 1);
    }

    const handleResta = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    }

    const añadir = () => {
        añadirCarrito(contador)
    }

    return (
        <div>
            <nav class="itemCount">
                <button onClick={handleSuma} class="botonItem">+</button>
                <p>{contador}</p>
                <button onClick={handleResta} class="botonItem">-</button>
            </nav>
            <button onClick={añadir}>Añadir al carrito</button>
        </div>)
}

export default ItemCount