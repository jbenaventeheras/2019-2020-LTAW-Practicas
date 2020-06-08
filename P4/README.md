# Práctica 4 CHAT websocket (nodeJS/exprees/socket.io)

Enunciado

Hacer un chat en el que múltiples usuarios puedan hablar entre sí. Primero hay que lanzar el servidor (hecho con node) al que se conectarán los usuarios. Cada vez que un usuario se conecte el servidor le enviará un mensaje de Bienvenida, y anunciará al resto de participantes que se ha conectado alguien nuevo

La conexión al servidor será a través del navegador. Una vez conectado el servidor devuelve la página html y los ficheros javascript y de estilo necesarios

El servidor, además, responderá a estos comandos:

/help: Mostrará una lista con todos los comandos soportados
/list: Devolverá el número de usuarios conectados
/hello: El servidor nos devolverá el saludo
/date: Nos devolverá la fecha
Cuando el servidor detecta que llega un mensaje que empieza por el carácter '/', lo interpretará como un comando y lo procesará (pero no lo enviará al resto de usuarios del chat). El resto de mensjaes que no sean comandos sí los re-enviará a los participantes del chat.

Para practicar, pensar y asimilar los conceptos te proponemos los siguientes ejercicios:

Contador de usuario: Cada vez que se conecta un usuario nuevo, el contador se incrementa. Al desconectarse se decrementa. El valor del contador se envía a cada nuevo usuario que se conecta, junto al mensaje: "Erer el usuario número xx"

Crea un nuevo evento llamado 'cmd' para transmitir comandos al servidor. Los comandos se distinguen de los mensajes normales en que empiezan por el carácter '/'. Cuando el servidor recibe un comando, hacer que lo muestre en su consola y NO lo reenvía al resto de clientes

Implementar los comandos indicados en el enunciado de la práctica: /help, /date, /list y /hello

------------------------------------------------------------------------------------------------------------------------
 Terminal en la carpeta p4_chat y ejecutar node chatServer_p4.js

 · Para cliente abrir navegador si es en el mismo equipo: http://localhost:8080/, para otro equipo conectado a la misma red IPServidor:8080

 · Lado cliente: abrimos una conexion websocket al servidor con la Biblioteca socket.io llamando a la función io(), esto crea una conexion
   websocket, la cual se encargará de establecer la conexión con pertinente apetron de manos, podemos ver en las herramientas para programadores del navegador como en la cabecera de respuesta del servidor se indica, conecction upgrade como vemos en la captura upgradewebsocket.png, a partir de este momento pasamos al canuto conexion full duplex que nos brinda websocket, pudiendo apartir de este momento tener la iniciativa el servidor dejando atras el protocolo http.

   Tras esto configuramos para la recepcion de dos tipos de mensajes "hello" que utilizaremos para mensajes que vengan directamente del servidor informarnos de cualquier novedad, aunque aqui solo lo estamos utilizando para el mensaje de bienvenida tenemos en cuenta que son mensajes que nos envía directamente el servidor, y mensajes "msg" que son los mensajes.

   Para configurar la emisión de los mensajes, hacemos un swich para detectar / que utilizamos para que el servidor nos envie una respuesta
   con el comando solicitado /help, /date, /list y /hello, como default ponemos mensaje tipo "msg".

   En este caso al utilizar socketio se nos estan configurando los callbacks del cliente onpen onmessage onerror desde este es interesante
   meterse en sus docs para ver como realmente esta funcionando esto por debajo a nivel websocket ya que al estar express por encima no llegamos a ver como se esta programando las definiciones del protocolo que es en si mismo websocket
   https://github.com/socketio/socket.io/tree/master/docs
   Y como vimos en la parte de teoria en el tutorial https://medium.com/@martin.sikora/node-js-websocket-simple-chat-tutorial-2def3a841b61
   en donde explica que en aplicaciones que necesiten más recursos asi como video juegos podría sobrecargarse o aumentar latencia.
   En todo caso y sabiendo como actúa por debajo para posibles fallos, para el chat que buscamos es buena opcion el uso de este modulo.

 · Lado servidor: Configuramos primero el listen para lanzar el servidor en el puerto 8080, después con el module get de xpress decimos
   los recursos que vamos a servir al cliente en este caso sería el html y el css, y use para recursos estaticos.

   Ahora pasamos a configurar la comunicación por websokets para ello distinguimos entre los mensajes tipo "msg" que son mensajes estandar
   que son reenviados a todos los clientes, y los mensajes "cmd" de comandos, que son enviados como tipo "hello" es decir del servidor. aumentamos en 1 cada vez que salte un conection y por ultimo configuramos el disconnect para que reste uno cuando se desconecte algun cliente.
