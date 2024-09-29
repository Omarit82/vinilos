###### ---------------------VINILOS----------------------- ######

Sitio e-Commerce de venta de vinilos y cds e items.

## Tecnologias Utilizadas: 

- [React](https://reactjs.org/) + -[Vite] (https://vitejs.dev)
- [Firebase](https://firebase.google.com/) 

## Librerias Utilizadas: 

bootstrap: 5.3.3
firebase: 10.13.2
sweetalert2: 11.14.1

## Instalación

Para instalar y ejecutar esta aplicación localmente, sigue estos pasos:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/omarit82/vinilos.git

2. Luego ejecuta en la terminal:
   npm install
   (de esta manera se instalarán todas las dependencias necesarias)
3. Luego ejecuta en la terminal:
   npm run dev
   (Para iniciar el servidor de desarrollo)

![image](https://github.com/user-attachments/assets/aee1669b-8d75-4bde-be1a-95bd2d67e4fb)

La terminal te indicara el puerto donde corre el servidor de desarrollo. Puedes visualizarla, ingresando el puerto en el browser o haciendo click + ctrl en el vinculo al puerto
en el caso de la imagen:  http://localhost:5173/

## Descripción

La app permite a un usuario no logueado navegar y ver la informacion de los discos. Pero para realizar una compra se debe estar logueado con un usuario.

La barra de navegacion filtra los discos por ritmo musical o por discos que se encuentren en oferta. La barra de busqueda en el header, filtra onChange los discos por titulo o autor.(ver video adjunto) 

El usuario se autentica desde Firebase, para lo cual se debe tener un mail con un dominio verdadero (@gmail.com, @gmail.com.ar, @hotmail.com..etc) No tiene validacion de dos pasos, donde se envia el mail de verificacion, para poder utilizar un mail inexistente con un dominio verdadero (Las futuras versiones de la app lo implementaran) ej: algo@gmail.com va a ser un mail valido.
La app lleva un control del stock disponible y no permite cargar al carrito un disco del cual no haya stock. (Ver video)
Al ingresar al carrito, se muestra un resumen de el costo total de los discos a comprar, y un detalle de cada disco donde se puede eliminar un disco o todo el carrito.
Al ir al checkout, se muestra una tabla con el resumen final y al realizar la compra. La informacion de la compra es cargada al firestore donde en la compra queda detallado:

* Usuario que realizo la compra
* detalle de los items comprados
* fecha de la compra realizada.
