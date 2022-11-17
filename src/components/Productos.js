
const productos = [
    { "id": 1, "nombre": "Cartera Rombos", "categoria": "carteras", "precio": 18000, "url": "https://i.postimg.cc/gJkV00Qq/Cartera-Cuadros-Celestes.jpg", "descripcion": "Amplia cartera azul con bellos rombos celestes" },
    { "id": 2, "nombre": "Cartera Oscura", "categoria": "carteras", "precio": 16000, "url": "https://i.postimg.cc/0jhDZ0Qc/Cartera-Cuadros-Jeans.jpg", "descripcion" : "Cartera con distintos tonos de jeans en cuadros y bolsillo frontal"},
    { "id": 3, "nombre": "Cartera Flores", "categoria": "carteras", "precio": 16000, "url": "https://i.postimg.cc/0jz7pB8z/Cartera-Flores.jpg", "descripcion" : "Cartera de jeans con correa y detalles de flores en cuero" },
    { "id": 4, "nombre": "Cartera Gato", "categoria": "carteras", "precio": 15000, "url": "https://i.postimg.cc/Yqm10ZnV/Cartera-Gato.jpg", "descripcion" : "Bella cartera con la figura de un gato rojo"},
    { "id": 5, "nombre": "Cartera Jeans", "categoria": "carteras", "precio": 16000, "url": "https://i.postimg.cc/GmwvyK6p/Cartera-Jeans.jpg", "descripcion" : "Original diseño con mezcla de texturas de jeans" },
    { "id": 6, "nombre": "Cartera Redonda", "categoria": "carteras", "precio": 17000, "url": "https://i.postimg.cc/qBFsk4Ly/Cartera-Redonda.jpg", "descripcion" : "Cartera redondeada con correas de cuero y amplio espacio interior"},
    { "id": 7, "nombre": "Monedero Diseños", "categoria": "monederos", "precio": 4000, "url": "https://i.postimg.cc/k5wSLmGV/Chauchero-Colorido.jpg", "descripcion" : "Original monedero con rombos con diseños" },
    { "id": 8, "nombre": "Monedero Oscuro", "categoria": "monederos", "precio": 4000, "url": "https://i.postimg.cc/fbMXHLzn/Chauchero-Oscuro.jpg", "descripcion" : "Clasico monedero con tela de jeans oscuro" },
    { "id": 9, "nombre": "Monedero Rombos", "categoria": "monederos", "precio": 4000, "url": "https://i.postimg.cc/yddRHb3L/Chauchero-Rombos.jpg", "descripcion" : "Bello monedero con rombos en 2 tonalidades" },
    { "id": 10, "nombre": "Pack Monederos", "categoria": "monederos", "precio": 6500, "url": "https://i.postimg.cc/nM89qVRW/Chaucheros-pack.jpg", "descripcion" : "Pack de 2 monederos pequeños en tela de jeans" },
    { "id": 11, "nombre": "Cojin Mezclilla x2", "categoria": "ropadecama", "precio": 12000, "url": "https://i.postimg.cc/rmPrFNSM/Cojin-Mezclilla.jpg", "descripcion" : "Pack de bellos cojines en tela de jeans oscuros"},
    { "id": 12, "nombre": "Cojin Ajedrez x2", "categoria": "ropadecama", "precio": 12000, "url": "https://i.postimg.cc/PJv8Lv4Z/Cojines-Ajedrez.jpg", "descripcion" : "Pack de cojines estilo ajedrez"},
    { "id": 13, "nombre": "Delantal Canguro", "categoria": "delantales", "precio": 12500, "url": "https://i.postimg.cc/PfC6b6Vb/Delantal-Bolsillo-Canguro.jpg", "descripcion" : "Delantal de mezclilla con amplio bolsillo frontal" },
    { "id": 14, "nombre": "Delantal Correa 1", "categoria": "delantales", "precio": 12500, "url": "https://i.postimg.cc/02mcFzsb/Delantal-bolsillo-superior.jpg", "descripcion" : "Delantal de mezclilla con bolsillo superior y correa" },
    { "id": 15, "nombre": "Delantal Correa 2", "categoria": "delantales", "precio": 12500, "url": "https://i.postimg.cc/05hVVphT/Delantal-Bolsillo-Superior-Cinturon.jpg", "descripcion": "Delantal de mezclilla con correa, bolsillo superior y bordes coloridos"},
    { "id": 16, "nombre": "Delantal Bolsillos 1", "categoria": "delantales", "precio": 12500, "url": "https://i.postimg.cc/QdJSNvVD/Delantal-Bolsillos-Inferiores-Blancos.jpg", "descripcion" : "Bello delantal con 2 bolsillos frontales de borde blanco" },
    { "id": 17, "nombre": "Delantal Bolsillos 2", "categoria": "delantales", "precio": 12500, "url": "https://i.postimg.cc/DzCgLsqY/Delantal-Bolsillos-Rojos-Inferiores.jpg", "descripcion" : "Bello delantal con 2 bolsillos frontales de borde rojo" },
    { "id": 18, "nombre": "Delantal Bolsillos 3", "categoria": "delantales", "precio": 12500, "url": "https://i.postimg.cc/bvYgZL2t/Delantal-Claro-Bolsillos-Inferiores.jpg", "descripcion" : "Bello delantal con 2 bolsillos frontales de borde cuadrillé" },
    { "id": 19, "nombre": "Delantal Bolsillos 4", "categoria": "delantales", "precio": 12500, "url": "https://i.postimg.cc/fLpfgNqc/Delantal-Floreado-Bolsillos-Inferiores.jpg", "descripcion" : "Bello delantal con 2 bolsillos frontales y uno superior floreado" },
    { "id": 20, "nombre": "Pisapies y Cojines", "categoria": "ropadecama", "precio": 24000, "url": "https://i.postimg.cc/j5LhX5cq/Pisapies-cama-y-cojines.jpg", "descripcion" : "Pack para cama de 2 plazas, pisapes y cojines con bello diseño" }
]

export const obtenerItems = () => {
    let pedido = new Promise((res) => {
        setTimeout(() => {
            res(productos)
        }, 2000)
    })
    return pedido
}

export const obtenerItemsFiltrados = (id) => {
    let pedidoFiltrado = new Promise((res) => {
        setTimeout(() => {
            res(productos.filter(item=> item.categoria == id))
        }, 2000)
    })
    return pedidoFiltrado
}

export const obtenerItemUnico = (id) => {
    let itemFiltrado = new Promise((res) => {
        setTimeout(() => {
            res(productos.filter(item=>item.id == id))
        }, 2000)
    })
    return itemFiltrado
}

