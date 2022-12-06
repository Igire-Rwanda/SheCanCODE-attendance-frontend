import React, { useState } from 'react'
   
 
const Student = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage]= useState("");

  const emailValidation = () =>{
   const regEx= /[a-zA-Z0-9._%+-]+@[a-z0-9.=]+\.[a-z]{2,8}(.[a-z{2,8}])?/g
   if(regEx.test(email)){
    setMessage("Email is valid ");
   }
   else{
    setMessage("Email is not valid ");
   }
  }
 
  const handleEmailInputChange = (e) =>{
    setEmail(e.target.value);
  };
  
  

  return (   
<div className="bg-blue-300 h-screen overflow-hidden flex items-center justify-center">
  <div className="bg-white lg:w-5/12 md:6/12 w-50 h-50 shadow-3xl">
  
    <form className="p-12 md:p-24" >
      <div className=" items-center text-lg mb-6 md:mb-8">
      <div className="flex">
        <textarea onChange={handleEmailInputChange} value={ email} className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full" type="text" placeholder='email@gmail.com' name="email"></textarea>
         
      <button onClick={emailValidation} className="bg-gradient-to-b from-gray-600 to-gray-900 mx-2  w-25 font-medium p-2 md:p-4 text-white uppercase w-full">ADD
      </button></div>
      <p className='mt-10 text-center'>{message}</p>
         </div>
    </form>
  </div>
 </div>
  )
}

export default Student