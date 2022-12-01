import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import './DishDetail.css';

const DishDetail = () => {
    const { dishId } = useParams();
    const [details, setDetails] = useState([]);
    const [count, setCount] = useState(0);
    const [selected, setSelected] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        fetch('/dishes.json')
            .then(res => res.json())
            .then(data => {
                const details = data.filter(item => item.id === Number(dishId));
                setDetails(details);
            }, [dishId]);
    });

    let quantity = 6;

    const handlePlus = () => {
        if (count < quantity) {
            setCount(count + 1);

        }
    }

    const handleMinus = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const handleCheckout = () => {
        navigate('/checkout');
    }


    return (
        < div className='row container detail'>
            <div className='col-lg-6 col-sm-12'>
                <div>
                    <h1>{details[0]?.name}</h1>
                    <p><small>{details[0]?.description}</small></p>
                    <h1>${details[0]?.price}</h1>
                </div>
                <div className='d-flex button-div'>
                    <button className='ms-1 mb-2 btn' onClick={handleMinus}>-</button>
                    <p className='mt-2'>{count}</p>
                    <button className='me-1 mb-2 btn' onClick={handlePlus}>+</button>
                </div>
                <div className='add-btn text-center mt-2'>
                    <button className='btn text-white'>Add</button>
                </div>
                <button onClick={handleCheckout} className='button-div add-btn text-white mt-2'>CheckOut</button>
            </div>
            <div className='col-lg-6 col-sm-12'>
                <img className='detail-img' src={details[0]?.img} alt="" />
            </div>
        </div >
    );
};

export default DishDetail;