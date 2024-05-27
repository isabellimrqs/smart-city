from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def abre_index(request):
    mensagem = "BOM DIAAAAAAAAAAAAAAAAAAA"
    return render('Cad_User_Api_Axios.html', template_name='abre_index')