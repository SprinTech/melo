import React, { useEffect } from 'react';
import { Card, Button } from 'react-bootstrap'
import SpotifyPlayer from 'react-spotify-web-playback';


const UserPlaylists = ({spotifyApi, token}) => {

    // spotifyApi.play({
    //     playerInstance: player,
    //     spotify_uri: 'spotify:track:7xGfFoTpQ2E7fRF5lN10tr',
    // })

    useEffect(() => {
        spotifyApi.setAccessToken(token)
        // SpotifyWebApi.getNewReleases().then(release => console.log(release))
        // spotifyApi.searchTracks("artist:nosferatu+track:when angels cries",  {limit: 5})
        //     .then(({tracks}) => console.log(tracks))
        // spotifyApi.getAudioFeaturesForTracks(['6CrF67AtRcd6hb7G3jIozp'])
        //     .then((data) => {
        //         console.log(data);
        //     }, function(err) {
        //         done(err);
        //     });
    }, [token]);


    // const playlists = spotify.getUserPlaylists()
    // spotifyApi.getPlaylist('4vHIKV7j4QcZwgzGQcZg1x')
    //     .then(function(data) {
    //         console.log('User playlist', data);
    //     }, function(err) {
    //         console.error(err);
    //     });
    return (
        <>
        <h1>My playlists</h1>
        {/* <SpotifyPlayer
            token={token}
            uris={['spotify:track:7xGfFoTpQ2E7fRF5lN10tr']}
            autoPlay play
        />; */}
        {/* {playlists.map(playlist => {
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{playlist.title}</Card.Title>
                    <Card.Text>
                    {playlist.description}
                    </Card.Text>
                    <Button variant="primary">Do something</Button>
                </Card.Body>
            </Card>
        })} */}
        </>
    )
}
export default UserPlaylists;