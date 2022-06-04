import React, { useState } from 'react'
import { Form, Button, Alert} from 'react-bootstrap'
import { useInputChange } from '../utils/useInputChange';

const LoginApp = ({ setIsLogged }) => {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSignUpForm, setIsSignUpForm] = useState(true)

    const [input, handleInputChange] = useInputChange()
    // const [input, setInput] = useState({})

    // const handleInputChange = (e) => setInput({
    //     ...input,
    //     [e.currentTarget.name]: e.currentTarget.value
    // })

    const handleSubmit = e => {
        e.preventDefault()
        setIsLogged(true)
        // return
        // // TEMP RETURN
        // // Find user login info
        // const userData = database.find((user) => user.username === uname.value);

        // // Compare user info
        // if (userData) {
        //     if (userData.password !== pass.value) {
        //     // Invalid password
        //     setErrorMessages({ name: "password", message: errors.pass });
        //     } else {
        //     setIsSubmitted(true);
        //     }
        // } else {
        //     // Username not found
        //     setErrorMessages({ name: "username", message: errors.uname });
        // }
    }

    const options = {
        login: {
            button: ""
        }
    }

    const errors = {
        username: "Invalid username",
        password: "Invalid password"
    }

    const renderErrorMessage = name => {
        name === errorMessages.name && (
            <Alert variant='danger' className="error">{errorMessages.message}</Alert>
        );
    }

    return (
        <div id='app-login-container' className='spotify-green'>
            {input && console.log(input)}
            <div id="app-login" className='center'>
                <h1>Melomaniac</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" required
                            onChange={handleInputChange}
                            autoComplete="username"
                            name="username"
                            placeholder="Enter username"
                        />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                            {renderErrorMessage("username")}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password" required
                            onChange={handleInputChange}
                            autoComplete="password"
                            name="password"
                            placeholder="Enter Password"
                        />
                        {renderErrorMessage("username")}
                    </Form.Group>
                    <Button type="submit" className='spotify-green' variant="primary" >
                        Log in
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default LoginApp