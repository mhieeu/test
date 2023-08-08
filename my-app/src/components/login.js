import axios from 'axios';
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    

    function handleSubmit(username, password) {
        axios.defaults.headers.common['ngrok-skip-browser-warning'] = "pass";
        axios.post('https://62c4-2001-ee0-4161-e114-6dc1-9319-16ab-70ea.ngrok-free.app/createuser', {
            username: username,
            password: password
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
            // alert(error.message)
        });
    }

    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="text" placeholder="Enter email" onChange={(e) => setUsername(e.target.value)} value={username} />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={() => handleSubmit(username, password)}>
                Submit
            </Button>
            <h2>{username}</h2>
            <h2>{password}</h2>
        </Form>

    );
};

export default Login;