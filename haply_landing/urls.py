from django.conf.urls import patterns, url
from haply_landing import views

urlpatterns = [
	url(r'^$', 'haply_landing.views.index', name='index'),
	url(r'^simulation/', 'haply_landing.views.simulation', name='simulation'),
  url(r'^poc/', 'haply_landing.views.poc', name='poc')
]
