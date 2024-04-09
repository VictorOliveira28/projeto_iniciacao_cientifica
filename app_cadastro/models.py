from django.db import models

class Usuario(models.Model):
    id_usuario = models.AutoField(primary_key=True)
    nome = models.TextField(max_length=255)
    email = models.EmailField(max_length=255, unique=True)
    telefone = models.CharField(max_length=20)
    cep = models.CharField(max_length=11)
    rua = models.CharField(max_length=80)
    bairro = models.CharField(max_length=80)
    cidade = models.CharField(max_length=80)
    uf = models.CharField(max_length=2)
    numero = models.CharField(max_length=13)