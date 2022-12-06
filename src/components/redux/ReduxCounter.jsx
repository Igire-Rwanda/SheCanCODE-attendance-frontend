import React from 'react'
import { increaseValue } from './actionCreator'
import { decreaseValue } from './actionCreator'
import {useSelector,useDispatch} from 'react-redux'


const ReduxCounter = () => {
    const myState =useSelector(state=>state.ourState.count)
    const dispatch=useDispatch()
console.log( " myState " ,myState) 
 return (
    <div>
      <div className="flex justify-center w-max mx-auto p-5 rounded border-2 border-gray-200 mt-10">
           <button onClick={()=>dispatch(increaseValue())}  className="border-2 border-transparent bg-blue-400 shadow-lg ml-3 py-2 px-4 font-bold uppercase text-gray rounded transition-all hover:border-blue-400 hover:bg-transparent hover:text-blue-500">
            increment
            </button>

            <button onClick={()=>dispatch(decreaseValue ())} className="border-2 border-transparent bg-gray-800   shadow-lg ml-3 py-2 px-4 font-bold uppercase text-white rounded transition-all hover:border-gray-800 hover:bg-transparent hover:text-blue-500">
            decrement
            </button>
   <h1 className='pl-5'>
   {myState}
   </h1>

            </div>
    </div>
  )
}

export default ReduxCounter
