import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';

import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "../components/GlobalStyle";

import SpotifyWepApi from 'spotify-web-api-js';

import getTokenFromUrl from '../utils/getToken';
import generateCookies, { getCookie, resetCookies } from '../utils/cookies';

import { lightTheme, darkTheme } from "../components/Themes"
import Login from '../components/SpotifyLogin';
import Navigation from '../components/Navigation';
import Dashboard from '../components/Dashboard';
import SideMenu from '../components/SideMenu';

let spotifyApi = new SpotifyWepApi();

const Home = () => {

    const [token, setToken] = useState("")
    const [isLinked, setIsLinked] = useState(false)

    const [theme, setTheme] = useState('light');
    const handleThemeToggle = () => theme === 'light' ? setTheme('dark') : setTheme('light')
    const ThemeToggler = () => <Button className='spotify-green' onClick={handleThemeToggle}>Switch Theme</Button>

    useEffect(() => {
        // check if we were already connected to spotify
        if ( document.cookie && getCookie("access_token")) {
            const _access_token = getCookie("access_token")
                setToken(_access_token)
                setIsLinked(true)
        } else {
            // create cookies and store tokens
            const _access_token = getTokenFromUrl().access_token
            if (_access_token) {
                setToken(_access_token)
                setIsLinked(true)
                generateCookies()

                // clean the adress bar
                history.replaceState(null, document.getElementsByTagName("title")[0].innerHTML, window.location.pathname)
            }
        }
        if (token) {
            spotifyApi.setAccessToken(token)
            // spotifyApi.getNewReleases().then(release => console.log("release", release))
        }
    }, [document.cookie, token]); // dependencies : re-run only when this value change

    // spotifyApi.setAccessToken(token)
    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles/>
                <div className='App'>
                    <Navigation isLinked={isLinked} ThemeToggler={ThemeToggler} theme={theme}/>
                    <Container>
                        <Row>
                            <Col md={4}>
                                <SideMenu />
                            </Col>
                            <Col md={8}>
                                {/* <Main/> */}
                                <img src='https://dummyimage.com/600x300.gif' alt=''/>
                            </Col>
                        </Row>

                        { isLinked ? <Dashboard spotifyApi={spotifyApi} token={token}/> : <Login />}
                        { isLinked && <Button
                                className="spotify-btn fa-brands fa-name"
                                variant="danger"
                                onClick={() => resetCookies(setIsLinked)}>
                            Reset cookies
                        </Button>}
                    </Container>
                </div>
        </ThemeProvider>
    );
}

export default Home