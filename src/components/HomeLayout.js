import React from "react";
import Footer from "./footer";
import Header from "../components/header";
const HomeLAyout = ({children}) =>{
  return(
    <>
    
    <div className="HomeLayout-container">
      <Header></Header>
      <div style ={{minheight:"250vh"}} >
        {children}
      </div>
      <Footer></Footer>
    </div>
    </>
  )
  
}
export default HomeLAyout;