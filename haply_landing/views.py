import os
import smtplib
from django.conf import settings
from django.shortcuts import render

# The landing page 
def index(request):
	return render(request, 'index.html')

# To view the simulation
def simulation(request):
	return render(request, 'ball-test.html')

# To view our brochure
def resources(request):
	return render(request, 'resources.html')

# To view the startup fair demo
def life_aquatic(request):
	return render(request, 'life-aquatic.html')

# To view the ripple test effect
def ripple_test(request):
	return render(request, 'test.html')

def poc(request):
  return render(request, 'poc.html')

def ball(request):
  return render(request, 'ball.html')

def kit(request):
  return render(request, 'kit.html')

