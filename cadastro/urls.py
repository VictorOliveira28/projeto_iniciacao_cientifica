from django.urls import path
from app_cadastro import views

urlpatterns = [
    path('', views.home, name="home"),
    path('usuarios/', views.usuarios, name="lista_usuarios"),
    path('usuarios/editar/<int:id_usuario>/', views.editar_usuario, name="editar_usuario"), 
    path('usuarios/deletar/<int:id_usuario>/', views.deletar_usuario, name="deletar_usuario"),   
]
