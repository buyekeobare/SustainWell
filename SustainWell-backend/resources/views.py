from django.shortcuts import render

# Create your views here.

from rest_framework import viewsets
from .models import Resource, MaintenanceLog
from .serializers import ResourceSerializer, MaintenanceLogSerializer

class ResourceViewSet(viewsets.ModelViewSet):
    queryset = Resource.objects.all()
    serializer_class = ResourceSerializer

class MaintenanceLogViewSet(viewsets.ModelViewSet):
    queryset = MaintenanceLog.objects.all()
    serializer_class = MaintenanceLogSerializer

