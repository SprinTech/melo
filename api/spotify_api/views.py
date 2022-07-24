import os
from requests import post, Request
from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import redirect
import spotipy
from spotipy.oauth2 import SpotifyOAuth
from .models import SpotifyToken
from datetime import timedelta
from django.utils import timezone

from .utils import (
    update_or_create_user_tokens,
    is_spotify_authenticated,
    execute_spotify_api_request
)

from .permissions import HasSpotifyToken
from dotenv import load_dotenv
load_dotenv()


REDIRECT_URI = os.getenv('SPOTIPY_REDIRECT_URI')
CLIENT_ID = os.getenv('SPOTIPY_CLIENT_ID')
CLIENT_SECRET = os.getenv('SPOTIPY_CLIENT_SECRET')

def login(request):
    scope = "user-library-read"

    sp = spotipy.Spotify(auth_manager=SpotifyOAuth(scope=scope))

    results = sp.current_user_saved_tracks()
    for idx, item in enumerate(results['items']):
        track = item['track']
        print(idx, track['artists'][0]['name'], " – ", track['name'])

# class AuthURL(APIView):
#     def get(self, request, fornat=None):
#         scopes = 'user-read-private user-read-email'

#         url = Request('GET', 'https://accounts.spotify.com/authorize', params={
#             'scope': scopes,
#             'response_type': 'code',
#             'redirect_uri': REDIRECT_URI,
#             'client_id': CLIENT_ID
#         }).prepare().url
#         return redirect(url)


# def spotify_callback(request):
#     code = request.GET.get('code')
#     error = request.GET.get('error')

#     response = post('https://accounts.spotify.com/api/token', data={
#         'grant_type': 'authorization_code',
#         'code': code,
#         'redirect_uri': REDIRECT_URI,
#         'client_id': CLIENT_ID,
#         'client_secret': CLIENT_SECRET
#     }).json()

#     access_token = response.get('access_token')
#     token_type = response.get('token_type')
#     refresh_token = response.get('refresh_token')
#     expires_in = response.get('expires_in')
#     expiration_date = timezone.now() + timedelta(seconds=expires_in)

#     error = response.get('error')

#     if not request.session.exists(request.session.session_key):
#         request.session.create()
#     update_or_create_user_tokens(
#         request.session.session_key, access_token, token_type, expires_in, refresh_token)
    # SpotifyToken(
    #     access_token=access_token,
    #     refresh_token=refresh_token,
    #     expires_in=expiration_date,
    #     token_type=token_type)
    # url = 'http://127.0.0.1:8080'
    # return redirect(url)

class CurrentUser(APIView):
    # permission_classes = (HasSpotifyToken, )

    def get(self, request, *args, **kwargs):
        token = request.headers["AccessToken"]
        response = execute_spotify_api_request(token, 'me')
        return Response(response)

class UserPlaylist(APIView):
    # permission_classes = (HasSpotifyToken, )

    def get(self, request, *args, **kwargs):
        token = self.request.session.session_key
        response = execute_spotify_api_request(token, 'me/playlists')
        return Response(response)