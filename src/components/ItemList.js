import React from "react";
import { Link } from "react-router-dom";
import Item from "./Item"

const ItemList = (items) => {

    return (
        <div class="detailContainer">
            {
                items.productos.map(item => {
                    return (<Item key={item.id} {...item}/>)
                })
            }
        </div>
    )
}


export default ItemList;