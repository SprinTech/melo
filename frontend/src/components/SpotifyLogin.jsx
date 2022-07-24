import React from 'react';
import {Button, Row} from 'react-bootstrap';

const Login = () => {

    const spotify_auth_url = "http://127.0.0.1:8000/api/authorize/"

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
        <Row>
        <Button className="spotify-green spotify-btn" onClick={e => handleClick(e)}>
            <i className="fa-brands fa-spotify">
                &nbsp;<span>Login with Spotify</span>
            </i>
        </Button>
        </Row>
    );
}

export default Login;