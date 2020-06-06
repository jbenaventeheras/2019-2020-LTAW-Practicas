# Práctica 3 Node.js Javier Benavente Heras

Enunciado Práctica 3
El objetivo de la práctica es familiarizarse con tres formas de interacción entre un cliente y un servidor: Formularios, cookies y peticiones AJAX. Con ellos implementaremos tres nuevas características a nuestro servidor web tienda de la práctica 1: Formulario de compra, carrito de la compra y búsqueda con autocompletado

Carrito de la compra: Para tener carrito de la compra, el usuario deberá registrarse primero en la tienda. Para ello pinchará en el enlace en ingresar y el servidor creará una cookie con un identificador de usuario conocido (En una tienda real sería un valor generado aleatoriamente). En cada producto habrá un botón de añadir al carrito, que hará que el servidor añada el producto a otra cookie. Al apretar el botón de comprar, el servidor leerá los productos a comprar de la cookie, y los mostrará como respuesta

Formulario de compra: Al pinchar en el enlace de comprar, además de lo anterior, el servidor enviará un formulario donde el usuario deberá rellenar los datos para formalizar la compra: Nombre, Apellidos, Correo Electrónico y Método de pago (paypal, tarjeta de crédito, transferencia bancaria). El servidor recibe esta información y debe crear una página de respuesta, mostrando los datos recibidos

Búsqueda con autocompletado: La tienda tendrá una caja de búsqueda, para buscar información sobre un producto. Al escribir 3 ó más caracteres, aparecerá un menú desplegable con las opciones posibles. Al apretar el botón de buscar se enviará esta inforamción, y el servidor devolverá una página con información sobre el producto

---------------------------------------------------------------------------------------------------------------------------------------

Navegar en terminal hasta carpeta /web-page-p3  y ejecutar node.js

Estaremos ahora en la página principal donde con los siguientes elementos pedidos en el enunciado

CARRITO COMPRA

El carrito se crea sobre una cookie generada al acceder al path de compra cuando se pulsa el botón comprar, al a
