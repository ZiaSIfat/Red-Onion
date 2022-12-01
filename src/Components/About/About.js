import React from 'react';
import './About.css';
import delivery from '../../images/adult-blur-blurred-background-687824.png';
import chef from '../../images/chef-cook-food-33614.png';
import home from '../../images/architecture-building-city-2047397.png';
import { FaBusAlt } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";

const About = () => {
    return (
        <div className='container'>
            <h2>Why You Choose Us</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, repudiandae.</p>
            <div className='d-flex'>
                <div className='me-5'>
                    <img className='w-75' src={delivery} alt="" />
                    <h5 className='mt-2'><FaBusAlt className='icons' />Fast delivery</h5>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, amet!</p>
                </div>
                <div className='me-5'>
                    <img className='w-75' src={chef} alt="" />
                    <h5 className='mt-2'><FaBell className='icons' />Done with professionals</h5>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, mollitia.</p>
                </div>
                <div>
                    <img className='w-75' src={home} alt="" />
                    <h5 className='mt-2'><FaTruck className='icons' />Home delivery</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, corporis!</p>
                </div>
            </div>
        </div>

    );
};

export default About;