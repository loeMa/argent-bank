import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectUser } from '../feature/users.slice';


const BtnLogout = ({direction, fontsize, margin}) => {

    const dispatch = useDispatch();
    const userLogout = useSelector(selectUser);

    const logout = (e) =>{
        
        localStorage.clear()
        dispatch(logout)
    }

    return (
        <NavLink to="/sign-in" onClick={logout}>
        <div className='navbar__btn'  style={{ flexDirection: direction}}>
            <i className="fa fa-sign-out"></i>
            <p style={{ fontSize: fontsize, margin: margin}}>Sign out</p>
        </div>
        </NavLink>
    );
};

export default BtnLogout;