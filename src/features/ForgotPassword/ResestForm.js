import React, { useState } from 'react';
import { resetPassword } from '../../services/auth/auth';
import { RESET_TOKEN } from '../../constants';

const ResetForm = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setCofirmPassword] = useState('');
    const handleFormSubmit = () => {
        let resetToken = localStorage.getItem(RESET_TOKEN);
        const obj = {
            password: password,
            confirmPassword: confirmPassword,
            token: JSON.parse(resetToken)
        }
        resetPassword(obj);
    }
    return (
        <div className="resetPasswordContainer">
            <h3>Reset You Password</h3>
            <p>Enter your new password below.</p>
            <label>
                <span>New Password</span>
                <input className="inputField" type="password" placeholder="Enter you password" onChange={(e) => setPassword(e.target.value)} />
            </label>
            <label>
                <span>Confirm new password</span>
                <input className="inputField" type="password" placeholder="Enter you password" onChange={(e) => setCofirmPassword(e.target.value)} />
            </label>
            <div className='signupButtonContainer'>
                <button className="signupButton" onClick={handleFormSubmit}>Reset</button>
            </div>
        </div>
    )
}

export default ResetForm;