import React, { useEffect, useState } from 'react';
import { Card, Button, ListGroup } from 'react-bootstrap'
import useLocalStorageState from 'use-local-storage-state';
import fetchRequest from '../utils/request';

const UserPlaylists = () => {
    const _playlists = JSON.parse(localStorage.getItem('playlists'))
    const [playlists, setPlaylists] = useLocalStorageState('playlists', _playlists)


    const getPlaylists = () => {
        fetchRequest('playlist/').then(data => setPlaylists(data.items))
    }


    useEffect(() => {
        playlists ?? getPlaylists()
    }, [playlists]);

    // // TODO call to backend api for fetching tracklists
    // useEffect(() => {
    //     getTracks()
    //         playlists.forEach(playlist => {
    //                 fetch(`/songs/tracks/${playlist}`)
    //                 .then(response => response.json())
    //                 .then(data => {
    //                         const _tracks = [...tracks]
    //                         _tracks.push({playlist: data})
    //                         setTracks(_tracks)
    //                     });
    //                     // empty dependency array means this effect will only run once (like componentDidMount in classes)
    //         }, [playlists]);

    const cardStyle = {
        width: '18rem',
        display: "inline-block"

    }

    return (
        <>
        <h1>My playlists</h1>
        {playlists && playlists.reverse().map((playlist, idx) => {
            return (
                <Card className="playlist-card" key={idx} style={cardStyle}>
                    <Card.Header>{playlist.name}</Card.Header>
                    <Card.Img variant="top" src={playlist.images[0].url} />
                    <Card.Body>
                        <ListGroup variant="flush">
                            <ListGroup.Item>1. artist - track name</ListGroup.Item>
                            <ListGroup.Item>2. artist - track name</ListGroup.Item>
                            <ListGroup.Item>3. artist - track name</ListGroup.Item>
                        </ListGroup>
                            {/* {tracks && tracks.idx.map( track => {
                                // return <p>{track.artists[0].name} - {}track.name</p>
                            })}  */}
                        <Button variant="primary">Do something</Button>
                    </Card.Body>
                </Card>
            )
        })}
        </>
    )
}
export default UserPlaylists;