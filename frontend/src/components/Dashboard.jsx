import React, { useState, useEffect } from 'react';
import { Row } from 'react-bootstrap';
import UserInfos from './UserInfos';
import SpotifyWepApi from 'spotify-web-api-js';



// [ ] api call -> user's stats
// [ ] dataviz stats




let spotifyApi = new SpotifyWepApi();

const Dashboard = ({ token }) => {


    return (
        <Row className="spotify-green">
            <h1 className="display-1">Dashboard</h1>
            <UserInfos spotifyApi={spotifyApi} token={token}/>
        </Row>
    );
}
export default Dashboard;