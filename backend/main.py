from fastapi import FastAPI
from fastapi.responses import RedirectResponse
from fastapi.middleware.cors import CORSMiddleware

from users import views as user_views
from songs import views as songs_views
from auth import views as auth_views


tags_metadata = [
    {
        "name": "Spotify",
        "description": "Operations using Spotify API integration",
        "externalDocs": {
            "description": "Spotify external docs",
            "url": "https://developer.spotify.com/documentation/"
        }
    }
]

app = FastAPI(
    title = "Sound recognizer API",
    description = "Melomaniac predict genre of songs submitted by user using Spotify API",
    version = "0.1",
    openapi_tags = tags_metadata
)

origins = [
    "http://localhost:8080",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_views.router, tags=["authentication"], prefix="/api")
app.include_router(songs_views.router, tags=["song"], prefix="/api")
app.include_router(user_views.router, tags=["user"], prefix="/api")

@app.get("/api/")
async def root():
    return {"message": "Hello World !"}

@app.get("/api/logout")
async def logout():
    response = RedirectResponse(url="/api/")
    response.delete_cookie(key="access_token")
    response.delete_cookie(key="refresh_token")
    response.delete_cookie(key="token_expiration")
    return response