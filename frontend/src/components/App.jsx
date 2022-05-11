import React, { useState } from 'react';
import NavBarComponent from './Navigation';
import Dashboard from './Dashboard';
import SideMenu from './SideMenu';
import Login from './Login';
import { Col, Container, Row, Button } from 'react-bootstrap';



const App = () => {
    const [isLogged, setIsLogged] = useState(false)
    // const [test, setTest] = useState("")
    // const handleOnClick = () => {
    //     fetch('http://localhost:5000/api/v1/')
    //         .then(response => response.json())
    //         .then(data => setTest(data))

    // }
    return (
        <div>
            <NavBarComponent isLogged={isLogged} />
            <Container >
                <Row>
                    <Col md={4}>
                        <SideMenu />
                    </Col>
                    <Col md={8}>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, cumque. Cumque ut voluptatem consequuntur neque. Distinctio amet, architecto magnam consectetur, praesentium reprehenderit explicabo ut, ducimus consequuntur aliquam rerum ratione expedita!</p>
                        <p>Harum, aspernatur distinctio? Quam aperiam est ea consequatur id doloribus, non maiores velit ipsum nam porro molestiae nesciunt dignissimos reprehenderit itaque neque consectetur deserunt dolorem iusto dolore eligendi saepe vero!</p>
                        <p>Repellat earum harum laborum alias repudiandae ab ullam est, vitae esse? Minima, sequi illo saepe dolore suscipit, mollitia praesentium aspernatur vel officiis consequatur voluptatibus hic modi perspiciatis. Ipsum, quidem obcaecati.</p>
                        <p>Reiciendis, deserunt modi. Dolorem voluptas dolore rem odit nemo tempora impedit porro optio eligendi. Ratione praesentium perspiciatis quae. Ullam cum perferendis sequi? Possimus cupiditate aut magnam incidunt quia fugit soluta.</p>
                        <p>Unde, corporis in deleniti, harum placeat, quaerat ipsam accusantium qui nostrum nemo eveniet? Sequi magnam sunt rem commodi consequatur nam quibusdam corrupti impedit esse, id repudiandae autem hic pariatur soluta!</p>
                    </Col>
                </Row>
                {/* <Button onClick={handleOnClick}>Click !!!!</Button> */}
            { !isLogged && <Login />}
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