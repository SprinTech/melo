import React, { useState, useEffect } from 'react';
import useLocalStorageState from 'use-local-storage-state'

const UserInfos = ({spotifyApi, token}) => {

    const _me = JSON.parse(localStorage.getItem('me'))
    const [me, setMe] = useLocalStorageState('me', _me)
    const infosToDisplay = ["country", "display_name", "email"]

    const getMe = () => {
        if (!_me) {
            spotifyApi.setAccessToken(token)
            spotifyApi.getMe()
            .then(user => {
                localStorage.setItem('me', JSON.stringify(user))
            }, function(err) {
                console.error(err.status);
                console.error(err.response);
            })
        } else {
            setMe(_me)
        }
    }

    useEffect(() => {
        getMe()
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