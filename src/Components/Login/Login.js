import React from 'react';
import './Login.css';
import logo from '../../images/logo2.png';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useState } from 'react';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const from = location.state?.from?.pathname || '/';

    const handleEmailBlur = e => {
        setEmail(e.target.value);
    }

    const handlePasswordBlur = e => {
        setPassword(e.target.value);
    }

    const handleLogin = e => {
        e.preventDefult();
        signInWithEmailAndPassword(email, password);
    }

    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div className='container login-form'>
            <div>
                <img className='title-logo mb-4' src={logo} alt="" />
                <form onSubmit={handleLogin}>
                    <input onBlur={handleEmailBlur} type="email" name="email" id="" placeholder='Email' required />
                    <br />
                    <input onBlur={handlePasswordBlur} type="password" name="password" id="" placeholder='Password' required />
                    <br />
                    <button className='submit-btn'>Login</button>
                </form>
                <p className='navigate'>Dont have an account? <Link className='login' to='/signup'>Please Signup</Link></p>
                <p>{error?.message}</p>
            </div>
        </div>
    );
};

export default Login;