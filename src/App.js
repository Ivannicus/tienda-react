import React from "react";
import ItemListContainer from "./components/ItemListContainer.js";
import NavBar from "./components/NavBar.js";
import { BrowserRouter } from "react-router-dom"
import Main from "./components/Main.js"

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Main />
        </BrowserRouter>
    )
}

export default App;