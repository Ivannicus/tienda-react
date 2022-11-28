import { db } from "./firebase"
import { collection, getDocs, query, where, getDoc, doc, addDoc} from "firebase/firestore";

const productosCollection = collection(db, "productos")

export const obtenerItems = (id = "") => {
    if (id == "") {
        const consulta = getDocs(productosCollection)
        return consulta
    } else {
        const filtro = query(productosCollection, where("categoria", "==", id))
        const consulta = getDocs(filtro);
        return consulta
    }
}

export const obtenerItemUnico = (id) => {
    const referencia = doc(productosCollection, id)
    const consulta = getDoc(referencia)
    return consulta
}

const pedidosCollection = collection(db, "pedidos")

export const añadirPedido = (pedido) => {
    const orden = addDoc(pedidosCollection, pedido);
    return (
    orden
    .then((res)=> res.id))
}

export const traerID = () => {
    const id = doc()
}