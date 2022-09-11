import React from 'react';
import WelcomeUser from '../components/WelcomeUser';

const Dashboard = () => {
console.log(localStorage)
    return (
        
            <main className='signin'>
                <WelcomeUser />
            </main>
        
    );
};

export default Dashboard;