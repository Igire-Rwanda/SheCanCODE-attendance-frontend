import React from "react";
import "./header.css";
import logo from "../assets/logoss.png";

const Header = () =>{
 
    return(
        <>
      <div className ="headerContainer">
        <div className="logo">
     <img src= {logo} alt="logo images" className="logo-header" />
     </div>
     <div className="navBar">
          <a href="/home">Home</a>
          <a href="/contactus">Contact Us</a>
          <a href="/sign in"> Sign In</a>
          
        
     </div>
     <div className="menu">

     
    </div>
     </div>
    
      
        </>
    )
    }
  
export default Header;
