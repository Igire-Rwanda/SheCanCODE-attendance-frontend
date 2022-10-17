import React from "react";
import {Routes, Route} from "react-router-dom"
import Home from "../views/home";
import Header from "../components/header";
import SignIn from "../views/signin";
import RegisterStudents from "../components/MentorDashboard/registeringStudentsDashboard";

const Index = () =>{
  return(
    <Routes>
      <Route path= "/" element = {<Home/>} />
      <Route path= "home" element = {<Home/>} />
      <Route path="/header" element ={<Header/>}/>
      <Route path="/signin" element ={<SignIn/>}/>
      
      <Route path="/registeringstudents" element ={<RegisterStudents/>}/>
    
    </Routes>
  )
}
export default Index;
