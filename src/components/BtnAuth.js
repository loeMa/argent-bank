import React from 'react';


const BtnAuth = ({direction, fontsize, margin}) => {
    return (
        <div className='navbar__btn' style={{ flexDirection: direction}}>
            <i className="fa fa-user-circle"></i>
            <p style={{ fontSize: fontsize, margin: margin}}>Sign In</p>
        </div>
    );
};

export default BtnAuth;