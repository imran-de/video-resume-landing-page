import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import GetStarted from '../GetStarted/GetStarted';
import Navigation from '../Navigation/Navigation';
import Packages from '../Packages/Packages';
import Partners from '../Partners/Partners';
import WhatClientSay from '../WhatClientSay/WhatClientSay';
const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <Partners />
            <GetStarted />
            <About />
            <Packages />
            <WhatClientSay />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;