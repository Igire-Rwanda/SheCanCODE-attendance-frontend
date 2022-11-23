import React from 'react'
import Navbar from '../HomePage/Navbar'
import FooterB from './FooterB'


function Home() {
  return (
    <>
       
          <Navbar/>
      
       <div className='mt-50'>
          <div className=" scroll-smooth hover:scroll-auto " >
          
            <img src="https://res.cloudinary.com/dggvxdkri/image/upload/v1665065736/samples/Attendance%20pict/timeSchedule_l0bkbl.jpg"
             alt="" style={{width:1350,height:695,objectFit:"cover"}}></img>
           
           {/* <h1 className="text-3xl ">SheCanCode Attendance System</h1>
           <h2 className="text2"> Leave of Absence here </h2>
               <p className="text3">
                Do your attendance request here and <br/>
                other actions can be made as needed
               </p>
               <div className="button1">
            <a href="/"> View Status </a>
           </div>
           <div className="button2">
            <a href="/"> Ask Attendance</a>
           </div> */}
           </div>
           </div>
           <div className='box2 bg-blue-300' style={{width:1350,height:500}}>

           </div>

           <div className='box3 bg-gray-900' style={{width:1350,height:200}}>
            <FooterB/>

           </div>
  
  
          

    
    </>
  )
}

export default Home