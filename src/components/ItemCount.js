import React from "react";
import { useState } from "react";

const ItemCount = () => {

    const [contador, setContador] = useState(1);


    const handleSuma = () => {
        setContador(contador + 1);
    }

    const handleResta = () => {
        if (contador > 0) {
            setContador(contador - 1);
        }

    }

    const añadirCarrito = () => {
        console.log(contador + " productos añadidos")
    }
    return (
        <div>
            <nav class="itemCount">
                <button onClick={handleSuma} class="botonItem">+</button>
                <p>{contador}</p>
                <button onClick={handleResta} class="botonItem">-</button>
            </nav>
            <button onClick={añadirCarrito}>Añadir al carrito</button>
        </div>)
}

export default ItemCount