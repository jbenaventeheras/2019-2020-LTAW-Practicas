const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path')
const PUERTO = 8080;
const LOCALIP = '192.168.1.37';
var express = require('express')

var formato_imagenes = ['png', 'jpg', 'jpeg', 'ico',"gif"];
var formato_texto = ['html','css','plane'];
var formato_video = ['webm','oggs','mp4'];
var formato_audio = ['mpeg','mp3','wav','mpeg3'];


//-- Configurar el servidor
http.createServer((req, res) => {



  console.log("---------- PETICION RECIBIDA -----------------")
  let q = url.parse(req.url, true);
  var filename = '.'+ q.pathname.toString();
  var carrito= ""
  var type = filename.split(".")[2];
  var mime = ""
  console.log("Recurso solicitado (URL): " + req.url);
  console.log("Host: " + q.host);
  console.log("pathname:" + q.pathname);
  console.log("Filename: " + filename);
  console.log("Type: " + type);


    if (q.pathname == "/"){
      filename = "./index.html";

    }

    fs.readFile(filename, (err, data) => {
    if (err) {
        res.writeHead(404, {'Content-Type': mime});
        return res.end("404 Not Found " + q.pathname );
    }

    if (formato_texto.includes(type)){
        console.log("Cargar text/")
        mime = "text/" + type;
        res.writeHead(200, {'Content-Type': mime});

    }else if(formato_imagenes.includes(type)){
      console.log("Cargar image/")
      mime = "image/" + type;
      res.writeHead(200, {'Content-Type': mime});

    }else if(formato_video.includes(type)){
      console.log("Cargar video/")
      mime = "video/" + type;
      res.writeHead(200, {'Content-Type': mime});

    }else if(formato_audio.includes(type)){
      console.log("Cargar audio/")
      mime = "audio/" + type;
      res.writeHead(200, {'Content-Type': mime});

    }


    res.write(data);
    res.end();
    console.log('---------PETICION TERMINADA----------\n');

    //gestion errores

  });

}).listen(PUERTO);

console.log("Servidor corriendo...")
console.log("Puerto: " + PUERTO)
