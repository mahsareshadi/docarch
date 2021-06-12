import React, { useState } from "react";
import "./css/login.css";
import axios from 'axios';
import { Link } from 'react-router-dom';






function LoginForm({ setUserinfo }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    function login() {
        axios
            .post("http://localhost:5000/login",
                {
                    username: username,
                    password: password,
                })
            .then((response) => {
                if (response !== null) {
                    setUserinfo(response.data[0]);
                    // console.log(response);

                }
            });
    }

    return (
        <>
            <div id="border" >
                <h1 id="login-h1">Login</h1>
                <form id="form-style">
                    <input className="login-input" type="text" placeholder="Username"
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                    />
                    <input className="login-input" type="password" placeholder="Password"
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                    />
                    <Link to='/inbox'>
                        <button type="submit" id="btn" onClick={login}>Login</button>
                    </Link>
                </form>


            </div>
        </>
    )
}
export default LoginForm;