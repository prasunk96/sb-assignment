import React from 'react'
import { useSelector } from 'react-redux';
import ResetForm from './ResestForm';
import ResetToken from './ResetToken';

const Reset = () => {
    const { isResetTokenValid } = useSelector(state => state.app)
    return (
        isResetTokenValid ? <ResetForm /> : <ResetToken />
    )
}
export default Reset;