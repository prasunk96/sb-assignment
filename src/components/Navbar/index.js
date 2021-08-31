import React, { useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom';
import Button from '../Button';
import './style.css'
import Avatar from '../Avatar';
import { USER_DATA, IS_LOGGED_IN } from '../../constants';
import { handleLogout } from '../../services/auth/auth';

const Navbar = () => {
    const params = useParams();
    const history = useHistory();
    const [dropdownVisibility, setDropDownVisibility] = useState(false);
    const userData = JSON.parse(localStorage.getItem(USER_DATA));
    const isLoggedIn = localStorage.getItem(IS_LOGGED_IN);

    useEffect(() => {
        window.addEventListener('click', function () { setDropDownVisibility(false) });
    }, []);

    return (
        <nav className="navbar z-depth-0">
            <div className="nav-wrapper">
                <div className="left">
                    <Link to="/" class="logo">My<span className="logoStyle">Jobs</span></Link>
                </div>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <li>
                        <Link to={`/${params.username}/postjob`}>
                            Post a Job
                        </Link>
                    </li>
                    {!isLoggedIn && <li>
                        <Link to="/login">
                            <Button type="primary" label={'Login/Signup'}/>
                        </Link>
                    </li>}
                    {isLoggedIn && <li>
                        <Avatar name={userData.name}  />
                    </li>}
                    {isLoggedIn && <li>
                        <div className="dropdownContainer">
                            <div id="accountDropdown" onMouseOver={() => setDropDownVisibility(true)} class="arrow-down"></div>
                            {dropdownVisibility && <div className="dropdown">
                                <div class="arrow-up"></div>
                                <div onClick={() => handleLogout(history)} className="dropdownItem">Logout</div>
                            </div>}
                        </div>
                    </li>}
                </ul>
            </div>
      </nav>
    )
}

export default Navbar;
