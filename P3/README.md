# Práctica 3 Node.js Javier Benavente Heras

Enunciado Práctica 3
El objetivo de la práctica es familiarizarse con tres formas de interacción entre un cliente y un servidor: Formularios, cookies y peticiones AJAX. Con ellos implementaremos tres nuevas características a nuestro servidor web tienda de la práctica 1: Formulario de compra, carrito de la compra y búsqueda con autocompletado

Carrito de la compra: Para tener carrito de la compra, el usuario deberá registrarse primero en la tienda. Para ello pinchará en el enlace en ingresar y el servidor creará una cookie con un identificador de usuario conocido (En una tienda real sería un valor generado aleatoriamente). En cada producto habrá un botón de añadir al carrito, que hará que el servidor añada el producto a otra cookie. Al apretar el botón de comprar, el servidor leerá los productos a comprar de la cookie, y los mostrará como respuesta

Formulario de compra: Al pinchar en el enlace de comprar, además de lo anterior, el servidor enviará un formulario donde el usuario deberá rellenar los datos para formalizar la compra: Nombre, Apellidos, Correo Electrónico y Método de pago (paypal, tarjeta de crédito, transferencia bancaria). El servidor recibe esta información y debe crear una página de respuesta, mostrando los datos recibidos

Búsqueda con autocompletado: La tienda tendrá una caja de búsqueda, para buscar información sobre un producto. Al escribir 3 ó más caracteres, aparecerá un menú desplegable con las opciones posibles. Al apretar el botón de buscar se enviará esta inforamción, y el servidor devolverá una página con información sobre el producto

---------------------------------------------------------------------------------------------------------------------------------------

Navegar en terminal hasta carpeta /web-page-p3  y ejecutar node.js

Estaremos ahora en la página principal donde con los siguientes elementos pedidos en el enunciado

CARRITO COMPRA(cookies)

1.-Accedemos a la producto que queramos comprar cualquiera de las cuatro naves.

2.-El carrito se crea sobre una cookie generada al acceder al path de compra cuando se pulsa el botón comprar, el servidor,
   comprueba que existe una cookie-registro, tambien podemos registrarnos antes de comprar en registro:

      · Cookie-registro existe, añade el producto o bien creado la cookie si no existia, o añadiendo a la cookie ya existente
        el producto con una coma delante, y redirige a formulario para rellenar los datos del comprador.

      · Cookie-registro no existe, redirige hacia pagina de registro.

3.-Leer datos cookie carrito, podemos ver en todo momento que tenemos en el carrito pulsando el boton Ver, este es un submit
   de formulario enviado mediante POST el servidor al recibirlo leera la cookie carrito y generá una respuesta con los elementos
   que contenga añadiendolo a un html y envidole este como respuesta al cliente.


FORMULARIO COMPRA

1-. Tras realizar darle al boton de comprar y acceder al path de compra si se tiene cookie-registro generamos la cookie
    corrito o añadimos a cookie carrito, envia a cliente formulariocompra.html donde esta el formulario para añadir los
    datos del comprador,
2-. Una vez introducidos y tras hacer submit eston se envían al servidor mediante POST.

3-. Servidor los lee y genera un html de respuesta incluyendolos para que cliente los visualize.



BUSQUEDA ESTATICA / BUSQUEDA DINAMICA.

1.-Busqueda dinámica, cuando escribimos texto en la barra de busqueda,

   Lado cliente abre una peticion AJAX, craendo un new XMLHttpRequest(), open con el metodo get y la url del servidor
   en este caso es local, al ser GET incluye en la URL los parametros al servidor, configurado el call back m.onreadystatechange para
   cuando se entre en el state ==4 y la respuesta sea 200 OK, por ultimo send() envia la peticion AJAX.
   Recibe respuesta en callback onreadystatechange y convierte mediante parse y finalmente retoca DOM sin recargar pagina para mostrar el resultado.

   Lado servidor Recibe una petición AJAX, filtrando por el path /myquery, saca los parametros de la URL ya que venía mediante GET,
   y busca sobre un array que contiene nuestros productos y los convierte a JSON con JSON.stringify, configura cabecera como
   application/json y envia la respuesta AJAX al cliente pasando el state así a fase 4.

2-.Busqueda Estática

  Enviamos mediate un formulario metodo GET lo que vamos a buscar en el servidor, el servidor compara si es un articulo de los que tenemos y si es así responde con una hmtl, donde le añadimos información sobre el producto.
