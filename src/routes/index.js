import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../views/home";
// import DashLayout from "../components/Dashboard/Layout"
import View from "../views/Dashboard/DashLayout";
// import AddStudent from "../components/AddStudent/AddStudent";
import Signin from "../components/Forms/Signin";
import AdminDashboard from "../views/Dashboard/AdminDashboard";
import Statistics from "../components/Statistics";
import HomePage from "../components/HomePage/HomePage"





const Index = () =>{
  return(
    <>
  
    <Routes>
      <Route path= "/" element = {<HomePage/>} />
      <Route path= "/Dashboard" element = {<View/>} />
      <Route path= "/" element = {<Home/>} />
      <Route path= "home" element = {<Home/>} />
      {/* <Route path= "/Dashboard" element = {<View/>} /> */}
      <Route path= "/signin" element = {<Signin/>} />
      {/* <Route path="/addstudent" element={<AddStudent/>}/> */}
      <Route path="/dashboard" element={<AdminDashboard/>}>
      <Route path="" element={<Statistics />} />
        <Route path="students" element={<Signin />} />
      </Route>

    </Routes>
    
    </>
  )
}
export default Index;
