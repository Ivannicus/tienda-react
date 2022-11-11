import React, { createContext, useState } from "react"

export const contextoProductos = createContext();

const { Provider } = contextoProductos;

const AppProvider = ({children}) => {
    const [productos, setProductos] = useState([]);

    const [cantidad, setCantidad] = useState(0);

    const vaciarCarrito = () => {
        setProductos([]);
        setCantidad(0);
    }

    const llenarCarrito = (item) => {
        setProductos(productos => [...productos, item]);
    }

    const sumarItems = (items) => {
        setCantidad = (current => current + items)
    }

    const valorContexto = {
        productos: productos,
        cantidad: cantidad,
        vaciarCarrito: vaciarCarrito,
        llenarCarrito: llenarCarrito,
        sumarItems: sumarItems,
    }

    // console.log(productos)
    // console.log(cantidad)
    return (
        <Provider value={valorContexto}>
            {children}
        </Provider>)
}

export default AppProvider