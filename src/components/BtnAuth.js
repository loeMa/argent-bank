import React from 'react';
import { NavLink } from 'react-router-dom';


const BtnAuth = ({direction, fontsize, margin}) => {



    return (
        <NavLink to="/sign-in" >
        <div className='navbar__btn' style={{ flexDirection: direction}}>
            <i className="fa fa-user-circle"></i>
            <p style={{ fontSize: fontsize, margin: margin}}>Sign In</p>
        </div>
        </NavLink>
    );
};

export default BtnAuth;