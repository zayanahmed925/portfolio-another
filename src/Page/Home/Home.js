import React from 'react';
import Contact from '../Contact/Contact';
import Project from '../Project/Project';
import Banner from './Banner/Banner';
import Service from './Service/Service';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <Project></Project>
            <Testimonial></Testimonial>
            <Contact></Contact>
        </div>
    );
};

export default Home;