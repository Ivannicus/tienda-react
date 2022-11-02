import React from "react";
import { Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./ItemDetailContainer";
import ItemListContainer from "./ItemListContainer";

const Main = () => {
    return(
        <main>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}></Route>
                <Route path="/category/:id" element={<ItemListContainer/>}></Route>
                <Route path="/item/:id" element={<ItemDetailContainer/>}></Route>
            </Routes>
        </main>
    )
}

export default Main;