const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path')
const PUERTO = 8080;
const LOCALIP = '192.168.1.37';
var express = require('express')
var favicon = require('serve-favicon')

var app = express()
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

//-- Configurar el servidor
http.createServer((req, res) => {



  console.log("----------> Peticion recibida")
  let q = url.parse(req.url, true);
  console.log("Recurso:" + q.pathname)


  // creating generic index
    var filename = ""
    if (q.pathname == "/")
      filename += "/index.html";
    else {
      filename = q.pathname;
    }

    type = filename.split(".")[1]
    filename = "." + filename

    console.log("Filename: " + filename);
    console.log("Type: " + type);

    var mime = "text/html"
    fs.readFile(filename, (err, data) => {
      if (err) {
        res.writeHead(404, {'Content-Type': mime});
        return res.end("404 Not Found " + q.pathname +
                       ' but we will create it.');
      }

  // default mime type
    var mime = "text/html"
  // for images
    if (['png', 'jpg'].includes(type)) {
      console.log("LOADING IMAGE")
      mime = "image/" + type;
    }
  // for css
    if (type == "css"){
      mime = "text/css";
    }

    res.writeHead(200, {'Content-Type': mime});
    res.write(data);
    res.end();
    console.log('____________END REQUEST____________\n');
  });

}).listen(PUERTO);

console.log("Servidor corriendo...")
console.log("Puerto: " + PUERTO)
