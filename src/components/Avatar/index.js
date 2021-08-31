import React, { useEffect, useState } from 'react';
import './style.css';

const Avatar = ({ name }) => {
    const [initials, setIntitials] = useState('');
    useEffect(() => {
        let initials = name[0];
        setIntitials(initials);
    },[]);
    return (
        <div className="avatarContainer">
            <h1 className="initials">{initials}</h1>
        </div>
    )
}

export default Avatar;
