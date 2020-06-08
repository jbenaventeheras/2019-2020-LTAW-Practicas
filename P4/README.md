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
   websocket, la cual se encargará de establecer la conexión con pertinente apetron de manos, podemos ver en las herramientas para programadores del navegador como en la cabecera de respuesta del servidor se indica, conecction upgrade 
