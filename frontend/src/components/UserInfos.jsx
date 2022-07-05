import React, { useState, useEffect } from 'react';
import useLocalStorageState from 'use-local-storage-state'

// [x] api call -> get user infos

const UserInfos = () => {

    const _me = JSON.parse(localStorage.getItem('me'))

    const [me, setMe] = useLocalStorageState('me', _me)
    const infosToDisplay = ["country", "display_name", "email"]

    const getMe = () => {
        const token = localStorage.getItem("access_token") ?? getCookie("access_token")
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
    }

    useEffect(() => {
        getMe()
    }, [me]);

    return (
        <ul>
            {_me !== null && infosToDisplay.map(info => {
                return <li key={info}><b>{info} :</b> {me[info]}</li>
            })}
        </ul>
    )
}
export default UserInfos;