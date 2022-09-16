import React from 'react';
import { Navigate, NavLink } from 'react-router-dom';
import Card from '../components/Card';
import WelcomeUser from '../components/WelcomeUser';

const Dashboard = () => {

    const getToken = localStorage.getItem("token");
    const accoundData = [ 
        {
            title: "Argent Bank Checking (x8349)",
            amount: "$2,082.79",
            description: "Available Balance" ,
        },
        {
            title: "Argent Bank Savings (x6712)",
            amount: "$10,928.42",
            description: "Available Balance" ,
        },
        {
            title: "Argent Bank Credit Card (x8349)",
            amount: "$184.30",
            description: "Current Balance" ,
        }
    ]


    return (
        
        <main className='signin'>
            {getToken
            ?
                <div>
                    <WelcomeUser />
                    {
                        accoundData.map((data, index) => 
                            <Card title={data.title} amount={data.amount} description={data.description} key={index} />
                        )
                    }
                </div>
            : window.location =" /"
            }
            
        </main>
    );
};

export default Dashboard;