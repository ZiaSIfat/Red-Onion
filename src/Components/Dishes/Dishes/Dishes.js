import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Breakfast from '../Breakfast/Breakfast';
import Lunch from '../Lunch/Lunch';
import Dinner from '../Dinner/Dinner';
// import CustomLink from '../../../CustomLink/CustomLink';
// import Home from '../../Home/Home';
import './Dishes.css';

const Dishes = () => {
    const [dishes, setDishes] = useState([]);
    const [breakfasts, setBreakfast] = useState([]);
    const [lunchs, setLunch] = useState([]);
    const [dinners, setDinner] = useState([]);
    const [selected, setSelected] = useState("breakfast");

    // console.log(breakfasts)
    useEffect(() => {
        fetch('dishes.json')
            .then(res => res.json())
            .then(data => {
                setDishes(data);
                const breakfast1 = data?.filter(item => item.category === 'Breakfast');
                setBreakfast(breakfast1);
                const lunch1 = data.filter(item => item.category === 'Lunch');
                setLunch(lunch1);
                const dinner1 = data.filter(item => item.category === 'Dinner');
                setDinner(dinner1);
            });

    })



    return (
        <div className='container'>
            <div>
                <nav className='d-flex justify-content-center'>
                    <Link onClick={() => setSelected('breakfast')} className='meal'>Breakfast</Link>
                    <Link onClick={() => setSelected('lunch')} className='meal'>Lunch</Link>
                    <Link onClick={() => setSelected('dinner')} className='meal'>Dinner</Link>
                </nav>
            </div>
            {
                selected === "breakfast" &&
                <div className='dishes-container'>
                    {
                        breakfasts?.map(breakfast => <Breakfast
                            key={breakfast.id}
                            breakfast={breakfast}>

                        </Breakfast>)
                    }
                </div>
            }
            {
                selected === "lunch" &&
                <div className='dishes-container'>
                    {
                        lunchs?.map(lunch => <Lunch
                            key={lunch.id}
                            lunch={lunch}></Lunch>)
                    }
                </div>
            }
            {
                selected === "dinner" &&
                <div className='dishes-container'>
                    {
                        dinners?.map(dinner => <Dinner
                            key={dinner.id}
                            dinner={dinner}></Dinner>)
                    }
                </div>
            }
        </div>

    );
};

export default Dishes;