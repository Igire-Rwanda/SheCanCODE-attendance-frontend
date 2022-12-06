import React from 'react'

const AddclassName = () => {
  
  return (
    <div>
        
<div className="bg-white mx-20 mt-20 shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col w-50">
    <div className="mb-4">
      <label className="block text-grey-darker text-sm font-bold mb-2 text-xl" for="username">
        Classname:
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker " required="please enter the classname" type="text" />
    </div>
    <div className="mb-4">
      <label className="block text-grey-darker text-sm font-bold mb-2 text-xl"  for="username">
        Icon:
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"  required="please enter the Icon" type="file"/>
    </div>
    <div className="mb-6">
      <label className="block text-grey-darker text-sm font-bold mb-2 text-xl" for="password">
        Cohort:
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" required="please enter the cohort" type="text" />
    </div>
    <button
          class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
        >
          Submit
        </button>
    </div>
    </div>
  )
}

export default AddclassName