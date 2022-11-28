import React from "react";
import {Routes, Route} from "react-router-dom"
import Home from "../views/home";
// import DashLayout from "../components/Dashboard/Layout"
import View from "../views/Dashboard/DashLayout"
import AddStudent from "../components/pages/AddStudent";
import Decision from "../components/DecisionMaking/Decision";

const Index = () =>{
  return(
    <>
  
    <Routes>
      <Route path= "/" element = {<Home/>} />
      <Route path= "home" element = {<Home/>} />
      <Route path= "/Dashboard" element = {<View/>} />
      <Route path= "/AddStudent" element = {<AddStudent/>} />
      <Route path= "/Decision" element = {<Decision/>} />
    </Routes>
    
    </>
  )
}
export default Index;
