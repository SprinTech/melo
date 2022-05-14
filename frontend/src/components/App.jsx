import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import NavBarComponent from './Navigation';
import Dashboard from './Dashboard';
import SideMenu from './SideMenu';
import Login from './Login';
import { Col, Container, Row, Button } from 'react-bootstrap';
import SpotifyWepApi from 'spotify-web-api-js';
import getTokenFromUrl from '../utils/getToken';
import generateCookies, { getCookie, resetCookies } from '../utils/cookies';
// import generateCookies from '../utils/generateCookies';
// import resetCookies from "../utils/resetCookies"

const spotify = new SpotifyWepApi();

const App = () => {

    const [spotifyToken, setSpotifyToken] = useState("")

    const [isLogged, setIsLogged] = useState(false)
    const [me, setMe] = useState({})


    console.log(document.cookie)
    useEffect(() => {
        if (document.cookie) {
            const _access_token = getCookie("access_token")
                setSpotifyToken(_access_token)
                setIsLogged(true)
        } else {
            const _access_token = getTokenFromUrl().access_token
            if (_access_token) {
                setSpotifyToken(_access_token)
                setIsLogged(true)
                generateCookies()

                // clean the adress bar
                history.replaceState(null, document.getElementsByTagName("title")[0].innerHTML, window.location.pathname)
            }
        }
    }, [spotifyToken]);

    spotify.setAccessToken(spotifyToken)

    return (
        <div>
            <NavBarComponent isLogged={isLogged}/>
            {/* {document.cookie.split(';').map((k, v) => <p>{k} : {v}</p>)} */}
            <Container>
                <Row>
                    <Col md={4}>
                        <SideMenu />
                    </Col>
                    <Col md={8}>
                        <h2>Titre droite</h2>
                        <p>Repellat earum harum laborum alias repudiandae ab ullam est, vitae esse? Minima, sequi illo saepe dolore suscipit, mollitia praesentium aspernatur vel officiis consequatur voluptatibus hic modi perspiciatis. Ipsum, quidem obcaecati.</p>
                        <p>Reiciendis, deserunt modi. Dolorem voluptas dolore rem odit nemo tempora impedit porro optio eligendi. Ratione praesentium perspiciatis quae. Ullam cum perferendis sequi? Possimus cupiditate aut magnam incidunt quia fugit soluta.</p>
                        <p>Unde, corporis in deleniti, harum placeat, quaerat ipsam accusantium qui nostrum nemo eveniet? Sequi magnam sunt rem commodi consequatur nam quibusdam corrupti impedit esse, id repudiandae autem hic pariatur soluta!</p>
                    </Col>
                </Row>

                { isLogged ? <Dashboard spotify={spotify}/> : <Login />}
                { isLogged && <Button className="spotify-btn fa-brands fa-name" variant="danger" onClick={() => resetCookies(setIsLogged)}>Reset cookies</Button>}
            </Container>
            {/* {test && Object.entries(test).map(([k, v]) => {
                return (
                    <span>{k} : {v}</span>
                )
            })} */}
        </div>
    );
}

export default App