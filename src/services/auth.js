import axios from "axios";



/**
 * Axios check if user exist in the Api with post
 * @param {String} email 
 * @param {String ||Number} password 
 * @returns {Object}
 */
export const loginUser = (email, password) =>{
    
    const error = document.querySelector('.error');
    
    return axios
    .post("http://localhost:3001/api/v1/user/login",{
        email, 
        password,
        
    })
    .catch((err) =>{
        error.innerHTML = "Votre identifiant ou votre mot de passe est incorrect";
    })
}

/**
 * Axios get user data by posting the token
 * @param {*} token 
 * @returns {Object}
 */
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
            email : res.data.body.email,
        }
    } )
    .catch((err) =>{
        console.log(err);
    }) 
    
}

/**
 * Axios change user fistname and lastname with put and the token
 * @param {*} token 
 * @param {String} firstName 
 * @param {String} lastName 
 * @returns {Object}
 */
export const editUserData = (token, firstName, lastName) =>{
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        },
    }
    const data = {
        firstName: firstName,
        lastName: lastName,
    }

    return axios
    .put("http://localhost:3001/api/v1/user/profile",
        
        data,
        config,
        
    )
    
    .then((res) => {
        console.log(res.data.body)
        return {
            firstName : res.data.body.firstName,
            lastName : res.data.body.lastName,
        }
        
    } )
    .catch((err) =>{
        console.log(err);
    }) 
    
}