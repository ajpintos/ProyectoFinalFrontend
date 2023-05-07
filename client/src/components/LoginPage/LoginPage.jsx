import React, { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './LoginPage.module.css';
import Footer from '../Footer/Footer.jsx';
import NavBar from "../NavBar/NavBar.jsx";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
// import axios from "axios";

import { useDispatch } from 'react-redux';
import { userLogin } from '../../Redux/actions/actionsUserLogin.js';

function LoginPage(){

    const dispatch = useDispatch();

    //! Estado local para guardar los datos del formulario
    const [form, setForm] = useState({
       email: "",
        password: "",
    })

    const submitHandler = (event) => {
        event.preventDefault();
        // axios.post("/users/login", form)
        //     .then(res => alert("Login successfully!"))
        //     .catch(err => alert(err))
        dispatch(userLogin(form));
    }

    const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    //! Elimina id delay de la validación
    setForm({...form, [property]: value});
}

return (<>
        <NavBar/>
        <div className={styles.formContainer}>
            <Form onSubmit={submitHandler}>
                <h2>Login</h2>
                <Row className="mb-3">
                    <Form.Group as={Col} controlidemail="Email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="Enter email" id="email" name="email"
                            value={form.email}
                            onChange={changeHandler}
                        />
                    </Form.Group>
                    <br/>

                    <Form.Group as={Col} controlidpassword="Password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Enter Password" 
                            id="password" 
                            name="password"
                            value={form.password}
                            onChange={changeHandler}
                        />
                    </Form.Group>
                </Row>
                <br/>
                <Button variant="success" type="submit">Login</Button>
            </Form>
            <Link to={"/register"}>Register Now</Link>
        </div>

        <Footer/>
    </>)
}
export default LoginPage;
