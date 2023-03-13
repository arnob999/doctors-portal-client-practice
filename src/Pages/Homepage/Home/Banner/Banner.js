import React from 'react';
import bannerHero from '../../../../assets/images/chair.png'
const Banner = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img alt='' src={bannerHero} className="rounded-lg shadow-2xl lg:w-1/2" />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;