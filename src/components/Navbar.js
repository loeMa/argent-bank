import React from 'react';
import BtnAuth from './BtnAuth';
import BtnLogout from './BtnLogout';
import BtnProfile from './BtnProfile';
import Logo from './Logo';

const Navbar = () => {

    const getToken = localStorage.getItem("token");

    return (
        <div className='navbar'>
            
            <Logo />
            {
            getToken?
                <div className='navbar__btn' >
                    <BtnProfile />
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