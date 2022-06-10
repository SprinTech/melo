from django.urls import path
from .views import *

urlpatterns = [
    path('authorize/', AuthURL.as_view()),
    path('callback/', spotify_callback),
    path('is-authenticated', IsAuthenticated.as_view()),
]