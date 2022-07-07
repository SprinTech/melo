import React from 'react'
import SpotifyWebApi from 'spotify-web-api-js';
import Navigation from '../components/Navigation';
import SideMenu from '../components/SideMenu';
import UserPlaylists from '../components/UserPlaylists'
import { getCookie } from '../utils/cookies';

// [x] api call -> get playlists
// [ ] api call -> get tracklist
// [ ] predictions :
//      [ ] single spotify track
//      [ ] spotify playlist
//      [ ] uploaded file
//      [ ] from soundboard


const Analyze = () => {
    let spotifyApi = new SpotifyWebApi();
    let token = getCookie("access_token")
    spotifyApi.setAccessToken(token)
    return (
        <>
        <SideMenu/>
        <UserPlaylists spotifyApi={spotifyApi} token={token}/>
        </>
    )
}

export default Analyze