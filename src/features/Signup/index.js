import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../services/auth/auth';
import './style.css';

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
        <div className="submitFormContainer">
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
                <label>
                    <span>Full Name</span>
                    <input className="inputField" type='text' placeholder="Enter your full name" onChange={(e) => setFullName(e.target.value)} />
                </label>
                <label>
                    <span>Email Address</span>
                    <input className="inputField" type='email' placeholder="mail@mail.com" onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    <span>Create Password</span>
                    <input className="inputField" type='password' placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
                </label>
                <label>
                    <span>Confirm Password</span>
                    <input className="inputField" type='password' placeholder="Enter your password" onChange={(e) => setCofirmPassword(e.target.value)} />
                </label>
                <label>
                    <span>Skills</span>
                    <input className="inputField" type='text' placeholder="Enter comma separated skills" onChange={(e) => setSkills(e.target.value)} />
                </label>
                <div className="signupButtonContainer">
                    <button className="signupButton" onClick={handleFormSubmit}>Signup</button>
                </div>
                <div className="signupFormFooter">
                    <h6>have an account? <Link to="/login">Login</Link></h6>
                </div>
            </div>
        </div>
    )
}

export default Signup;