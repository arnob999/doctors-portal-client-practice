import React from 'react';
import InfoCards from '../InfoCards/InfoCards';
import Services from '../Services/Services';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
        </div>
    );
};

export default Home;