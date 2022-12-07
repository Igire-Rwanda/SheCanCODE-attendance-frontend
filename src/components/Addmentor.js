import axios from "axios";
import React from "react"
import {useForm} from "react-hook-form";



function Addmentor() {
    
    const  { register,handleSubmit,formState: { errors }
      } = useForm();
      const onSubmit = async (data) => {
        console.log(JSON.stringify(data));
        const response =await axios.post('http://localhost:1000/v1/attendance/user/mentors',data);
         };
  return (

    <>
    
<div className="flex items-center justify-center p-12">

 
  <div className="mx-auto w-full max-w-[550px]">
    <form action="https://formbold.com/s/FORM_ID" onSubmit={handleSubmit(onSubmit)} method="POST">
      <div className="-mx-3 flex flex-wrap">
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label
              for="fName"
              className="mb-3 block text-base font-medium text-[#07074D] required"
            >
              First Name
            </label>
            <input
              type="text"
              name="fName"
              id="fName"
              placeholder="First Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
               {...register("fName", { required: "First Name is required" })} />
          </div>
          {errors.fName && <p className="text-red-700" role="alert">{errors.fName?.message}</p>}
          
        </div>
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label
              for="lName"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Last Name
            </label>
            <input
              type="text"
              name="lName"
              id="lName"
              placeholder="Last Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              {...register("lName", { required: "Last Name is required" })}
               />
          </div>
          {errors.lName && <p className="text-red-700" role="alert">{errors.lName?.message}</p>}
        </div>
      </div>
      <div className="mb-5">
        <label
          for="phone"
          className="mb-3 block text-base font-medium text-[#07074D]" 
        >
          phone
        </label>
        <input
          type="number"
          name="phone"
          id="phone"
          placeholder="+250"
         
          className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
          {...register("phone", { required: "Phone is required" })}
        />
      </div>
      {errors.phone && <p className="text-red-700" role="alert">{errors.phone?.message}</p>}

      <div className="-mx-3 flex flex-wrap">
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label
              for="email"
              className="mb-3 block text-base font-medium text-[#07074D]"
            required>
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md required"
              {...register("email", { required: "Email is required" })}
               />
          </div>
          {errors.email && <p className="text-red-700" role="alert">{errors.email?.message}</p>}

        </div>
        
      </div>

      

      <div>
        <button type="submit" className=" rounded-md bg-gray-800 py-3 px-8 text-center text-base font-semibold text-white outline-none"
        >
          Savementor
        </button>
      </div>
    </form>
  </div>
</div>

    </>
  )
}

export default Addmentor
