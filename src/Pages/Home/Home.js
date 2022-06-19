import React from 'react';
import Services from '../Services/Services';
import About from './About';
import Banner from './Banner';
import CompanyProgress from './CompanyProgress';
import Gallery from './Gallery';

const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <Services/>
            <CompanyProgress/>
            <Gallery/>
        </div>
    );
};

export default Home;