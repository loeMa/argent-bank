import React from 'react';
import { NavLink } from 'react-router-dom';
import BtnAuth from './BtnAuth';
import Logo from './Logo';

const Navbar = () => {
    return (
        <div className='navbar'>
            <Logo />
            <div className='navbar__btn' >
                <NavLink to="/sign-in">
                    <BtnAuth direction="row" margin="0" />
                </NavLink>
            </div>
            
        </div>
    );
};

export default Navbar;