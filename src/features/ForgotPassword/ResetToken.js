import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getResetToken } from '../../services/auth/auth';
import './style.css';

const ResetToken = () => {
    const dispatch = useDispatch();
    const[email, setEmail] = useState('');
    const handleSubmit = () => {
        getResetToken(email, dispatch);
    }
    return (
        <div className="forgotPassowordContainer">
            <h3>Forgot you password?</h3>
            <p>Enter the email associated with your account and we’ll send you instructions to reset your password.</p>
            <label>
                <span>Email address</span>
                <input className="inputField" type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
            </label>
            <div className="signupButtonContainer">
                <button className="signupButton" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}

export default ResetToken;