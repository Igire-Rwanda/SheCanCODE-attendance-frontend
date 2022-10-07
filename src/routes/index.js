import React from "react";
import {Routes, Route} from "react-router-dom"
import Home from "../views/home";
import Header from "../components/header";


const Index = () =>{
  return(
    <Routes>
      <Route path= "/" element = {<Home/>} />
      <Route path= "home" element = {<Home/>} />
      <Route path="/header" element ={<Header/>}/>

    </Routes>
  )
}
export default Index;
