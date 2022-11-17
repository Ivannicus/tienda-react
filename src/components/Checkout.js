import React from "react"
import { Link } from "react-router-dom"

const Checkout = (lista) => {
    
    let total = 0;
    for (let i in lista){
        console.log(i)
    }

    return (
        <div>
            <Link to={"/item/" + lista.item[0].id.toString()} class="cardCarrito">
                <img src={lista.item[0].url} height="100"></img>
                <h3>{lista.item[0].nombre}</h3>
                <h4>{lista.item[0].precio} CLP</h4>
                <h4>Cantidad: {lista.item[1]}</h4>
                <h4>Total: {lista.item[0].precio*lista.item[1]}</h4>
            </Link>
        </div>
    )
}

export default Checkout