import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../Button';
import './style.css'

const Navbar = () => {
    return (
        <nav className="navbar z-depth-0">
            <div className="nav-wrapper">
                <div className="left">
                    <Link to="/" class="logo">My<span className="logoStyle">Jobs</span></Link>
                </div>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li><Button type="primary" label={'Login/Signup'}/></li>
                </ul>
            </div>
      </nav>
    )
}

export default Navbar;
