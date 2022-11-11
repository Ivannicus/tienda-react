import React from "react";
import NavBar from "./components/NavBar.js";
import { BrowserRouter } from "react-router-dom"
import Main from "./components/Main.js"
import AppProvider from "./components/AppProvider.js";
import { app, db } from "./components/firebase"

function App() {

    return (
            <AppProvider>
                <BrowserRouter>
                    <NavBar />
                    <Main />
                </BrowserRouter>
            </AppProvider>
    )
}

export default App;