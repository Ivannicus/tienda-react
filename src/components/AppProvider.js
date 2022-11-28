import React, { createContext, useState } from "react"
import _ from "lodash"
import isEqual from "lodash/isEqual"

export const contextoProductos = createContext();

const { Provider } = contextoProductos;

const AppProvider = ({ children }) => {

    const [productos, setProductos] = useState([]);
    const [cantidad, setCantidad] = useState(0);
    const [id, setID] = useState("");
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("generada");

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
        setCantidad(current => current + items);
    }

    const idCompra = (id) => {
        setID(id);
    }

    const asignarNombre = (nombre) => {
        setNombre(nombre);
    } 

    const asignarEmail = (email) => {
        setEmail(email);
    } 


    const valorContexto = {
        productos: productos,
        cantidad: cantidad,
        id: id,
        nombre: nombre,
        email: email,
        status: status,
        vaciarCarrito: vaciarCarrito,
        llenarCarrito: llenarCarrito,
        sumarItems: sumarItems,
        idCompra: idCompra,
        asignarNombre: asignarNombre,
        asignarEmail: asignarEmail
    }

    return (
        <Provider value={valorContexto}>
            {children}
        </Provider>)
}

export default AppProvider