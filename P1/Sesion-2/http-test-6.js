const http = require('http');
const PUERTO = 8080

//-- Configurar el servidor
http.createServer( (req, res) => {
  console.log("---> Peticion recibida")
  console.log("Recurso solicitado (URL): " + req.url)
  if (req.url == "/hola"){
    //puerta trasera ya que al solicitar esa url, ejecutamos lo que queramos
    //dentro la funcion en este caso es simplemente un console.log
    console.log("hakeado por 2");
  }
}).listen(PUERTO);

console.log("Servidor corriendo...")
console.log("Puerto: " + PUERTO)

//puerta trasera para cuando solicitamos la req.url /hola.
// auditores de codigo se encargan de que no halla este tipo de elemenotos
// ventaja trabajar en codigo libre ya que mas ojos miran
// pedir siempre el codigo de alto nivel, ya que del binario es mucho
// mas dificil localizarlo
