import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";



export const loginUser = (email, password) =>{
    
    const usernameError = document.querySelector('.email.error');
    const passwordError = document.querySelector('.password.error');
    
    return axios
    .post("http://localhost:3001/api/v1/user/login",{
        email, 
        password,
        
    })
    .catch((err) =>{
        console.log(err);
        if(err.response.data.message.includes("Password")){
            passwordError.innerHTML = "Votre mot de passe est incorrect"
        }else{
            usernameError.innerHTML = " Votre Email est incorrect"
        }
    })
    
    /* ({
        headers: {
            Authorization: `Bearer ${token}`
        }, 
        method: "post",
        url: "http://localhost:3001/api/v1/user/login",
        withCredentials: false,
        data:{
            email,
            password,
        }, 

    })*/


    
}

export const getUserData = (token) =>{

    return axios({
        headers: {
            Authorization: `Bearer ${token}`
        }, 
        method: "post",
        url: "http://localhost:3001/api/v1/user/profile",
        withCredentials: false,
    })
    
    .then((res) => {
        console.log(res);
        
        return {
            firstName : res.data.body.firstName,
            lastName : res.data.body.lastName,
        }
    } )
    .catch((err) =>{
        console.log(err);
    }) 
    
}

/* .post("http://localhost:3001/api/v1/user/profile",{ 
        headers: { 
            Authorization : `Bearer ${token}`
        }
    })*/