import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import './Signup.css'
import { useNavigate} from "react-router-dom"

function Signup() {
    const [username, setUsername] = useState("");
    const Navigate = useNavigate();
    const [validated,setValidated] =useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);

        if (form.checkValidity() === true) {
            Navigate("/Registration",{state: { username}});
        }
    };


    return (
        <><div className="signupbg"></div>
            <div className="signup-formbox">
                <div className="secondary-signup-formbox">
            <Form onSubmit={handleSubmit} noValidate validated={validated} className="signup-form">
                <Form.Label className="signup-form-header"> Sign In</Form.Label>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <InputGroup hasValidation>
                        <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                        <Form.Control
                        type="text"
                        placeholder="Username"
                        aria-describedby="inputGroupPrepend"
                        required

                        value={username}
                        onChange={(e) => setUsername(e.target.value)}

                        />
                        <Form.Control.Feedback type="invalid">
                            Please choose a username.
                        </Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="password" required />
                    <Form.Control.Feedback type="invalid">
                            Please enter the password.
                        </Form.Control.Feedback>
                </Form.Group>
                <div className="signup-button-box">
                <Button variant="primary" type="submit" className="signup-button ml-auto">
                Sign Up
                </Button>
                </div>
            </Form>
            </div>
            </div>
        </>
    );
}

export default Signup;