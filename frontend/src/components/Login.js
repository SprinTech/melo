import React, { useState, useEffect } from 'react';
import {Button} from 'react-bootstrap';


const Login = () => {
    const [res, setRes] = useState({})

    const handleClick = () => {

    }
    return (
        <>
        <Button onClick={handleClick}><a href=""></a>
            Login to Spotify
        </Button>
        {res && console.log(res)}
        </>
        );
}

export default Login;