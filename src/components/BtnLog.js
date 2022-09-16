import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectUser } from '../feature/users.slice';

const BtnLog = ({direction, fontsize, margin}) => {

    const userData = useSelector(selectUser);
    const dispatch = useDispatch();
    const isLogged = userData.isLogged;
    console.log(isLogged);
    

    return (
        
        <NavLink to="/sign-in" >
            <div className='navbar__btn' style={{ flexDirection: direction}}>
                <i className="fa fa-user-circle"></i>
                <p style={{ fontSize: fontsize, margin: margin}}>Sign In</p>
            </div>
        </NavLink> 
    
    );
};

export default BtnLog;