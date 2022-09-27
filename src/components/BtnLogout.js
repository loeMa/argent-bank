import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout} from '../feature/users.slice';


const BtnLogout = ({direction,  margin}) => {

    const dispatch = useDispatch();

    const logoutAction = () =>{
        localStorage.removeItem("token")
        dispatch(logout())
    }

    return (
        <NavLink to="/sign-in" onClick={logoutAction}>
        <div className='navbar__btn'  style={{ flexDirection: direction}}>
            <i className="fa fa-sign-out"></i>
            <p style={{ margin: margin}}>Sign out</p>
        </div>
        </NavLink>
    );
};

export default BtnLogout;