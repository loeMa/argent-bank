import React from "react";
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Signin from "./pages/Signin";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
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
