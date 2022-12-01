import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Breakfast.css';

const Breakfast = ({ breakfast }) => {
    const { name, img, price, subtitle, id } = breakfast;
    const navigate = useNavigate();
    const navigateToDishDetail = id => {
        navigate(`/dish/${id}`)
    }
    return (
        <div>
            <div className='text-center'>
                <Card onClick={() => navigateToDishDetail(id)} className=' dish-card' style={{ width: '18rem' }}>
                    <Card.Img className='dish-img' variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <p><small>{subtitle}</small></p>
                        <Card.Text>
                            $ {price}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Breakfast;