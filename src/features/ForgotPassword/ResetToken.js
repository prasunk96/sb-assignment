import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getResetToken } from '../../services/auth/auth';

const ResetToken = () => {
    const dispatch = useDispatch();
    const[email, setEmail] = useState('');
    const handleSubmit = () => {
        getResetToken(email, dispatch);
    }
    return (
        <div>
            <h3>Forgot you password?</h3>
            <p>Enter the email associated with your account and we’ll send you instructions to reset your password.</p>
            <label>
                <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
            </label>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default ResetToken;