import React from 'react'
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { login } from '../../services/auth/auth';
import './style.css'

const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleFormSubmit = () => {
        const loginUserObject = {
            email: email,
            password: password
        }
        login(loginUserObject, history);
    }
    return (
        <div className="loginContainer">
            <div className="loginFormCard">
                <h3>Login</h3>
                <label>
                    <div>Email address</div>
                    <input className="inputField" type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)}/>
                </label>
                <label>
                    <div>Password<Link to="/resetpassword"><span>Forgot your password?</span></Link></div>
                    <input className="inputField" type="password" placeholder="Enter you password" onChange={(e) => setPassword(e.target.value)} />
                </label>
                <div className="loginButtonContainer">
                    <button className="loginButton" onClick={handleFormSubmit}>Login</button>
                </div>
                <div className="loginFormFooter">
                    <h6>New to MyJobs? <Link to="/signup">Create an account</Link></h6>
                </div>
            </div>
        </div>
    )
}

export default Login;
