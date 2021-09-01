import React, { useState } from 'react';
import { resetPassword } from '../../services/auth/auth';
import { RESET_TOKEN } from '../../constants';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useHistory } from 'react-router-dom';

const ResetForm = () => {
    const history = useHistory();
    const [password, setPassword] = useState('');
    const [confirmPassword, setCofirmPassword] = useState('');
    const handleFormSubmit = () => {
        let resetToken = sessionStorage.getItem(RESET_TOKEN);
        const obj = {
            password: password,
            confirmPassword: confirmPassword,
            token: JSON.parse(resetToken)
        }
        resetPassword(obj, history);
    }
    return (
        <div className="resetPasswordContainer">
            <h3>Reset You Password</h3>
            <p>Enter your new password below.</p>
                <Input label="Password" type="password" placeholder="Enter you password" onInputChange={setPassword} value={password}  />
                <Input label="Confirm your password" type="password" placeholder="Enter you password" onInputChange={setCofirmPassword} value={confirmPassword} />
            <div className='signupButtonContainer'>
                <Button label="Reset" type="secondary" onClick={handleFormSubmit} />
            </div>
        </div>
    )
}

export default ResetForm;