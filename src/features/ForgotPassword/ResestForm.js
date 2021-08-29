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
        <div className="submitFormContainer">
            <h4>Reset You Password</h4>
            <h6>Enter your new password below.</h6>
            <label>
                <span>New Password</span>
                <input type="password" placeholder="Enter you password" onChange={(e) => setPassword(e.target.value)} />
            </label>
            <label>
                <span>Confirm new password</span>
                <input type="password" placeholder="Enter you password" onChange={(e) => setCofirmPassword(e.target.value)} />
            </label>
                <button onClick={handleFormSubmit}>Reset</button>
        </div>
    )
}

export default ResetForm;