import React from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <header class="header">
            <h2><Link to="/" class="titulo">Confecciones Nexku</Link></h2>
            <nav>
                <Link to="/categories/delantales" class="links">Delantales</Link>
                <Link to="/categories/monederos" class="links">Monederos</Link>
                <Link to="/categories/carteras" class="links">Carteras</Link>
                <Link to="/categories/ropadecama" class="links">Ropa de Cama</Link>
            </nav>
            <Link to="/cart"><CartWidget /></Link>
            
        </header>
    )
}

export default NavBar;