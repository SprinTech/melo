import React from 'react'

const PlaylistTracks = playlist => {
    const _tracks = JSON.parse(localStorage.getItem('tracks'))
    const [tracks, setTracks] = useLocalStorageState('tracks', _tracks)

    const getTracks = () => {
        fetchRequest('tracks/', {playlistId: playlist}).then(data => setTracks(data))
    }
    return (
        {tracks.map(track => {
            return <p><b>{track.name} :</b> {track.title}</p>
        })}
    )
}

export default PlaylistTracks