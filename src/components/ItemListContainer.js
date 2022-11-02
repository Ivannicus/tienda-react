import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom"

const productos = [
    { "id": 1, "nombre": "Cartera Rombos", "categoria": "carteras", "precio": 18000, "url": "https://i.postimg.cc/gJkV00Qq/Cartera-Cuadros-Celestes.jpg" },
    { "id": 2, "nombre": "Cartera Oscura", "categoria": "carteras", "precio": 16000, "url": "https://i.postimg.cc/0jhDZ0Qc/Cartera-Cuadros-Jeans.jpg" },
    { "id": 3, "nombre": "Cartera Flores", "categoria": "carteras", "precio": 16000, "url": "https://i.postimg.cc/0jz7pB8z/Cartera-Flores.jpg" },
    { "id": 4, "nombre": "Cartera Gato", "categoria": "carteras", "precio": 15000, "url": "https://i.postimg.cc/Yqm10ZnV/Cartera-Gato.jpg" },
    { "id": 5, "nombre": "Cartera Jeans", "categoria": "carteras", "precio": 16000, "url": "https://i.postimg.cc/GmwvyK6p/Cartera-Jeans.jpg" },
    { "id": 6, "nombre": "Cartera Redonda", "categoria": "carteras", "precio": 17000, "url": "https://i.postimg.cc/qBFsk4Ly/Cartera-Redonda.jpg" },
    { "id": 7, "nombre": "Monedero Diseños", "categoria": "monederos", "precio": 4000, "url": "https://i.postimg.cc/k5wSLmGV/Chauchero-Colorido.jpg" },
    { "id": 8, "nombre": "Monedero Oscuro", "categoria": "monederos", "precio": 4000, "url": "https://i.postimg.cc/fbMXHLzn/Chauchero-Oscuro.jpg" },
    { "id": 9, "nombre": "Monedero Rombos", "categoria": "monederos", "precio": 4000, "url": "https://i.postimg.cc/yddRHb3L/Chauchero-Rombos.jpg" },
    { "id": 10, "nombre": "Pack Monederos", "categoria": "monederos", "precio": 6500, "url": "https://i.postimg.cc/nM89qVRW/Chaucheros-pack.jpg" },
    { "id": 11, "nombre": "Cojin Mezclilla x2", "categoria": "ropadecama", "precio": 12000, "url": "https://i.postimg.cc/rmPrFNSM/Cojin-Mezclilla.jpg" },
    { "id": 12, "nombre": "Cojin Ajedrez x2", "categoria": "ropadecama", "precio": 12000, "url": "https://i.postimg.cc/PJv8Lv4Z/Cojines-Ajedrez.jpg" },
    { "id": 13, "nombre": "Delantal Canguro", "categoria": "delantales", "precio": 12500, "url": "https://i.postimg.cc/PfC6b6Vb/Delantal-Bolsillo-Canguro.jpg" },
    { "id": 14, "nombre": "Delantal Correa 1", "categoria": "delantales", "precio": 12500, "url": "https://i.postimg.cc/02mcFzsb/Delantal-bolsillo-superior.jpg" },
    { "id": 15, "nombre": "Delantal Correa 2", "categoria": "delantales", "precio": 12500, "url": "https://i.postimg.cc/05hVVphT/Delantal-Bolsillo-Superior-Cinturon.jpg" },
    { "id": 16, "nombre": "Delantal Bolsillos 1", "categoria": "delantales", "precio": 12500, "url": "https://i.postimg.cc/QdJSNvVD/Delantal-Bolsillos-Inferiores-Blancos.jpg" },
    { "id": 17, "nombre": "Delantal Bolsillos 2", "categoria": "delantales", "precio": 12500, "url": "https://i.postimg.cc/DzCgLsqY/Delantal-Bolsillos-Rojos-Inferiores.jpg" },
    { "id": 18, "nombre": "Delantal Bolsillos 3", "categoria": "delantales", "precio": 12500, "url": "https://i.postimg.cc/bvYgZL2t/Delantal-Claro-Bolsillos-Inferiores.jpg" },
    { "id": 19, "nombre": "Delantal Bolsillos 4", "categoria": "delantales", "precio": 12500, "url": "https://i.postimg.cc/fLpfgNqc/Delantal-Floreado-Bolsillos-Inferiores.jpg" },
    { "id": 20, "nombre": "Pisapies y Cojines", "categoria": "ropadecama", "precio": 24000, "url": "https://i.postimg.cc/j5LhX5cq/Pisapies-cama-y-cojines.jpg" }
]

const ItemListContainer = () => {

    const [items, setItems] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        let pedido = new Promise((res) => {
            setTimeout(() => {
                res(productos)
            }, 2000)
        })

        pedido
            .then((respuesta) => {
                if (!id) {
                    setItems(respuesta)
                }
                else{
                    let pedidoFiltrado = respuesta.filter( el => el.categoria == id);
                    setItems(pedidoFiltrado);
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }, [id])


    return (
        <div class="cardContainer">
            {items.length == 0 ? <h1>Obteniendo productos...</h1> : <ItemList productos={items} />}
        </div>)
}

export default ItemListContainer;