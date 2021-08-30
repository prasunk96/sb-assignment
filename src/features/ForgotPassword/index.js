import React from 'react'
import { useSelector } from 'react-redux';
import ResetForm from './ResestForm';
import ResetToken from './ResetToken';

import './style.css';

const Reset = () => {
    const { isResetTokenValid } = useSelector(state => state.app)
    return (
        <div className="resetContainer">
            {isResetTokenValid ? <ResetForm /> : <ResetToken />}
        </div>
    )
}
export default Reset;