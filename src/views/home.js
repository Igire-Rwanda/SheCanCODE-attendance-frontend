import React from "react";
import "./home.css"
import timeSchedule from "../assets/image/timeSchedule.jpeg"
import HomeLAyout from "../components/HomeLayout";




const Home = () =>{
  return (
    <>
   
    <HomeLAyout>
       <div className="homeContainer">
       
          <div className="bodyImage1" >
            <img src= {timeSchedule} alt="" style={{width:1750,height:695,opacity:0.5,objectFit:"cover"}} />
           <div className="bodytext">
               <h1 className="text1">SheCanCode Attendance System</h1>
               {/* <h2 className="text2"> Leave of Absence here </h2> */}
               <p className="text3">
                Do your attendance request here and <br/>
                other actions can be made as needed
               </p>
           </div>
           <div className="button1">
            <a href="/"> View Status </a>
           </div>
           <div className="button2">
            <a href="/"> Ask Attendance</a>
           </div>
           
          </div>
        <div className="bodyImage2">
        <div className="photo">
          {/* <div className="PermissionCard"> */}
          <p>Rise Above  Expectations ,<br/>
                She Can Code provides<br/>
            training to young Rwandan <br/>women 18 -25 years with<br/>
            skills to code,<br/> build web design,<br/> and applications</p>
            <div className="PermissionButton">
            <a href="/"> Ask Permission </a>
           </div>
           {/* </div> */}
              <div className="photo1"></div>
              <div className="photo2"></div>
              <div className="photo3"></div>
            </div>
        </div>

         <div className="bodyImage3">
          <p>    This System make it easy to be <br/>on attendance list and <br/>
                  visualise your Status,<br/>see the details of <br/>your attendance</p>
              <div className="CheckStatusButton">
               <a href="/"> Check Status </a>
                </div>
              <div className="statusImage">
                <video  autoPlay loop muted><source src="https://res.cloudinary.com/dggvxdkri/video/upload/v1665433858/samples/Attendance%20pict/stock-footage-metaverse-business-meeting-conference-finance-business-stock-exchange-crypto-blockchain-data_eb0jzh.webm" 
              style={{width:"700",height:"400"}}
               />
              
              </video>
              </div>
         </div>


        
       </div>

    </HomeLAyout>
    </>
  )
}
export default Home;