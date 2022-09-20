import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import { login, selectUser } from "./feature/users.slice";
import { getUserData } from "./services/auth";


function App() {

  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const getToken = localStorage.getItem("token");
  
  useEffect(() =>{
    const checkIsLoggin = async() =>{
      if(getToken){
        const userProfile = await getUserData(getToken);
        console.log(userProfile)
        dispatch(login(userProfile))
        return userProfile
      }
      

    }
    checkIsLoggin()
  })

  return (
    <BrowserRouter>
      <Navbar  />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/sign-in" element={<Signin/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
