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

    const llenarCarrito = (item, cantidad) => {
        setProductos(productos => [...productos, [item, cantidad]]);
    }

    const sumarItems = (items) => {
        setCantidad(current => current + items)
    }


    const valorContexto = {
        productos: productos,
        cantidad: cantidad,
        vaciarCarrito: vaciarCarrito,
        llenarCarrito: llenarCarrito,
        sumarItems: sumarItems,
    }

    return (
        <Provider value={valorContexto}>
            {children}
        </Provider>)
}

export default AppProvider