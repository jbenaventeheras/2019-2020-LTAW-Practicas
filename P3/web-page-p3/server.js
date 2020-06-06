const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path')
const PUERTO = 8080;
const LOCALIP = '192.168.1.37';
//ARRAY PARA BUSQUEDA DINAMICA
var productos = ['destroyer', 'tie', 'halcon', 'alax', "destroyer2"];
//Formatos imagen soportados
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

  //-- Leer las cookies
  const cookie = req.headers.cookie;
  console.log("Cookie: " + cookie);

  function getCookie(cookie){

  	if(cookie){
      cookie_array= cookie.split(';');
      for(var i = 0; i <cookie_array.length; i++) {
        //nombre de la cookie
        carrito = (cookie_array[i].split('=')[0])
        console.log(carrito)
        if (carrito == "carrito" ||carrito == " carrito"){
          //valor de la cookie
          producto = (cookie_array[i].split('=')[1])
          return carrito
        }
      }
  	}

  }

  function getCookie_valor(cookie){

  	if(cookie){
      cookie_array= cookie.split(';');
      for(var i = 0; i <cookie_array.length; i++) {
        //nombre de la cookie
        carrito = (cookie_array[i].split('=')[0])
        if (carrito == "carrito" ||carrito == " carrito"){
          //valor de la cookie
          producto = (cookie_array[i].split('=')[1])
          return producto
        }
      }

  	}

  }


