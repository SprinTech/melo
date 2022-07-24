import React, { useState, useEffect } from 'react';
import useLocalStorageState from 'use-local-storage-state'

// [ ] api call -> get user infos

const UserInfos = ({spotifyApi, token}) => {

    const _me = JSON.parse(localStorage.getItem('me'))
    // const [me, setMe] = useState()
    const [me, setMe] = useLocalStorageState('me', _me)
    const infosToDisplay = ["country", "display_name", "email"]

    // const _getMe = () => {
    //     if (!_me) {
    //         spotifyApi.setAccessToken(token)
    //         spotifyApi.getMe()
    //         .then(user => {
    //             localStorage.setItem('me', JSON.stringify(user))
    //         }, function(err) {
    //             console.error(err.status);
    //             console.error(err.response);
    //         })
    //     } else {
    //         setMe(_me)
    //     }
    // }

    // useEffect(() => {
    //     _getMe()
    // }, []);

    useEffect(() => {
        token = localStorage.getItem("access_token")
        fetch('http://127.0.0.1:8000/api/me/', {
            crossDomain: true,
            method:'GET',
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "AccessToken": token
            },
        })
        .then(response => response.json())
        .then(data => {
            setMe(data)
        });
        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    return (
        <ul>
            {me !== null && infosToDisplay.map(info => {
                return <li key={info}><b>{info} :</b> {me[info]}</li>
            })}
        </ul>
    )
}
export default UserInfos;