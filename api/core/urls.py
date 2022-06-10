from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from users.views import UserViewSet
from tracks.views import TrackViewSet

router = routers.SimpleRouter()
router.register('users', UserViewSet, basename='users')
router.register('tracks', TrackViewSet, basename='tracks')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/', include(router.urls))
]