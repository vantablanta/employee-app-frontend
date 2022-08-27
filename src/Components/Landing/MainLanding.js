import React from "react";

import {Routes, Route} from "react-router-dom"


import Login from './Login'
import Signup from "./Signup";
import HomePage from "./HomePage";
import LandingNav from "./Nav";
import About from "./About";
import UserManual from "./UserManual"

export default function MainLanding(){

    return (
        <>
            <LandingNav/>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="login" element={<Login/>} />
                <Route path="signup" element={<Signup/>} />
                <Route path="about" element={<About/>} />
                <Route path="user-manual" element={<UserManual/>} />
            </Routes>  
        </>
    )
}