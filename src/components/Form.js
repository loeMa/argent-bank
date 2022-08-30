import React from 'react';

const Form = () => {
    return (
        <form className='form'>
            <div className="form__wrapper">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" />
            </div>
            <div className="form__wrapper">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
            </div>
            <div className="form__remember">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
            </div>
            <button className="form__button">Sign In</button>
        </form>
    );
};

export default Form;