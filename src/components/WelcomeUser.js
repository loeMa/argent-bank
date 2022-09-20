import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editUser, selectUser } from '../feature/users.slice';
import { editUserData } from '../services/auth';

const WelcomeUser = () => {

    const [edit, setEdit] = useState(false);
    const userData = useSelector(selectUser);
    const dispatch = useDispatch();
    const firstInput = useRef();
    const lastInput = useRef();
    const getToken = localStorage.getItem("token");
    

const handleEdit = async() =>{
    setEdit(false);
    
    const data = {
      firstName: firstInput.current.value,
      lastName: lastInput.current.value,
    };
    if(data.firstName === userData.firstName && data.lastName === userData.lastName){
        console.log(firstInput ,userData.firstName)
    }else{
        
        const updateProfile =  await editUserData(getToken,data.firstName, data.lastName)
        console.log('yo', updateProfile)
        dispatch(editUser(updateProfile)); 
    }
    
}

    return (
        <div>
            <div className="header">
                <h1>Welcome back</h1>
                
                { edit ? (
                    <div className='header__edit'>
                        <div className='header__edit__input end'>
                            <input
                                defaultValue={userData.firstName}
                                ref={firstInput} 
                                autoFocus
                            ></input>
                            <button onClick={(e) => handleEdit(e)}>Save</button>
                            

                        </div>
                        <div className='header__edit__input start'>
                        <input
                                defaultValue={userData.lastName}
                                ref={lastInput} 
                            ></input>
                            
                            <button onClick={(e) => setEdit(!edit)}>Cancel</button>
                        </div>
                    </div>
                ) : (
                    <div>
                    <h1>{userData.firstName} {userData.lastName}</h1>
                    <button className="edit-button" onClick={() => setEdit(!edit)}>Edit Name</button>
                    </div>
                )  }
            </div>
        </div>
    );
};

export default WelcomeUser;