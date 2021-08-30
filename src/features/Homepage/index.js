import React from 'react'
import Button from '../../components/Button';
// import Navbar from '../../components/Navbar';
import Content from './Content';

import { Link } from 'react-router-dom';

import './style.css'

const Homepage = () => {
    return (
        <div className="mainContainer">
            <div className="landing">
                {/* <Navbar /> */}
                <section className="landingSectionOne">
                    <div className="logoContainer">
                        <h1>Welcome to<br/>
                            <span className="logoStyleBig">My
                                <span className="logoStyleBigBlue">Jobs</span>
                            </span>
                        </h1></div>
                    <div className="getStartedButtonContainer">
                        <Link to="/login">
                            <Button type='secondary' label={'Get Started'} />
                        </Link>
                    </div>
                </section>
            </div>
            <Content />
        </div>
    )
}

export default Homepage;
