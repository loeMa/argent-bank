import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout} from '../feature/users.slice';


const BtnLogout = ({direction, fontsize, margin}) => {

    const dispatch = useDispatch();


    const logoutAction = (e) =>{
        localStorage.removeItem("token")
        dispatch(logout())
    }

    return (
        <NavLink to="/sign-in" onClick={logoutAction}>
        <div className='navbar__btn'  style={{ flexDirection: direction}}>
            <i className="fa fa-sign-out"></i>
            <p style={{ fontSize: fontsize, margin: margin}}>Sign out</p>
        </div>
        </NavLink>
    );
};

export default BtnLogout;