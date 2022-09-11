import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, selectUser } from '../feature/users.slice';
import { getUserData } from '../services/auth';

const WelcomeUser = () => {


    const dispatch = useDispatch();
    
    const userData = useSelector(selectUser)
    
console.log(userData)

    /* useEffect(() =>{
        const fetchData = async () =>{
            const userProfile = await getUserData(token);
            const firstName = userProfile.firstName;
            const lastName = userProfile.lastName;
            

        }
        fetchData()
    }, [token, dispatch])
console.log() */
    return (
        <div>
            <div className="header">
                <h1>Welcome back<br />{userData.firstName} {userData.lastName}</h1>
                <button className="edit-button">Edit Name</button>
            </div>
        </div>
    );
};

export default WelcomeUser;