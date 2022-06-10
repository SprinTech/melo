from django.urls import path
from .views import *

urlpatterns = [
    path('authorize/', AuthURL.as_view()),
    path('callback/', spotify_callback),
    path('me/', CurrentUser.as_view()),
    path('playlist/', UserPlaylist.as_view()),
]