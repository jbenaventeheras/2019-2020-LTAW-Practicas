# Práctica 2 Django python Javier benavente Heras.
Enunciado

Crear una tienda usando django. La versión que utilizaremos será la 2.2.10, que es la última estable (LTS), y funciona sobre python3

La tienda al menos debe incluir los siguientes elementos:

Al menos 3 productos diferentes (puede ser la misma tienda que la práctica 1)
El sitio debe generar varias vistas: la general, sólo producto-1, sólo producto-2, sólo producto-3, los resultados de las búsquedas, etc...
Se deben utilizar plantillas para generar los contenidos dinámicos concretos
El cliente debe poder rellenar un formulario para relizar un pedido concreto, que se recibe en el servidor y se inserta en la base de datos
Diseña los modelos de datos y la aplicación de la tienda
Como base de datos usaremos SQLite

Crea el modelo de datos de tus productos y genera una vista para cada uno de ellos, leyendo la información de la base de datos
También haz una vista que liste todos tus productos, añadiendo algunas imágenes y estilo (para que la vista no sea tan cutre).

Para implementar el formulario de pedido tendraś que modificar el modelo de datos para añadir una nueva clase que sea Pedido, que contenga al menos dos campos: El nombre de la persona que hace el pedido y el nombre del artículo solicitudo. En una aplicación real habría más información: dirección de envío, forma de pago, etc... En esta práctica, basta con implementar al menos esos dos campos, y que se inserten en la base de datos
¡¡A por ello!!

------------------------------------------------------------------------------------------------------------------------------

Terminal en carpeta mi_proyectoweb, y ejecutar python3 manage.py runserver

Navegador con URL http://localhost:8000/mi_tienda/ para acceder al index de la mi_tienda

· Tenemos tres vistas más las del index que comparan patrones desde urls.py a las vistas views.py , las cuatro funcionan de un modo dinámico
  Podemos ver las plantillas html de estas en la carpeta templates, para las vista de los tres productos formamos un http response al cliente construida con render y pasandole una plantilla HTML y de contexto le pasamos los productos de la base de datos sacados a una variable python con productos.objects.all() con el precio de los productos y el stock, siendo así las tres dinámicas a cualquier cambio en base de datos.

· El formulario se encuentra en la opcion hacer pedido esto hace que el servidor nos envie un html con etiqueta form que contiene los
  campos de nombre de la persona que hace el pedido y el producto, cuando enviemos el formulario, el sevidor lo leera y generará una respuesta con una plantilla recepcion1.html y pasándole nombre y producto comprado en variables como contexto dinámico confirmando la compra y mostrando el nombre y el producto que hemos enviado.

  Podemos ver el total de los pedidos hechos dandole en ver pedidos que renderiza una respuesta http con la plantilla listado_pedidos.html
  y una variable de contexto con la variable python que contiene lo que hay en la base de datos de los pedidos sacandola con pedidos.objects.all().

  Podemos ver la base de datos de los pedidos en ver pedidos y la base de datos de productos, estos enlaces renderizan un html, al que le pasamos como contexto una variable sacada de la base de datos.

  Si realizamos un pedido con el nombre exacto que con el que contiene el producto en la base de datos lo restará del Stock.

· En cuanto al modelo de datos tenemos la clase producto con nombre, stock y precio. Y la clase pedido con el nombre de la persona y
  el producto que queremos encargar, el lo gestionaremos desde el administrador habiendo creado en este la base de datos y para añadir productos retocar precios y actulizar stock en positivo, el segundo añadira los pedidos a la base de datos, se crea la base de datos cuando se recibe el formulario relleno del cliente, desde el servidor y guardandola con save, tal y como se pedia.

· Para añadir un producto modificarlo lo hacemos desde el path http://localhost:8000/admin/, admin admin para logearse.
