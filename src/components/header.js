import React from "react";
import "./header.css";
import logo from "../assets/logos1.png";
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import { faBars } from "@fortawesome/free-solid-svg-icons" 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Header = () =>{
  const SearchIconWrapper  = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));
    return(
        <>
      <div className ="headerContainer">
        <div className="logo">
     <img src= {logo} alt="logo images" className="logo-header" />
     </div>
     <div className="navBar">
          <a href="/home">Home</a>
          <a href="/sign in"> Sign In</a>
          <a href="/contactus">Contact Us</a>
          {/* <a href="/log out">Logout</a> */}
        
     </div>
     <div className="leftHeder">
     <div className="search">
     
            <SearchIconWrapper>

              <SearchIcon />
            </SearchIconWrapper>
          
     </div>
     <div className="menuIcon">
      <ul>
     <li><FontAwesomeIcon icon={faBars} style={{ fontSize: "16px" }} /> </li>
             
            </ul>
    
     </div>
     </div>
     </div>
      
        </>
    )
    }

export default Header;
