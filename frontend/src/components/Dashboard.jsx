import React, { useState, useEffect } from 'react';
import UserInfos from './UserInfos';
import UserPlaylists from './UserPlaylists';

const Dashboard = ({spotifyApi, token}) => {
    return (
        <div className="spotify-green">
            <h1 className="display-1">Dashboard</h1>
            <UserInfos spotifyApi={spotifyApi} token={token}/>
            <UserPlaylists spotifyApi={spotifyApi} token={token}/>
        </div>
    );
}
export default Dashboard;