import React, { useState } from 'react'

import './style.css';

const Button = ({label, type, customStyle, onClick}) => {
    const [style, setStyle] = useState(customStyle);
    useState(() => {
        switch(type) {
            case 'primary':
                setStyle('buttonStyle');
                break;
            case 'secondary':
                setStyle('buttonStyleSecondary');
                break;
            default:
                setStyle(customStyle);
        }
    }, []);

    return (
        <button onClick={onClick} className={`button ${style}`}>{label}</button>
    )
}

export default Button;
