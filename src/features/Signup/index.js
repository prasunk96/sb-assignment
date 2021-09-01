import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../services/auth/auth';
import './style.css';

import Input from '../../components/Input';
import Button from '../../components/Button';
import { setSignupErrror } from '../../app/actions';

const Signup = () => {
    const history = useHistory();
    const location = useLocation();
    const dispatch = useDispatch();
    const [userType, setUserType] = useState(0);
    const [fullName, setFullName] = useState('');
    const [nameError, setNameError] = useState('');
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPassword, setCofirmPassword] = useState('');
    const [skills, setSkills] = useState('');
    const [otherError, setOtherError] = useState('');
    const { signupError } = useSelector(state => state.app);
    useEffect(() => {
        if('errors' in signupError) {
            signupError.errors.forEach(item => {
                 if('name' in item) {
                    setNameError(item['name']);
                    
                 } else if('email' in item) {
                    setEmailError(item['email']);

                 } else if('confirmPassword' in item) {
                    setPasswordError(item['confirmPassword']);
                 }
             })
        } else {
            setOtherError(signupError.message);
        }

    }, [signupError]);
    useEffect(() => {
        dispatch(setSignupErrror([]));
    }, [location]);

    const handleFormSubmit = () => {
        if(email && password && confirmPassword && fullName) {
            const signupUserObject = {
                email: email,
                userRole: userType,
                password: password,
                confirmPassword: confirmPassword,
                name: fullName,
                skills: skills
            }
            setNameError('');
            setEmailError('');
            setPasswordError('');
            setOtherError('');
            signup(signupUserObject, history, dispatch);
        }
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
                    {nameError && <span className="forgotPasswordLink nameError">{nameError}</span>}
                    <Input required={true} value={email} label="Email Address" type='email' placeholder="mail@mail.com" onInputChange={setEmail} />
                    {emailError && <span className="forgotPasswordLink emailError">{emailError}</span>}
                    <div className="passwordGroupContainer">
                        <Input required={true} value={password} label="Create Password" type='password' placeholder="Enter your password" onInputChange={setPassword} />
                        <Input required={true} value={confirmPassword} label="Confirm Password" type='password' placeholder="Enter your password" onInputChange={setCofirmPassword} />
                    </div>
                    {passwordError && <span className="forgotPasswordLink passwordError">{passwordError}</span>}
                    <Input value={skills} label="Skills" type='text' placeholder="Enter comma separated skills" onInputChange={setSkills} />
                    {otherError && <span className="forgotPasswordLink otherError">{otherError}</span>}
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