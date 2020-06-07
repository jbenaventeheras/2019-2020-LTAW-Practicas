from django.shortcuts import render
# Create your views here.
#-- recibe el request y contruye devuelbe  en string HttpResponse python
# --Dinamico al componerse segun el request
# -- Fichero mi_tienda/views.py
# --plantilla + contexto = respuesta
from django.http import HttpResponse

from random import randint
from django.template import Template, Context
from django.template.loader import get_template

#-- Importamos clase producto para renderizar con la plantilla
from mi_tienda.models import Producto
from mi_tienda.models import Pedido
# -- Vista principal de mi tienda
# -- El nombre de la vista puede ser cualquiera. Nosotros lo hemos
# -- llamado index, pero se podría haber llamado pepito
def index(request):

    numero = randint(0, 100)
    return render(request, 'index.html', {'numero':str(numero)})

def FalconSerie (request):
    return render(request, "FalconSerie.html", {})

def StarLink (request):
    return render(request, "StarLink.html", {})

def SpaceShip (request):
    return render(request, "SpaceShip.html", {})




#-- Generar la página desde cero, a partir de código HTML que tenemos en una
 #--cadena. En los lugares que nos interese introducimos la información que queramos

 #--El mensaje de respuesta lo construimos nosotros a partir de código HTML
 #--empotrado en cadenas. Generamos una cadena con el párrafo con el número aleatorio
 #--y lo añadimos a la cadena original. Creamos otra cadena para completar el código HTML.


#--el codigo que construye una respuesta html con objetos de la db(sql)
def list(request):
    productos = Producto.objects.all()
    html = "<h2>Listado de articulos</h2>"
    for prod in productos:
        print(prod.nombre)
        html += '<p>'+ prod.nombre + ' ' + str(prod.precio) + '<p>'
    return HttpResponse(html)

#--el codigo que construye una respuesta html con objetos de la db(sql)
def list_pedido(request):
    pedido = Pedido.objects.all()
    html = "<h2>Listado Pedidos</h2>"
    for prod in pedido:
        print(prod.nombre)
        html += '<p>'+ prod.nombre + ' ' + str(prod.producto) + '<p>'
    return HttpResponse(html)

#pasamos plantilla y el render lo une con las variables productos,
#ejecutando listado.hmtl, renderiza con template listado el objeto en db productos

def Show_products(request):
    #-- busqueda en db con filtro de python,  cuyo modulo lo traduce leng sql
    #-- Producto.objects.all() devuelve todo en db
    productos = Producto.objects.all()
    return render(request, 'listado.html', {'productos':productos})


#vista que llamaremos formulario1 encargo en tienda,a través plantilla formulario1.hmtl
def formulario1(request):
    return render(request, 'formulario1.html', {})

#Vista de recepción de datos, lee los datos que han llegado del formulario.
#través del método POST, indicando el nombre del campo a leer. En ejemplo "nombre"
#mensaje respuesta con mini-pág web que confirma recibido  datos,y pone nombre recibido


def recepcion1(request):
    # -- Obtener el nombre de la persona
    persona = request.POST['nombre']
    producto = request.POST['producto']
    #--Ahora introducimos nuestro primer artículo invocando al constructor de la clase Pedido.
    #--Esto nos ha creado el objeto pedido, que es nuestro pedido
    pedido = Pedido(nombre=persona , producto=producto)
    # Para grabar el artículo en la base de datos ejecutamos el metodo save():
    pedido.save()
    # -- Imprimirlo en la consola del servidor
    print(f" PEDIDO RECIBIDO!!! ----> {persona}")
    return HttpResponse("Datos recibidos!!. Comprador: " + request.POST['nombre'] + "Producto"  + request.POST['producto'])
