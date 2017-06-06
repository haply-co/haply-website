from django.conf.urls import *
from django.contrib import admin
from haply_landing import views

urlpatterns = [
    url(r'^admin/', include(admin.site.urls)),
    
    #url(r'^$', include('haply_landing.urls', namespace='haply_landing')),
    url(r'^$', views.index, name='index'),
    url(r'^simulation/', views.simulation, name='simulation'),
    url(r'^bye/', views.bye, name='bye'),
 
    url(r'^lifeaquatic/', views.life_aquatic, name='life_aquatic'),
    url(r'^ripple/', views.ripple_test, name='ripple_test'),
    url(r'^resources/', views.resources, name='resources'),
    url(r'^kit/', views.kit, name='kit')    
]


   # url(r'^brochure/', views.brochure, name='brochure'),
