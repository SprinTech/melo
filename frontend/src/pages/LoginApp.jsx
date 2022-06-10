import React, { useState } from 'react'
import { Form, Button, Alert, Fade} from 'react-bootstrap'
import Login from '../components/SpotifyLogin';
import { useInputChange } from '../utils/useInputChange';
import C from '../constants/loginApp';

const LoginApp = ({ setIsLogged }) => {
    const [errorMessages, setErrorMessages] = useState({});
    const [logInOrSignUp, setLogInOrSignUp] = useState("login")
    const [open, setOpen] = useState(false);

    const [input, handleInputChange] = useInputChange()
    // const [input, setInput] = useState({})

    // const handleInputChange = (e) => setInput({
    //     ...input,
    //     [e.currentTarget.name]: e.currentTarget.value
    // })


    const handleClick = () => {
        delete input["confirmation"]
        setOpen(!open)
        setLogInOrSignUp(logInOrSignUp === "login" ? "signup" : "login")
    }

    const handleSubmit = e => {
        e.preventDefault()
        setIsLogged(true)
        // TODO authentification handler
        // // Find user login info
        // const userData = database.find((user) => user.username === uname.value);

        // // Compare user info
        // if (userData) {
        //     if (userData.password !== pass.value) {
        //     // Invalid password
        //     setErrorMessages({ name: "password", message: .pass });
        //     } else {
        //     setIsSubmitted(true);
        //     }
        // } else {
        //     // Username not found
        //     setErrorMessages({ name: "username", message: .uname });
        // }
    }


    const renderFormInput = (name, type) => {
        return (
            <Form.Group key={name} className="mb-3" controlId={`form-${name}`}>
                <Form.Label>[{name}]</Form.Label>
                <Form.Control type={type} required
                    onChange={handleInputChange}
                    autoComplete={name}
                    name={name}
                    placeholder={`Enter ${name}`}
                />
                {renderErrorMessage(name)}
            </Form.Group>
        )
    }


    const renderErrorMessage = name => {
        name === errorMessages.name && (
            <Alert variant='danger' className="error">{errorMessages.message}</Alert>
        );
    }

    return (
        <div className='spotify-green reset-container'>
            <h1 className="display-1" style={{ paddingTop:"20px", textAlign:"center" }}>Melomaniac</h1>
            <div id="app-login" className='center'>
                <h1>{C.connectionOptions[logInOrSignUp].text}</h1>

                {logInOrSignUp === "login" && (
                    <>
                        <Login setIsLogged={setIsLogged} />
                        <p className="hr-text"><span>Or</span></p>
                    </>
                )}
                <Form onSubmit={handleSubmit}>
                    <div id="form-container">
                        {C.inputFields
                            .filter(item => item.scope.includes(logInOrSignUp))
                            .map(({name, type}) => renderFormInput(name, type))
                        }
                    </div>
                <Button id="log-submit" type="submit" className='spotify-green' variant="primary" >
                    { C.connectionOptions[logInOrSignUp].text }
                </Button>
                </Form>
                <Button
                    id="switch"
                    aria-controls="confirmation"
                    aria-expanded={open} variant="outline-primary"
                    onClick={handleClick}>{ C.connectionOptions[logInOrSignUp].switch }
                </Button>
            </div>
        </div>
    )
}

export default LoginApp