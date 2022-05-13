import React, { useState, useEffect } from 'react';
import UserInfos from './UserInfos';
import UserPlaylists from './UserPlaylists';

const Dashboard = ({spotify}) => {
    return (
        <div className="spotify-green">
            <h1 className="display-1">Dashboard</h1>
            <UserInfos spotify={spotify}/>
            <UserPlaylists spotify={spotify}/>
        </div>
    );
}
export default Dashboard;