# @router.get("/playlist/")
# async def song_playlist(request: Request):
#     access_token = request.cookies.get("access_token")
#     playlist_names = get_song_playlist(access_token)
#     return JSONResponse(playlist_names)


# @router.get("/songs/")
# async def song_songs(request: Request):
#     access_token = request.cookies.get("access_token")

#     # retrieve ids of song playlist
#     playlist_ids = get_song_playlist(access_token)
#     song_list = []

#     for playlist in playlist_ids['items']:
#         id = playlist['id']
#         songs = get_song_songs(id, access_token)
#         song_list.append(songs)

#     # return JSONResponse(song_list)
#     return song_list