import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    email: "",
    firstName: '',
    lastName: '',
    token: null,
    isLogged : false,
}


export const usersSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logout: (state) => {
            state.email = "";
            state.firstName = "payload.firstName";
            state.lastName = "payload.lastName"; 
            state.isLogged = false;
            state.token = null;
        },
        login : (state, {payload}) =>{
            state.email = payload.email;
            state.firstName = payload.firstName;
            state.lastName = payload.lastName; 
            state.isLogged = true;
            //console.log("LOGIN", state);
        },
        updateToken: (state, {payload}) =>{
            state.token = payload.token
        },
        editUser: (state, {payload}) =>{
            state.firstName = payload.firstName;
            state.lastName = payload.lastName;  
            
        }
    },
    
})

export const { login, updateToken, logout, editUser } = usersSlice.actions;
export const selectUser = (state) => state.users;
export default usersSlice.reducer;
