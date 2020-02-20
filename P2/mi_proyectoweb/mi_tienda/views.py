from django.shortcuts import render
# Create your views here.

# -- Fichero mi_tienda/views.py
from django.http import HttpResponse


from random import randint
from django.template import Template, Context

# -- Vista principal de mi tienda
# -- El nombre de la vista puede ser cualquiera. Nosotros lo hemos
# -- llamado index, pero se podría haber llamado pepito
def index(request):
    return HttpResponse("Hola! esta es la página INDEX (INDICE)")


#-- Generar la página desde cero, a partir de código HTML que tenemos en una
 #--cadena. En los lugares que nos interese introducimos la información que queramos

 #--El mensaje de respuesta lo construimos nosotros a partir de código HTML
 #--empotrado en cadenas. Generamos una cadena con el párrafo con el número aleatorio
 #--y lo añadimos a la cadena original. Creamos otra cadena para completar el código HTML.

def test1(request):

    # -- Obtener el número aleatorio
    numero = randint(0, 100)

    # Párrafo a insertar
    P = "<p>Numero aleatorio: " + str(numero) + " </p>"

    PAGINA_INI = """
    <!DOCTYPE html>
    <html lang="es" dir="ltr">
      <head>
        <meta charset="utf-8">
        <title>Test1</title>
      </head>
      <body>
        <h1>TEST1</h1>
    """

    PAGINA_FIN = """
      </body>
    </html>
    """
    return HttpResponse(PAGINA_INI + P + PAGINA_FIN)
     #--Y enviamos el mensaje de respuesta con el método HttpResponse

# -- Ejemplo de generacion mediante una plantilla en el código
def test2(request):

    # -- Obtener el número aleatorio
    numero = randint(0, 100)

    PLANTILLA = """
    <!DOCTYPE html>
    <html lang="es" dir="ltr">
      <head>
        <meta charset="utf-8">
        <title>Test2</title>
      </head>
      <body>
        <h1>TEST2</h1>
        <p> Numero aleatorio:  {{numero}} </p>
      </body>
    </html>
    """

    # --Procesar la plantilla
    t = Template(PLANTILLA)

    # -- Crear el contexto: Asignar el numero
    c = Context({'numero': str(numero)})

    # -- Obtener la pagina html final
    html = t.render(c)

    return HttpResponse(html)
