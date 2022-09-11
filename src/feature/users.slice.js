import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    email: "",
    password: '',
    firstName: '',
    lastName: '',
    isLoading: true,
    token: null,
    isLogged : false,
}

export const usersSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logout: (state) => {
            state = initialState;
            
        },
        login : (state, {payload}) =>{
            state.islogged = true;
            state.firstName = payload.firstName;
            state.lastName = payload.lastName; 
            console.log("LOGIN", state);
        },
        updateToken: (state, {payload}) =>{
            state.token = payload.token
        },
        
    },
    extraReducers: () =>{}
})

export const { login, updateToken, logout } = usersSlice.actions;
export const selectUser = (state) => state.users;
export default usersSlice.reducer;
