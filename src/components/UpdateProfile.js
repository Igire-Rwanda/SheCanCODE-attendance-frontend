import React from 'react'
import { Link } from 'react-router-dom'

function UpdateProfile() {
  return (
    <>
    
<div class="flex items-center justify-center p-12">
 
  <div class="mx-auto w-full max-w-[550px]">
    <form action="https://formbold.com/s/FORM_ID" method="POST">
      <div class="mb-5">
        <label
          for="name"
          class="mb-3 block text-base font-medium text-[#07074D]"
        >
          First Name
        </label>
        <input
          type="text"
          name="fname"
          id="fname"
          placeholder="first name"
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div class="mb-5">
        <label
          for="lname"
          class="mb-3 block text-base font-medium text-[#07074D]"
        >
          Last Name
        </label>
        <input
          type="text"
          name="lname"
          id="lname"
          placeholder="Last name"
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div class="mb-5">
        <label
          for="phone"
          class="mb-3 block text-base font-medium text-[#07074D]"
        >
          Phone number
        </label>
        <input
          type="number"
          name="phone"
          id="phone"
          placeholder="Enter your phone"
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div class="mb-5">
        <label
          for="email"
          class="mb-3 block text-base font-medium text-[#07074D]"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your Email"
          class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div>
      <Link to="/dashboard/Mentors">
        <button
          class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
        >
          Update
        </button></Link>
      </div>
    </form>
  </div>
</div>
    </>
  )
}

export default UpdateProfile