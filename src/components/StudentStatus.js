import TakeAttendance from './TakeAttendance';
import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment'
const TeamMembers = () => {
  


    const [getData, setgetData] = useState([])
    const getDataAll =async (data)=>{
        const response = await axios.get("http://localhost:4040/v1/attendance/attendance/getAll",data)
        console.log(response.data.data)
        setgetData (response.data.data);

    }
    useEffect(()=>{
      getDataAll();
    },[])

     
     
  return (
    <div>
      
      
      
      <div class=" py-8 w-full">
  <div class="shadow overflow-hidden rounded border-b border-gray-200">
  <Link to ="/dashboard/TakeAttendance"><button class="bg-gray-800 py-3 px-4 text-white  float-right ..." onClick={<TakeAttendance/>}>Take Attendance</button></Link>
    <table class="w-full bg-white mt-20">
      <thead class="bg-gray-800 text-white">
        <tr>
        <th class=" w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">First Name</th>
                <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Last name</th>
                <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Phone</th>
                <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Email</th>
                <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Status</th>
                <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Date</th>
        </tr>
      </thead>
    <tbody class="text-gray-700">

    {getData.map((member) =>(
      
      <tr>
        <td class="text-left py-3 px-4">{member?.student?.firstName}</td>
        <td class="text-left py-3 px-4">{member?.student?.lastName}</td>
        <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="tel:622322662">{member?.student?.phone}</a></td>
        <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="mailto:jonsmith@mail.com">{member?.student?.email}</a></td>
        <td class="text-left py-3 px-4">{member?.status}</td>
        <td class="text-left py-3 px-4">{moment(member.Date).format('MM/DD/YYYY')}</td>
      </tr> ))}

      
    </tbody>
    </table>
  </div>
  



</div>

                            
               
                        
       
    </div>
  )
}

export default TeamMembers
