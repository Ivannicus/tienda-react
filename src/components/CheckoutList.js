import React, { useContext } from "react"
import { contextoProductos } from "./AppProvider";
import Checkout from "./Checkout";



const CheckoutList = () => {
    const contexto = useContext(contextoProductos);


    return (
        <div class="carritoContainer">
        {
            contexto.productos.map(item => {
                return (<Checkout item={item}/>)
            })
        }
    </div>
    )
}

export default CheckoutList