import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';

import { login } from '../../services/auth/auth';
import Input from '../../components/Input';
import Button from '../../components/Button';
import './style.css'
import { useDispatch, useSelector } from 'react-redux';
import { setLoginErrror } from '../../app/actions';

const Login = () => {
    const history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const { loginError } = useSelector(state => state.app);
    useEffect(() => {
        loginError && setShowErrorMessage(true);
    }, [loginError]);
    useEffect(() => {
        dispatch(setLoginErrror(''));
    }, [location])
    const handleFormSubmit = () => {
        setShowErrorMessage(false);
        if(email && password) {
            const loginUserObject = {
                email: email,
                password: password
            }
            login(loginUserObject, history, dispatch);
        }
    }
    return (
        <div className="pagesMainContainer">
            <div className="loginFormCard">
                <h3>Login</h3>
                    <Input required={true} value={email} label="Email address" type="email" placeholder="Enter your email" onInputChange={setEmail} />
                    <Link className="forgotPasswordLink" to="/resetpassword"><span>Forgot your password?</span></Link>
                    <Input required={true} value={password} label="Password" type="password" placeholder="Enter you password" onInputChange={setPassword} />
                    {showErrorMessage && <span className="forgotPasswordLink incorrectErrorMessage">{loginError}</span>}
                <div className="loginButtonContainer">
                    <Button type="secondary" label="Login" onClick={handleFormSubmit} />
                </div>
                <div className="loginFormFooter">
                    <h6>New to MyJobs? <Link to="/signup">Create an account</Link></h6>
                </div>
            </div>
        </div>
    )
}

export default Login;
