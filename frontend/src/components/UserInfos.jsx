import React, { useState, useEffect } from 'react';


const UserInfos = ({spotify}) => {

    const [me, setMe] = useState({})
    const infosToDisplay = ["country", "display_name", "email"]

    useEffect(() => {
        spotify.getMe().then(user => {
            setMe(user)
        })
    }, []);

    return (
        <ul>
            {infosToDisplay.map(info => {
                return <li key={info}><b>{info} :</b> {me[info]}</li>
            })}
        </ul>
    )
}
export default UserInfos;