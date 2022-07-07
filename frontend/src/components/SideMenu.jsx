import React, { useState} from 'react';
import { Button } from 'react-bootstrap';


const SideMenu = () => {
    const [route, setRoute] = useState("/");

    // const menuItems = [
    //     "Upload a file",
    //     "Analyze a playlist",
    //     "Analyze an audio stream"
    // ]

    const menuItems = [
        {
            key: "Upload a file",
            value: upper
        },
        {
            key: "Analyze a playlist",
            value: upper
        },
        {
            key: "Analyze an audio stream",
            value: upper
        }
    ]
    const upper = str => str.toUpperCase()

    const menuItems_0 = {
        "Upload a file": upper,
        "Analyze a playlist": "upper",
        "Analyze an audio stream": "test"
    }

    const handleClick = (e, idx) => {
        e.preventDefault()
        // setRoute(item)
        console.log(key)
        console.log(e.target)
        console.log(menuItems[idx].value(menuItems[idx].key))


    }

    return (
        <div className="container">
            {Object.entries(menuItems_0).map(([key, value], idx) => {
                return <Button className="spotify-green" style={{margin:"10px"}} key={key} onClick={e => handleClick(idx)}>{key}</Button>
            })}

        </div>
    );
}
export default SideMenu;