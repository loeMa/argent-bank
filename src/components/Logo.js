import React from 'react';
import { NavLink } from 'react-router-dom';

const Logo = () => {
    return (
        <div className='logo'>
            <NavLink to="/">
                <img src="./argentBankLogo.png" alt="Logo argent bank" />
            </NavLink>
        </div>
    );
};

export default Logo;