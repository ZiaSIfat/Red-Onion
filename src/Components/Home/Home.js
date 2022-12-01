import React from 'react';
import { Link } from 'react-router-dom';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Dishes from '../Dishes/Dishes/Dishes';
import './Home.css';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Dishes></Dishes>
            <About></About>
        </div>
    );
};

export default Home;