import React from "react";
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