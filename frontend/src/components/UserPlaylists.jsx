import React from 'react';


const UserPlaylists = ({spotify}) => {
    // const playlists = spotify.getUserPlaylists()
    return (
        <>
        <h1>My playlists</h1>
        <ul>
            <li className="item1">placeholder for playlist1</li>
            <li className="item2">placeholder for playlist2</li>
            <li className="item3">placeholder for playlist3</li>
            <li className="item4">placeholder for playlist4</li>
            <li className="item5">placeholder for playlist5</li>
        </ul>
        </>
        // <ul>
        //     {playlists.map(item => {
        //         return <li key={info}><b>{info} :</b> {playlist[item]}</li>
        //     })}
        // </ul>
    )
}
export default UserPlaylists;