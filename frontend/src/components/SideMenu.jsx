import React, { useState} from 'react';
import { Button } from 'react-bootstrap';


const SideMenu = () => {
    const [route, setRoute] = useState("/");

    // const menuItems = [
    //     "Upload a file",
    //     "Analyse a playlist",
    //     "Analyse an audio stream"
    // ]

    const menuItems = [
        {
            key: "Upload a file",
            value: upper
        },
        {
            key: "Analyse a playlist",
            value: upper
        },
        {
            key: "Analyse an audio stream",
            value: upper
        }
    ]
    const upper = str => str.toUpperCase()

    const menuItems_0 = {
        "Upload a file": upper,
        "Analyse a playlist": "upper",
        "Analyse an audio stream": "test"
    }

    const handleClick = (e, idx) => {
        e.preventDefault()
        // setRoute(item)
        console.log(key)
        console.log(e.target)
        console.log(menuItems[idx].value(menuItems[idx].key))


    }

    return (
        <div className="spotify-green container">
            <img src='coffee_spotify.ico'/>
            {/* {Object.entries(menuItems).map(([key, value], idx) => {
                return <Button key={key} onClick={e => handleClick(idx)}>{value}</Button>
            })} */}

        </div>
    );
}
export default SideMenu;