# Proyecto E-Commerce React - CoderHouse

## 1. Documentación de la APP
### 1.1 Información general del proyecto y del autor

#### Información del proyecto
Este proyecto es la conclusión del curso de React JS, el tercer curso de la carrera de Full Stack impartida por CoderHouse. Fueron 14 clases a lo largo de más de 2 meses en las cuales se impartieron los conocimientos que se reflejan en el presente proyecto.

#### Información del autor
Mi nombre es Iván Gutiérrez, soy Ingeniero Civil Industrial de la Pontificia Universidad Católica de Chile, hace poco más de 6 meses empecé esta carrera en CoderHouse con el fin de adquirir mayor conocimiento en el área de la programación dado que siempre llamó mi atención

### 1.2 Instalación

#### Hacer un proyecto similar desde 0
Este proyecto fue hecho en base a la librería create-react-app, la cual es una más dentro de node. Por lo que para replicar un proyecto de estas características el primer paso será descargar e instalar Node.js en el ordenador local, se puede obtener a partir del siguiente link (https://nodejs.org/en/), es recomendable instalar la versión LTS.

Luego, a través de la línea de comandos de la terminal de tu preferencia, introducir la siguiente línea de código:
`npx create-react-app my-app`

Puedes reemplazar el "my-app" por el nombre que gustes darle a tu proyecto. De esta manera se generarán todos los archivos base necesarios para el proyecto.

#### Clonar el proyecto
Si lo que estás buscando es tener el proyecto tal y como se muestra, para luego poder modificarlo, el primer paso será clonar el repositorio:
`git clone https://github.com/Ivannicus/tienda-react.git`
Una vez hecho eso, ya tendrás una versión propia de este repositorio, la cual podrás modificar a tu gusto y conveniencia. Para entender mejor la función de cada componente, te sugiero ver el siguiente punto (3. Uso y Componentes)

### 1.3 Uso y Componentes

#### Componentes del proyecto
La lógica de la página web, es descrita a partir de la siguiente imágen:

![image](https://i.ibb.co/qD71j07/Diagrama-Logico.png)

El detalle de cada componente y su función a continuación:
* App: Es el componente por default que engloba a toda la aplicación.
* AppProvider: Segundo componente que engloba a todos menos a App, en él se crea el contexto, de modo que pueda ser utilizado por todos los componentes hijos.
* BrowserRouter: No es un componente en sí (dado que está en el contenido de App), sin embargo, es el que se utiliza para poder hacer el ruteo entre los distintos componentes hijos de la aplicación.
* NavBar: Componente utilizado para dibujar el header, conteniendo el título de la tienda y el link respectivo a cada una de las categorías.
* CartWidget: Componente hijo de NavBar utilizado para mostrar gráficamente el acceso al carrito de compras y la cantidad de items que este contiene.
* Main: Componente utilizado solamente para tener un mejor orden de los contenidos, en él están las rutas a todas las páginas a las que es posible acceder.
* ItemListContainer: Componente utilizado para obtener todos los items que se venden en la página (ocupa funciones del archivo Productos.js)
* ItemList: Presentacional del ItemListContainer, se encarga de mapear todos los Items llamando al componente con el mismo nombre.
* Item: Componente que dibuja de manera individual a cada uno de los items de la página.
* ItemDetailContainer: Componente utilizado para obtener un item específico basado en su ID.
* ItemDetail: Presentacional de ItemDetailContainer, dibuja el producto que se obtuvo.
* ItemCount: Componente hijo de ItemDetail, que permite elegir la cantidad de productos que el usuario desea adicional al carrito.
* CartList: Componente que obtiene todos los productos que se añadieron al carrito (los toma desde el contexto) y los mapea para que se rendericen en pantalla. Da la opción al usuario de comprar los productos.
* Cart: Componente que dibuja de manera indidual cada componente del carrito, y además calcula el total de los productos seleccionados.
* CheckOut: Componente con el formulario que se utiliza para obtener los datos del cliente que está realizando la compra (nombre y email), da las opciones al usuario de volver al carrito o bien confirmar la compra.
* CheckoutConfirmation: Componente que dibuja la página cuando el usuario ya confirmó y le entrega el ID asociado a la compra.
* firebase: Archivo js que se utiliza para conectarse a la base de datos utilizada por este proyecto, la cual es FireStore de FireBase, y generar la variable (db) que permite obtener productos de ella.
* Productos: Archivo js que toma la variable (db) y exporta funciones ocupando los distintos métodos de firebase para obtener los productos (utilizadas por ItemListContainer e ItemDetailContainer) y también para almacenar las ordenes (Utilizada por Checkout)

Adicionalmente están los archivos:

* estilos.css: Utilizado para maquetear y dar estilo a la página web.
* favicon.ico: Archivo reemplazado para tener un favicon asociado a la tienda mostrada en la página web.

Los archivos: index.html, logo192.png, logo512.png, manifest.json, robots.txt, index.js, .gitignore, package-lock.json y package.json. No fueron modificados y son los que vienen por defecto al utilizar `create-react-app`

### 1.4 Tecnologías utilizadas
Esta página se construyó principalmente en base a:
1. HTML: Lenguaje de marcado utilizado para la construcción de la página web
2. CSS: Lenguaje de maqueteado utilizado para definir y crear el estilo de la página web (por elección personal, no utilicé ninguna librería como Bootstrap)
3. JavaScript: Lenguaje de programación utilizado para crear las funcionalidades implementadas en la página web.
4. React JS: Librería de JavaScript en la que se basó el desarrollo del proyecto.

Además se utilizaron las siguientes librerías:
1. react-router-dom: Librería utilizada para generar el router que permite la navegación entre los distintos componentes de una página web (Documentación en: https://reactrouter.com/en/main)

### 1.5 Créditos
En esta sección me gustaría reconocer en primer lugar al profesor Horacio Gutiérrez, por todo el conocimiento entregado y la manera didáctica en la que realizó sus clases. En segunda instancia a la plataforma CoderHouse, por ofrecer una manera atractiva y conveniente de aprender estas tecnologías y por último a StackOverFlow por resolver muchas de las dudas que tuve mientras realizaba este proyecto.

## 2. Deploy
Se realizó un deploy de la página web en Vercel, es posible encontrarlo en el siguiente link:
https://tienda-react-six.vercel.app/

También otro deploy en Netlify:
https://sage-pasca-4d4cf4.netlify.app/

Además, en el siguiente video se muestra un ejemplo end-to-end del funcionamiento de la página web:
https://www.youtube.com/watch?v=OsS8mNPVNXA