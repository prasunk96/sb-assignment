import React, { useEffect, useState } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom';
import Button from '../Button';
import './style.css'
import Avatar from '../Avatar';
import { USER_DATA, IS_LOGGED_IN } from '../../constants';
import { handleLogout } from '../../services/auth/auth';

const Navbar = () => {
    const history = useHistory();
    const location = useLocation();
    const [dropdownVisibility, setDropDownVisibility] = useState(false);
    const userData = JSON.parse(sessionStorage.getItem(USER_DATA));
    const isLoggedIn = sessionStorage.getItem(IS_LOGGED_IN);

    useEffect(() => {
        window.addEventListener('click', function () { setDropDownVisibility(false) });
        let el = document.getElementById('postAJobTab');
        if(location.pathname.includes('postjob')) {
            el.classList.add("activeNavTab");
        } else if(el) {
            el.classList.remove("activeNavTab");
        }
    }, [location]);

    return (
        <nav className="navbar z-depth-0">
            <div className="nav-wrapper">
                <div className="left">
                    <div className="logo">My<span className="logoStyle">Jobs</span></div>
                </div>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    {isLoggedIn && <li>
                        <Link id="postAJobTab" to={`/${userData.name}/postjob`}>
                            Post a Job
                        </Link>
                    </li>}
                    {!isLoggedIn && <li>
                        <Link to="/login">
                            <Button type="primary" label={'Login/Signup'}/>
                        </Link>
                    </li>}
                    {isLoggedIn && <li style={{ padding: '12px 15px' }}>
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
