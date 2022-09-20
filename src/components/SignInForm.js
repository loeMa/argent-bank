import React, { useRef, useState } from 'react';
import { useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateToken } from '../feature/users.slice';
import {  loginUser } from '../services/auth';


const SignInForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const localEmail = localStorage.getItem('email');
    const localRemember = localStorage.getItem('remember');
    const username = useRef();

    

    const handleLogin = async(e) =>{
        e.preventDefault();
        const result = await loginUser(email || localEmail, password);

        if(result && remember){

            const data = {
                username: username.current.value,
                
                };
                const token = result.data.body.token;
                dispatch(updateToken({token: token})) ;
                localStorage.setItem('token', token);
                localStorage.setItem('email', data.username);
                
                localStorage.setItem('remember', remember);
                console.log(remember)
                navigate('/dashboard')
                
        }else if(result && !remember){

            const token = result.data.body.token;
            dispatch(updateToken({token: token})) ;
            localStorage.setItem('token', token);
            localStorage.removeItem('email');
            localStorage.removeItem('remember');
            navigate('/dashboard')
            
        }else{
            console.log('erreur 400')
        }  
    }



    return (
        <form className='form' onSubmit={handleLogin}>
            <div className="form__wrapper">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" defaultValue={localEmail} ref={username} onChange={(e) => setEmail(e.target.value) } />
            </div>
            <div className="form__wrapper">
                <label htmlFor="password">Password</label>
                <input type="password" id="password"  onChange={(e) =>setPassword(e.target.value)} />
            </div>
            <div className="form__remember">
                
                <input type="checkbox" id="remember-me" defaultChecked={localRemember? true : false}  onChange={(e) =>setRemember(e.target.checked)}/>
                <label htmlFor="remember-me">Remember me</label>
            </div>
            <button type="submit" className="form__button">Sign In</button>
        </form> 
    );
};

export default SignInForm;