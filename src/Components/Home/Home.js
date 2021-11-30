import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import GetStarted from '../GetStarted/GetStarted';
import Navigation from '../Navigation/Navigation';
import Partners from '../Partners/Partners';
const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <Partners />
            <GetStarted />
            <Footer />
        </div>
    );
};

export default Home;