import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import logo from '../../images/logo2.png';
import './SignUp.css';
import auth from '../../firebase.init';
import { useState } from 'react';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = e => {
        setEmail(e.target.value);
    }

    const handlePasswordBlur = e => {
        setPassword(e.target.value);
    }

    const handleConfirmPassBlur = e => {
        setConfirmPass(e.target.value);
    }

    const handleSignUp = e => {
        e.preventDefault();
        if (password !== confirmPass) {
            setError('Passwords didnt matched');
            return;
        }
        createUserWithEmailAndPassword(email, password);
    }

    if (user) {
        navigate('/');
    }

    return (
        <div className='container login-form'>
            <div>
                <img className='title-logo mb-4' src={logo} alt="" />
                <form onSubmit={handleSignUp}>
                    <input type="text" placeholder='Name' />
                    <br />
                    <input onBlur={handleEmailBlur} type="email" name="email" id="" placeholder='Email' required />
                    <br />
                    <input onBlur={handlePasswordBlur} type="password" name="password" id="" placeholder='Password' required />
                    <br />
                    <input onBlur={handleConfirmPassBlur} type="password" name="password" id="" placeholder='Confirm Password' required />
                    <br />
                    <button className='submit-btn'>Signup</button>
                </form>
                <p className='navigate'>Already have an account? <Link className='login' to='/login'>Please Login</Link></p>
            </div>
        </div>
    );
};

export default SignUp;