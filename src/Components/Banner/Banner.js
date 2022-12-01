import React from 'react';
import { Form } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div >
            <div className='banner text-center'>
                <h1 className='banner-title'>Best food waiting for your belly</h1>
                <input className='me-3 w-25 search-bar' type="text" name="" id="" placeholder='Search Your Food' />
                <button className='btn search-btn'>Search</button>

            </div>
        </div >

    );
};

export default Banner;