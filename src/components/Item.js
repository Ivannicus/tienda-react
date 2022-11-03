import React from "react";
import { Link } from "react-router-dom";

const Item = (item) => {
    return (
        <section class="card">
            <Link to={"/item/" + item.id.toString()}>
                <img src={item.url} height="200"></img>
                <h3>{item.nombre}</h3>
                <h4>{item.precio} CLP</h4>
            </Link>
        </section>
    )
}

export default Item;

