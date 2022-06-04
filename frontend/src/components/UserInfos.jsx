import React, { useState, useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

// const spotifyApi = new SpotifyWebApi()

const UserInfos = ({spotifyApi, token}) => {

    const [me, setMe] = useState({})
    const infosToDisplay = ["country", "display_name", "email"]

    useEffect(() => {
        spotifyApi.setAccessToken(token)
        spotifyApi.getMe().then(user => {
            setMe(user)
        }, function(err) {
            console.error(err.status);
            console.error(err.response  );

        })
    }, [spotifyApi]);

    return (
        <ul>
            {infosToDisplay.map(info => {
                return <li key={info}><b>{info} :</b> {me[info]}</li>
            })}
        </ul>
    )
}
export default UserInfos;