import React, { useEffect, useState } from 'react';
import { Card, Button, Container } from 'react-bootstrap'
import SpotifyWepApi from 'spotify-web-api-js';


const UserPlaylists = ({ spotifyApi, token }) => {
    const [playlists, setPlaylists] = useState([])
    // spotifyApi.play({
    //     playerInstance: player,
    //     spotify_uri: 'spotify:track:7xGfFoTpQ2E7fRF5lN10tr',
    // })

    const getPlaylists = limit => {
        spotifyApi.getUserPlaylists({limit : limit})
        .then(data => {
            setPlaylists(data.items)
        }, err => {
            console.error(err);
        });
    }

    useEffect(() => {
        getPlaylists(5)
    //     console.log(spotifyApi.getAccessToken())
    //     spotifyApi.setAccessToken(token)
    //     spotifyApi.getNewReleases().then(release => console.log(release))
        // spotifyApi.searchTracks("artist:nosferatu+track:when angels cries",  {limit: 5})
    //         .then(({tracks}) => console.log(tracks))
    //     spotifyApi.getAudioFeaturesForTracks(['6CrF67AtRcd6hb7G3jIozp'])
    //         .then((data) => {
    //             console.log(data);
    //         }, function(err) {
    //             done(err);
    //         });

    }, []);

    // spotifyApi.setAccessToken(token)
    // spotifyApi.getUserPlaylists()
    //     .then(function(data) {
    //         console.log('User playlists', data);
    //         setPlaylists(data)
    //     }, function(err) {
    //         console.error(err);
    //     });
    // spotifyApi.getPlaylist('3eZ6EeVIsQ80csuVzuKHKi')
    //     .then(function(data) {
    //         console.log('User playlist', data);
    //     }, function(err) {
    //         console.error(err);
    //     });

    const cardStyle = {
        width: '18rem',
        display: "inline-block",
        margin: "0 10px",

    }

    return (
        <>
        <h1>My playlists</h1>
        <Container fluid>
        {playlists && playlists.map((playlist, idx) => {
            return (
                <Card className="playlist-card" key={idx} style={cardStyle}>
                    <Card.Img variant="top" src={playlist.images[0].url} />
                    <Card.Body>
                        <Card.Title>{playlist.name}</Card.Title>
                        <Card.Text>
                            <a href={playlist.tracks.href} />
                        </Card.Text>
                        <Button variant="primary">Do something</Button>
                    </Card.Body>
                </Card>
            )
        })}
        </Container>
        </>
    )
}
export default UserPlaylists;