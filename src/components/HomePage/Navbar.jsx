import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>

<div className="flex flex-wrap">
  <section className="relative mx-auto drop-shadow-lg border-solid">
      
    <nav className="flex justify-between bg-white w-screen">
      <div className="px-5 xl:px-5 py-6 flex w-full items-center">
        <a className="text-3xl font-bold font-heading" href="#">
          <img className="h-20" src="https://res.cloudinary.com/dggvxdkri/image/upload/v1665065641/samples/Attendance%20pict/logos1_v3xdrc.png" alt="logo"></img> 
        </a>
     
      
        <ul className="hidden md:flex px-10 mx-auto pt-10 text-3xl font-semibold font-heading space-x-20">
          <li><Link className="text-gray-900 no-underline hover:text-gray-200" to="/">Home</Link></li>
          <li><Link className="text-gray-900 no-underline hover:text-gray-200" to="/signin">Sign In</Link></li>
          <li><Link className="text-gray-900 no-underline hover:text-gray-200" to="/">Contact Us</Link></li>
        </ul>
        
        <div className="hidden xl:flex items-center space-x-5 items-center">
               
          <a className="flex items-center hover:text-gray-200" href="#">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            <span className="flex absolute -mt-5 ml-4">
              <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
                </span>
              </span>
          </a>
          
        </div>
      </div>
      {/* Responsive navbar */}
     
      <a className="navbar-burger self-center mr-12 xl:hidden" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        <span className="flex absolute -mt-5 ml-4">
          <span className="animate-ping absolute inline-flex h-2 w-3 rounded-full bg-pink-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-3 bg-pink-500">
          </span>
        </span>
      </a>
    </nav>
  </section>

</div>

    </>
  )
}

export default Navbar