import React from "react";
import {Routes, Route} from "react-router-dom"
import Home from "../views/home";
import View from "../views/Dashboard/StudentDashboard";




const Index = () =>{
 
  return(
   
    <Routes>
      <Route path= "/" element = {<Home/>} />
      <Route path= "home" element = {<Home/>} />
      <Route path= "/student" element ={<View/>} />

    </Routes>


  )
}
export default Index;
