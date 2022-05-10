import React from 'react';
import {Button} from 'react-bootstrap';

const Login = () => {

    return (
        <>
            <a href={`${process.env.AUTH_ENDPOINT}?client_id=${process.env.CLIENT_ID}&redirect_uri=${process.env.REDIRECT_URI}&response_type=${process.env.RESPONSE_TYPE}`}>LIEN</a>        <Button>
            Login to Spotify
        </Button>
        </>
        );
}

export default Login;