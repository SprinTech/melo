import React from 'react';
import {Button} from 'react-bootstrap'

const Login = () => {

    const spotify_auth_url = "http://127.0.0.1:5000/api/authorize"

    const  handleSpotifyAuth = () =>  window.location.href = spotify_auth_url

    return (
        <button className="spotify-green spotify-btn" onClick={handleSpotifyAuth}>
            <i className="fa-brands fa-spotify">
                &nbsp;<span>Log in with Spotify</span>
            </i>
        </button>
    );
}

export default Login;