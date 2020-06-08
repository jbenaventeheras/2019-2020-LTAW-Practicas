//-- Cargar las dependencias
//-- Modulo express
const express = require('express')

//-- Crear una nueva aplciacion web
const app = express()

//-- Crear un servidor. Los mensajes recibidos
//-- los gestiona la app
const http = require('http').Server(app);

//-- Biblioteca socket.io en el lado del servidor
const io = require('socket.io')(http);

//-- Puerto donde lanzar el servidor
const PORT = 8080

var num_users = 0;
var hoy = new Date();
var dia = hoy.getDate();
var mes = hoy.getMonth()+1;
var an = hoy.getFullYear();

//-- Lanzar servidor
http.listen(PORT, function(){
  console.log('Servidor lanzado en puerto ' + PORT);
});

//-------- PUNTOS DE ENTRADA DE LA APLICACION WEB
//-- Página principal
app.get('/', (req, res) => {
  let path = __dirname + '/chat_p4.html';
  res.sendFile(path);
  console.log("Acceso a " + path);
});

//-- caso de haber css
app.get('/chat.css', (req, res) => {
  res.sendFile(__dirname + '/chat.css');
  console.log("/chat.css")
});

//-- El resto de peticiones se interpretan como
//-- ficheros estáticos
app.use('/', express.static(__dirname +'/'));

//------ COMUNICACION POR WEBSOCKETS
//-- Evento: Nueva conexion recibida
//-- Un nuevo cliente se ha conectado!
io.on('connection', function(socket){

  //-- Usuario conectado. Imprimir el identificador de su socket
  console.log('--> Usuario conectado!. Socket id: ' + socket.id );
  num_users += 1;
  //-- Le damos la bienvenida a través del evento 'hello'
  //-- ESte evento lo hemos creado nosotros para nuestro chat
  socket.emit('hello', "Welcome StarWars chat you are user number: " + num_users);
  io.emit('msg', "Conectado usuario numero: " + num_users);

  //-- Función de retrollamada de mensaje recibido del cliente
  socket.on('msg', (msg) => {
    console.log("Cliente: " + socket.id + ': ' + msg);

    //-- Enviar el mensaje a TODOS los clientes que estén conectados
    io.emit('msg', msg);
  })

////////////Gestion de comandos//////////////

  socket.on('cmd', (msg) => {
    console.log("Cliente: " + socket.id + ': ' + msg);
    if (msg == "/list"){
      socket.emit('hello', "numero usuarios: " + num_users);
    }else if (msg == "/help"){
      socket.emit('hello', "/help-- ayuda, /list-- Numero usuarios, Date-- fecha Hello-- mensaje servidor");
    }else if (msg == "/hello"){
      socket.emit('hello', "Hola soy tu servidor " );
    }else if ("/date"){
      socket.emit('hello',  dia+'/'+mes+'/'+an );
    }

    //-- Enviar el mensaje a TODOS los clientes que estén conectados
    //io.emit('msg', msg);
  })
  //-- Usuario desconectado. Imprimir el identificador de su socket
  socket.on('disconnect', function(){
    num_users -= 1;
    console.log('--> Usuario Desconectado. Socket id: ' + socket.id);
    io.emit('msg', "usario desconectado");

  });

});