//////////GESTION COOKIES REGISTRO Y BUSQUEDA////////////
    if (q.pathname == "/"){
      filename = "./index.html";
      console.log(filename);
      //--para url de compras añadidimos cookie y volvemos a index
    }else if(q.pathname == "/comprardestroyer"){
      filename = "./index.html";
      console.log("comprado destroyer")
      if (getCookie(cookie)=="carrito" ||getCookie(cookie)==" carrito"){
        producto+= ",destroyer"
      }else{
        producto="destroyer"
      }
      res.setHeader('Set-Cookie', 'carrito='+producto)
    }else if(q.pathname == "/compraralax"){
      filename = "./index.html";
      if (getCookie(cookie)=="carrito" ||getCookie(cookie)==" carrito"){
        producto+= ",Ala x"
      }else{
        producto="AlaX"
      }
      res.setHeader('Set-Cookie', 'carrito='+producto)
    }else if(q.pathname == "/comprarhalcon"){
      filename = "./index.html";
      if (getCookie(cookie)=="carrito" ||getCookie(cookie)==" carrito"){
        producto+= ",Halcon"
      }else{
        producto="Halcon"
      }
      res.setHeader('Set-Cookie', 'carrito='+producto)
    }else if(q.pathname == "/comprartie"){
      filename = "./index.html";
      if (getCookie(cookie)=="carrito" ||getCookie(cookie)==" carrito"){
        producto+= ",Tie"
      }else{
        producto="Tie"
      }
      res.setHeader('Set-Cookie', 'carrito='+producto)
      //--botton con path /micarrito envia un post
      //-- hace respuesta con cookies y la inserta en html de respuesta
    }else if(q.pathname == "/mycarrito"){
      if (req.method === 'POST') {
          // Handle post info...
          var valor_cookie = getCookie_valor(cookie)
          if (cookie){
          valor_cookie_array= cookie.split(',');
          for(var i = 0; i <valor_cookie_array.length; i++) {


            }
          }
          console.log(valor_cookie)
          var content = `
          <!DOCTYPE html>
          <html lang="es">
            <head>
              <meta charset="utf-8">
              <title>Carrito</title>
              <link rel="stylesheet" href="index.css">
            </head>
            <div align=center>
            <body>------carrito-----</p>
              <p>Recibido: `
              if (getCookie(cookie)=="carrito" ||getCookie(cookie)==" carrito"){
                content+=valor_cookie.toString();
              }else{
                content+='Carrito vacío';
              }

              content += `
                  </p>
                  <p><a href="/">pagina principal</a></p>
                </body>
              </html>
              `
             //-- Generar el mensaje de respuesta
             res.setHeader('Content-Type', 'text/html')
             res.write(content);
             res.end();

        }


    }else if (q.pathname == "/myquery"){

    const parametros = q.query;
    console.log("Parametros: " + parametros.param1 );
    parametro1 = parametros.param1;
    parametro1 = parametro1.toLowerCase();
    console.log(parametro1);
    mime = "application/json"

    var productos_coincidentes = [];

    for(var i = 0; i <productos.length; i++) {
       var coincide = false;
       for(var j = 0; j <parametro1.length; j++) {
         if (productos[i].charAt(j)== parametro1.charAt(j)) {
           coincide = true;
         }else{
           coincide = false;
         }
         console.log(coincide)
       }
       if (coincide){
         productos_coincidentes.push(productos[i]);
       }
    }


       console.log(productos_coincidentes);
       content = JSON.stringify(productos_coincidentes) + '\n';


      //-- Generar el mensaje de respuesta
      //-- IMPORTANTE! Hay que indicar que se trata de un objeto JSON
      //-- en la cabecera Content-Type
      console.log("Cargar application/json ")
      res.setHeader('Content-Type', 'application/json')
      res.write(content);
      res.end();

    }else if (q.pathname == "/busquedaest"){
      if (req.method === 'GET') {

        parametro = req.url.split('=')[1];
        parametro = parametro.toLowerCase();

        if (parametro == "destroyer"){
          parametro += ": Destructor Estelar clase Imperial I,[20] también conocido \
          como el Destructor clase Imperial I o el Destructor Estelar clase Imperator, \
          era una clase icónica de nave de guerra diseñada por Lira Wessex y construida \
          por Astilleros de Propulsores Kuat.[22][23] Los Destructores Estelares clase Imperial,\
          junto con los soldados de asalto Imperiales, representaban el poder de las Fuerzas Armadas\
          Imperiales en toda la galaxia durante el reinado del Imperio Galáctico."

        }else if(parametro == "tie"){
          parametro += ": El caza estelar TIE/LN, o caza estelar TIE/línea, conocido simplemente\
           como el caza TIE o T/F, era el caza estelar Imperial estándar visto en grandes \
           cantidades durante la mayor parte de la Guerra Civil Galáctica y en adelante. Coloquialmente,\
            los pilotos Rebeldes y de la Nueva República se referían a la nave como globos oculares."

        }else if(parametro == "halcon"){
          parametro += ": El Halcón Milenario, originalmente conocido como YT-1300 492727ZED,\
           era un carguero ligero corelliano YT-1300 utilizado por los contrabandistas Han Solo \
           y Chewbacca durante la Guerra Civil Galáctica. Anteriormente, era propiedad de Landonis\
          Balthazar Calrissian, que perdió contra Solo en un juego de sabacc."

        }else if(parametro == "alax"){
          parametro +=": El caza estelar T-65 Ala-X de Incom era el principal caza \
          estelar multipropósito de la Alianza Rebelde y sus gobiernos sucesores. \
          Conocido por su versatilidad y rendimiento de combate excepcional, fue uno \
          de los favoritos entre los pilotos Rebeles y de la Nueva República. Poseyendo \
          escudos deflectores, un hipermotor, un astromecánico R2 para reparaciones y navegación,\
          y un complemento de torpedos de protones, el Ala-X permitió a la Rebelión lanzar incursiones\
          en el espacio Imperial con mejores probabilidades de éxito."

        }

        var content = `
        <!DOCTYPE html>
        <html lang="es">
          <head>
            <meta charset="utf-8">
            <title>Busqueda estatica</title>
            <link rel="stylesheet" href="index.css">
          </head>
          <div align=center>
          <body>------Busqueda estatica-----</p>
            <p>`

            content += parametro.toString();

              content +=  `</p>
                <a href="/">pagina principal</a>
              </body>
            </html>
            `
            res.setHeader('Content-Type', 'text/html')
            res.write(content);
            res.end();
      }

      //para el resto de paginas que no sean index ni de compra
    }else if (q.pathname == "/registro"){
      if (req.method === 'GET') {

        filename = "./index.html";
        parametro = req.url.split('=')[1];
        res.setHeader('Set-Cookie', 'cookie-registro='+parametro)
      }
    }

    //////////////////////////////////////////////////////////////////////////
    ////////////////////////GESTION DE PETICIONES ESTANDAR////////////////////

  if (q.pathname != "/myquery" 	&& q.pathname != "/busquedaest" && q.pathname != "/mycarrito"){

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
}

}).listen(PUERTO);

console.log("Servidor corriendo...")
console.log("Puerto: " + PUERTO)
