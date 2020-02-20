from django.urls import path

# -- Importar todas las vistas de mi_tienda
from . import views

# -- Aquí se definen las URLs de nuestra tienda
# -- Metemos de momento sólo la principal (índice)

# -- Cada vez que se reciba el recurso "" en mi tienda, se llamará a la función
# --index() definida en views.py. Además se le signa la etiqueta "index" (name)
# --para que podamos referenciar esta vista desdenuestras plantillas .

urlpatterns = [
    # -- Vista pricipal (índice)
    path('', views.index, name='index'),
    #-- URL de la nueva vista test1:
    path('test1/', views.test1, name='test1'),
    #-- URL de la nueva vista test2:
    path('test2/', views.test2, name='test2'),
]
