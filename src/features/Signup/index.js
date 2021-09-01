import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../services/auth/auth';
import './style.css';

import Input from '../../components/Input';
import Button from '../../components/Button';

const Signup = () => {
    const [userType, setUserType] = useState(0);
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setCofirmPassword] = useState('');
    const [skills, setSkills] = useState('');
    const handleFormSubmit = () => {
        const signupUserObject = {
            email: email,
            userRole: userType,
            password: password,
            confirmPassword: confirmPassword,
            name: fullName,
            skills: skills
        }
        signup(signupUserObject);
    }
    return (
        <div className="pagesMainContainer" style={{ padding: '100px 441px 100px 442px' }}>
            <div className="signupFormContainer">
                <h3>Signup</h3>
                <h6 className="userTypeHeading">I'm a</h6>
                <div className="userTypeContainer">
                    <div className="customCheckbox">
                        <label>
                            <input type="checkbox" id='recruiter' name='userType' checked={userType === 0} onChange={(e) => setUserType(0)}/>
                            <span>recruiter</span>
                        </label>
                    </div>
                    <div className="customCheckbox">
                        <label>
                            <input type="checkbox" id='candidate' name='userType' checked={userType === 1} onChange={(e) => setUserType(1)} />
                            <span>Candidate</span>
                        </label>
                    </div>
                </div>
                    <Input required={true} value={fullName} label="Full Name" type='text' placeholder="Enter your full name" onInputChange={setFullName} />
                    <Input required={true} value={email} label="Email Address" type='email' placeholder="mail@mail.com" onInputChange={setEmail} />
                    <div className="passwordGroupContainer">
                        <Input required={true} value={password} label="Create Password" type='password' placeholder="Enter your password" onInputChange={setPassword} />
                        <Input required={true} value={confirmPassword} label="Confirm Password" type='password' placeholder="Enter your password" onInputChange={setCofirmPassword} />
                    </div>
                    <Input value={skills} label="Skills" type='text' placeholder="Enter comma separated skills" onInputChange={setSkills} />
                <div className="signupButtonContainer">
                    <Button type="secondary" onClick={handleFormSubmit} label="Signup" />
                </div>
                <div className="signupFormFooter">
                    <h6>have an account? <Link to="/login">Login</Link></h6>
                </div>
            </div>
        </div>
    )
}

export default Signup;