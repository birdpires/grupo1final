from django.shortcuts import render


# Create your views here.
def empresa (request):
    return render(request,'empresa.html')

#função para abrir a pagina principal
def index (request):
   return render(request,'index.html')

#função para abrir a pagina login
def informe (request):
    return render(request,'informe.html')
   
  
def individuo (request):
    return render(request,'individuo.html')


