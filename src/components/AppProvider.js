import React, { createContext, useState } from "react"
import _ from "lodash"
import isEqual from "lodash/isEqual"

export const contextoProductos = createContext();

const { Provider } = contextoProductos;

const AppProvider = ({ children }) => {

    const [productos, setProductos] = useState([]);

    const [cantidad, setCantidad] = useState(0);

    const vaciarCarrito = () => {
        setProductos([]);
        setCantidad(0);
    }

    const llenarCarrito = (item, cantidad) => {
        
        if (productos.length > 0) {
            let contador = 0;
            for (let i = 0; i < productos.length; i++) {
                if (_.isEqual(productos[i][0], item)) {
                    productos[i][1]+=cantidad
                    contador += 1;
                    break;
                }
            }
            if (contador == 0) {
                setProductos(productos => [...productos, [item, cantidad]]);
            }
        } else {
            setProductos(productos => [...productos, [item, cantidad]]);
        }
        
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