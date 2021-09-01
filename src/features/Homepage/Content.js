import React from 'react';
import fastify from '../../assets/icons/fastify.svg';
import splunk from '../../assets/icons/splunk.svg';
import terser from '../../assets/icons/terser.svg';

const Content = () => {
    const icons = [fastify, splunk, terser];
    return (
        <>
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
            <div className="companiesContaner">
                {icons.map(item => <div className="companyCard">
                    <img alt="companyicons" height="40" width="125" src={item} />
                </div>)}
            </div>
        </section>
        </>
    )
}

export default Content;