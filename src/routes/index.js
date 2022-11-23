import React from "react";
import {Routes, Route} from "react-router-dom"
import View from "../views/Dashboard/DashLayout"
import Signin from "../components/Forms/Signin";
import HomePage from "../components/HomePage/HomePage"


const Index = () =>{
  return(
    <>
  
    <Routes>
      <Route path= "/" element = {<HomePage/>} />
      <Route path= "/Dashboard" element = {<View/>} />
      <Route path= "/signin" element = {<Signin/>} />

    </Routes>
    
    </>
  )
}
export default Index;
