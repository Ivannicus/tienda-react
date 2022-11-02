import React from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <header class="header">
            <h2><Link to="/" class="titulo">Confecciones Nexku</Link></h2>
            <nav>
                <Link to="/category/delantales" class="links">Delantales</Link>
                <Link to="/category/monederos" class="links">Monederos</Link>
                <Link to="/category/carteras" class="links">Carteras</Link>
                <Link to="/category/ropadecama" class="links">Ropa de Cama</Link>
            </nav>
            <CartWidget />
        </header>
    )
}

export default NavBar;