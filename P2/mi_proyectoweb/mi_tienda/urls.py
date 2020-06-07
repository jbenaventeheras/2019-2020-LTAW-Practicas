from django.urls import path
# --Mapeo por patterns con las views
# --posibilidad de pasar datos por url
# -- Importar todas las vistas de mi_tienda
from .import views

# -- Aquí se definen las URLs de nuestra tienda
# -- Metemos de momento sólo la principal (índice)

# -- Cada vez que se reciba el recurso "" en mi tienda, se llamará a la función
# -- index() definida en views.py. Además se le signa la etiqueta "index" (name)
# -- para que podamos referenciar esta vista desdenuestras plantillas .
# -- urlpatternsurlpatterns son regular expresions
# -- Vista pricipal (índice)
urlpatterns = [

    path('', views.index, name='index'),
    #-- ejecutamos list cuyo codigo lee los objetos de db y los envia en html
    #-- renderiza con template listado el objeto en db productos
    path('Show_products/', views.Show_products, name='Show_products'),
    path('Show_pedido/', views.Show_pedidos, name='Show_pedido'),
    path('FalconSerie/', views.FalconSerie, name='FalconSerie'),
    path('StarLink/', views.StarLink, name='StarLink'),
    path('SpaceShip/', views.SpaceShip, name='SpaceShip'),

    path('formulario1/', views.formulario1, name='formulario1'),
    #Vista de recepción de datos
    path('recepcion1/', views.recepcion1, name='reception1')


]
