import React from "react";
import { Routes, Route } from "react-router-dom";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import CartList from "./CartList";
import Checkout from "./Checkout";
import CheckoutConfirmation from "./CheckoutConfirmation";

const Main = () => {
    return(
        <main>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}></Route>
                <Route path="/categories/:id" element={<ItemListContainer/>}></Route>
                <Route path="/item/:id" element={<ItemDetailContainer/>}></Route>
                <Route path="/cart" element={<CartList/>}></Route>
                <Route path="/checkout" element={<Checkout/>}></Route>
                <Route path="/checkoutconfirmation" element={<CheckoutConfirmation/>}></Route>
            </Routes>
        </main>
    )
}

export default Main;