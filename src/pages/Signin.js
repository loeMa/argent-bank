import React from 'react';
import BtnAuth from '../components/BtnAuth';
import Form from '../components/Form';

const Signin = () => {
    return (
        <main className='signin'>
            <section className='signin__content'>
                <BtnAuth direction="column" fontsize="24px" margin="19px 0" />
                <Form />
            </section>
        </main>
    );
};

export default Signin;