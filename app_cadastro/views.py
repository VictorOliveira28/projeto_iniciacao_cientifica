from django.contrib import messages
from django.db import IntegrityError
from django.shortcuts import render, redirect
from app_cadastro.models import Usuario

def home(request):
    return render(request, 'usuarios/home.html')

def usuarios(request):
    
    if request.method == 'POST':
        novo_usuario = Usuario()    
        novo_usuario.nome = request.POST.get('nome')
        novo_usuario.email = request.POST.get('email')
        novo_usuario.telefone = request.POST.get('telefone')    
        novo_usuario.cep = request.POST.get('cep')
        novo_usuario.rua = request.POST.get('rua')
        novo_usuario.bairro = request.POST.get('bairro')
        novo_usuario.cidade = request.POST.get('cidade')
        novo_usuario.uf = request.POST.get('uf')
        novo_usuario.numero = request.POST.get('numero')

        try:
            novo_usuario.save()
        except IntegrityError:                     
            return render(request, 'usuarios/home.html', {'aviso': 'Email já cadastrado'})

        return redirect('lista_usuarios')

    usuarios = {
        'usuarios': Usuario.objects.all()
    }

    return render(request, 'usuarios/usuarios.html', usuarios)

def editar_usuario(request, id_usuario):
    usuario = Usuario.objects.get(id_usuario=id_usuario)
    error_email = None

    if request.method == 'POST':
        usuario.nome = request.POST.get('nome')
        usuario.email = request.POST.get('email')
        usuario.telefone = request.POST.get('telefone')
        usuario.cep = request.POST.get('cep')
        usuario.rua = request.POST.get('rua')
        usuario.bairro = request.POST.get('bairro')
        usuario.cidade = request.POST.get('cidade')
        usuario.uf = request.POST.get('uf')
        usuario.numero = request.POST.get('numero')
        try:            
            usuario.save()
            return redirect('lista_usuarios')
        except IntegrityError:
            error_email = "Falha ao editar usuário. O email já está em uso por outro usuário."

    return render(request, 'usuarios/editar_usuario.html', {'usuario': usuario, 'erro_email': error_email}) 

def deletar_usuario(request, id_usuario):
    usuario = Usuario.objects.get(id_usuario=id_usuario)

    usuario.delete()

    return redirect('lista_usuarios')