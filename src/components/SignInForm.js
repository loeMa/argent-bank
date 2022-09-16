import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, updateToken } from '../feature/users.slice';
import { getUserData, loginUser } from '../services/auth';


const SignInForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const inputEmail = document.querySelector('#username');
    const inputPassword = document.querySelector('#password');
    const error = document.querySelector('.error');
    const localEmail = localStorage.getItem('email');
    
    

    const handleLogin = async(e) =>{
        e.preventDefault();
        const result = await loginUser(email, password);
console.log(email)
        /* if(result && remember){
            const token = result.data.body.token;
            dispatch(updateToken({token: token})) ;
            localStorage.setItem('token', token);
            localStorage.setItem('email', email);
            localStorage.setItem('password', password); */
            //localStorage.setItem('remember', remember);
            
            //navigate('/dashboard')
            
        //}
        if(result){
            const token = result.data.body.token;
            dispatch(updateToken({token: token})) ;
            localStorage.setItem('token', token);
            navigate('/dashboard')
            
        }else{
            console.log('erreur 400')
        } 
        

    }



    return (
        <form className='form' onSubmit={handleLogin}>
            <div className="form__wrapper">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" /* value={localEmail&& localEmail } */ onChange={(e) => setEmail(e.target.value) } />
            </div>
            <div className="form__wrapper">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" /* value={localStorage.getItem("password")? localStorage.getItem("password") : ""} */ onChange={(e) =>setPassword(e.target.value)} />
            </div>
            <div className="form__remember">
                <input type="checkbox" id="remember-me" onChange={(e) =>setRemember(!remember)}/>
                <label htmlFor="remember-me">Remember me</label>
            </div>
            <button type="submit" className="form__button">Sign In</button>
        </form> 
    );
};

export default SignInForm;