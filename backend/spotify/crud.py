# def get_user_informations(session):
#     """
#     Return Spotify songname
#     """
#     url = 'https://api.spotify.com/v1/me'
#     payload = make_get_request(session, url)

#     if payload is None:
#         return None

#     return payload

# def get_song_playlist(session, limit=10):
#     """
#     Connect to song playlist in Spotify and 
#     """
#     url = 'https://api.spotify.com/v1/me/playlists'

#     offset = 0
#     playlist_id = []
    
#     total = 1
#     while total > offset:
#         params = {'limit': limit, 'offset': offset}
#         payload = make_get_request(session, url, params)
        
#         if payload is None:
#             return None
        
#         for item in payload['items']:
#             playlist_id.append(item['id'])

#         total = payload['total']
#         offset += limit

#     return payload

# def get_song_songs(playlist_id, session, limit=10):
#     """
#     Connect to song playlist in Spotify and 
#     """
#     url = f"https://api.spotify.com/v1/playlists/{playlist_id}/tracks"
    
#     offset = 0
#     song_preview = []
    
#     total = 1
    
#     while total > offset:
#         params = {'limit': limit, 'offset': offset}
#         payload = make_get_request(session, url, params)
        
#         if payload is None:
#             return None
        
#         for item in payload['items']:
#             if item['track']['preview_url'] is not None:
#                 song_preview.append(item['track']['preview_url'])

#         total = payload['total']
#         offset += limit
        
#     return song_preview