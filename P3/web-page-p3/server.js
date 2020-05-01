const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path')
const PUERTO = 8080;
const LOCALIP = '192.168.1.37';
var express = require('express')


//-- Configurar el servidor
http.createServer((req, res) => {



  console.log("----------> Peticion recibida")
  let q = url.parse(req.url, true);
  console.log("Recurso solicitado (URL): " + req.url)
  console.log("Host: " + q.host)
  console.log("pathname:" + q.pathname)

  //-- Leer las cookies
  const cookie = req.headers.cookie;
  console.log("Cookie: " + cookie);

  // Leemos el index para URL vacía
    var filename = ""
    if (q.pathname == "/")
      filename += "./index.html";
    else {
      filename = q.pathname;
      filename = "." + filename
    }

    type = filename.split(".")[2]


    console.log("Filename: " + filename);
    console.log("Type: " + type);

    var mime = "text/html"
    fs.readFile(filename, (err, data) => {

    if (err) {
        res.writeHead(404, {'Content-Type': mime});
        return res.end("404 Not Found " + q.pathname );
    }
    var mime = "text/html"

    if (type == "html"){
        console.log("Cargar HTML")
        mime = "text/html";
        res.writeHead(200, {'Content-Type': mime});

    }else if(['png', 'jpg', 'jpeg', 'ico'].includes(type)){
      console.log("Cargar Imagen")
      mime = "image/" + type;
      res.writeHead(200, {'Content-Type': mime});

    }else if (type == "css"  ||  type== 'stylesheet'){
      console.log("Cargar CSS")
      mime = "text/css";
      res.writeHead(200, {'Content-Type': mime});

    }


    res.write(data);
    res.end();
    console.log('____________END REQUEST____________\n');

    //gestion errores

  });

}).listen(PUERTO);

console.log("Servidor corriendo...")
console.log("Puerto: " + PUERTO)
