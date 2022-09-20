import axios from "axios";




export const loginUser = (email, password) =>{
    
    const error = document.querySelector('.error');
    
    return axios
    .post("http://localhost:3001/api/v1/user/login",{
        email, 
        password,
        
    })
    .catch((err) =>{
        console.log(err);
        error.innerHTML = "Votre identifiant ou votre mot de passe est incorrect";
    })
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
            email : res.data.body.email,
        }
    } )
    .catch((err) =>{
        console.log(err);
    }) 
    
}

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
console.log(firstName, lastName)
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