import React from 'react';
import { NavLink } from 'react-router-dom';
import BtnAuth from './BtnAuth';
import BtnLogout from './BtnLogout';
import Logo from './Logo';

const Navbar = () => {

    const getToken = localStorage.getItem("token");
console.log(getToken)

    return (
        <div className='navbar'>
            <Logo />
            {
            getToken?
                <div className='navbar__btn' >
                    
                        <BtnLogout direction="row" margin="0" />
                    
                </div>
                :
                <div className='navbar__btn' >
                    
                        <BtnAuth direction="row" margin="0" />
                    
                </div>
            }
            
            
        </div>
    );
};

export default Navbar;