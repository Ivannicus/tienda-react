import React from "react";
import { useState } from "react";

const ItemCount = ({buscarCantidad}) => {

    const [contador, setContador] = useState(1);


    const handleSuma = () => {
        setContador(contador + 1);
    }

    const handleResta = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    }

    buscarCantidad(contador);
    console.log(buscarCantidad(contador))

    return (
        <div>
            <nav class="itemCount">
                <button onClick={handleSuma} class="botonItem">+</button>
                <p>{contador}</p>
                <button onClick={handleResta} class="botonItem">-</button>
            </nav>
            
        </div>)
}

export default ItemCount