from django.urls import path

from .views import CurrentUser, UserPlaylist, login

urlpatterns = [
    path('authorize/', login, name="login"),
    # path('callback/', spotify_callback),
    path('me/', CurrentUser.as_view()),
    path('playlist/', UserPlaylist.as_view()),
]