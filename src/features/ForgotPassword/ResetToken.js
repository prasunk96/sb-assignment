import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getResetToken } from '../../services/auth/auth';
import './style.css';
import Input from '../../components/Input';
import Button from '../../components/Button';

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
            <Input label="Enter you password" type="email" placeholder="Enter your email" onInputChange={setEmail} />
            <div className="signupButtonContainer">
                <Button label="Submit" type="secondary" onClick={handleSubmit} />
            </div>
        </div>
    )
}

export default ResetToken;