import React from 'react'

import './style.css';

const Input = ({value, label, onInputChange, type, placeholder, required}) => {
    return (
        <label>
            <span>{`${label} ${required ? '*' : ''}`}</span>
            <input required={required} className="inputField" value={value} type={type} placeholder={placeholder} onChange={(e) => onInputChange(e.target.value)} />
        </label>
    )
}

export default Input;
