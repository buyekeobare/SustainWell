from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ResourceViewSet, MaintenanceLogViewSet

router = DefaultRouter()
router.register('resources', ResourceViewSet)
router.register('logs', MaintenanceLogViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]
