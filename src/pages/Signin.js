import React from 'react';
import BtnAuth from '../components/BtnAuth';
import SignInForm from '../components/SignInForm';

const Signin = () => {
    return (
        <main className='signin'>
            <section className='signin__content'>
                <div className="error"></div>
                <BtnAuth direction="column" fontsize="24px" margin="19px 0" />
                <SignInForm />
            </section>
        </main>
    );
};

export default Signin;