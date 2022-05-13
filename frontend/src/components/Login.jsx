import React, { useState, useEffect} from 'react';
import {Button} from 'react-bootstrap'
import getRedirectUrl from '../utils/generateUrl';

const Login = () => {

    const spotify_auth_url = "http://127.0.0.1:5000/api/authorize"

    const  handleSpotifyAuth = () =>  window.location.href = spotify_auth_url

    const handleClick = e => {
        e.preventDefault()

        if (window.location !== window.parent.location) {
            const loginWindow = window.open(spotify_auth_url)
            window.addEventListener('message', e => {
                if (e.data.type !== 'react-spotify-auth' || !e.data.accessToken) {
                    return
                }

                loginWindow.close()
            }, false)
        } else {
            window.location = spotify_auth_url
        }
    }


    return (
        <>
        <button className="spotify-green spotify-btn" onClick={handleSpotifyAuth}>
            <i className="fa-brands fa-spotify">
                &nbsp;<span>Log in with Spotify</span>
            </i>
        </button>
        <button className="spotify-green spotify-btn" onClick={e => handleClick(e)}>
            <i className="fa-brands fa-spotify">
                &nbsp;<span>Try to login with Spotify</span>
            </i>
        </button>
        </>
    );
}

export default Login;