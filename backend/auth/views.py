import os
import sys
import urllib.parse
from fastapi import APIRouter
from fastapi.responses import RedirectResponse, JSONResponse
from dotenv import load_dotenv
from .crud import create_state_key, get_token

sys.path.append("..")
from songs.crud import get_user_information

load_dotenv()


router = APIRouter()

# Import api configs
CLIENT_ID = os.getenv('CLIENT_ID')
CLIENT_SECRET = os.getenv('CLIENT_SECRET')
REDIRECT_URI = os.getenv('REDIRECT_URI')
SCOPE = os.getenv('SCOPE')

@router.get("/authorize/")
def authorize():
    """
    Request authorization from the user to access it's Spotify ressources
    """
    state = create_state_key(16)
    authorization_url = 'https://accounts.spotify.com/authorize?'
    params = {
        'response_type': 'code',
        'client_id': CLIENT_ID,
        'scope': SCOPE,
        'redirect_uri': REDIRECT_URI,
        'state': state
    } 
    encoded_params = urllib.parse.urlencode(params)
    response = RedirectResponse(authorization_url + encoded_params)
    return response

@router.get("/callback/")
async def callback(code: str, state: str):
    client_credential = CLIENT_ID + ':' + CLIENT_SECRET
    payload = get_token(code, state, REDIRECT_URI, client_credential)
    print(payload)
    current_user = get_user_information(payload["access_token"])
    print(current_user)
    json_user =  JSONResponse(current_user)
    
    if payload is not None:
        json_user.set_cookie(key="access_token", value=payload["access_token"])
        json_user.set_cookie(key="refresh_token", value=payload["refresh_token"])
        json_user.set_cookie(key="token_expiration", value=payload["expires_in"])

    json_user.set_cookie(key="access_token", value=payload["access_token"])

    return RedirectResponse("http://localhost:8080")