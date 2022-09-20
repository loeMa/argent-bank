import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectUser } from '../feature/users.slice';

const BtnProfile = () => {

    const userData = useSelector(selectUser);

    return (
        <NavLink to="/dashboard" >
            <div className='navbar__btn'  >
                <i className="fa fa-user-circle"></i>
                <p>{userData.firstName}</p>
            </div>
        </NavLink>
    );
};

export default BtnProfile;