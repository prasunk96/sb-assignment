import React from 'react'
import Button from '../../components/Button';
import Navbar from '../../components/Navbar';

import './style.css'

const Homepage = () => {
    return (
        <div className="mainContainer">
            <div className="landing">
                <Navbar />
                <section className="landingSectionOne">
                    <div className="logoContainer">
                        <h1>Welcome to<br/>
                            <span className="logoStyleBig">My
                                <span className="logoStyleBigBlue">Jobs</span>
                            </span>
                        </h1></div>
                    <div className="getStartedButtonContainer">
                        <Button type='secondary' label={'Get Started'} />
                    </div>
                </section>
            </div>
            <section className="landingSectionTwo">
                <h6>Why Us</h6>
                <div className="whyUsCardsContainer">
                    <div className="whyUsCard">
                        <h6>Get More Visibility</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                    <div className="whyUsCard">
                        <h6>Get More Visibility</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                    <div className="whyUsCard">
                        <h6>Get More Visibility</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                </div>
            </section>
            <section className="landingSectionThree">
                <h6>Companies Who Trust Us</h6>
                <div className="whyUsCardsContainer">
                    <div className="whyUsCard">
                        <h6>Get More Visibility</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                    <div className="whyUsCard">
                        <h6>Get More Visibility</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                    <div className="whyUsCard">
                        <h6>Get More Visibility</h6>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Homepage;
