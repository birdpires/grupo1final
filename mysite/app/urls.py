from django.urls import path

from app import views

urlpatterns = [
    path('',views.index) ,
    path('empresa/', views.empresa),
    path('individuo/', views.individuo),
    path('informe/', views.informe),
]