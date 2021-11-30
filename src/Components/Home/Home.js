import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import Partners from '../Partners/Partners';
const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <Partners />
            <Footer />
        </div>
    );
};

export default Home;