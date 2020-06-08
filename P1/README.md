# Práctica 1 nodeJS JAVIER BENAVENTE HERAS

Construir un servidor web usando Node.js, que sirva las páginas de la web de una tienda. Las páginas serán estáticas (en HTML), y consistirán en textos e imágenes, compartiendo una hoja de estilo. La tienda debe tener al menos 3 productos



El servidor es un programa, escrito en node.js (javascript). Recibe peticiones de los clientes, que tiene que atender. Debe detectar qué es lo que pide el cliente, acceder al sistema de ficheros local, localizar el recurso pedido y devolverlo. Si se accede a un recursos no existente deberá generar una respuesta de error.
Para devolver el recurso solicitado tendrás que acceder al sistema de ficheros, leer los ficheros pedidos y meterlos en el mensaje de respuesta. 

---------------------------------------------------------------------------------------------------------------------------------

Terminal en carpeta web-page y ejecutar node server.js, cliente conectar a http://localhost:8080/

·El servidor va atendiendo las peticiones que le requiere el cliente, para la primera asocia el indel pat "/", tenemos en un array,
 los diferentes types admitidos en caso de necesitar una nuevo añadir donde corresponda; formato_imagenes  formato_texto formato_video
 formato_audio.

·Sacamos el nombre del fichero y type del path, y lo leemos en caso de no existir el fichero devolverá 404 error como indica el enunciado,  
 en caso  de que si exista filtramos por type para texto, imagenes, video, audio, configurando segun esto el MIME para la cabecera
 content-type de respuesta con res.writeHead(200, {'Content-Type': mime});, y enviamos el fichero o recurso leido por fs en data con res.write(data);
