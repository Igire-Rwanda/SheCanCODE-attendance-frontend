import React from 'react';
import axios from 'axios';
// import {Link} from "react-router-dom";
import { useState, useEffect } from 'react';
import moment from 'moment'


const TakeAttendance = () => {

  const [attend, setAttend] = useState([])
  const [attendanceRecords, setAttendanceRecords] = useState([])

  const getAttend = async (data) => {
    const response = await axios.get("http://localhost:4040/v1/attendance/student/getAllStudent", data)
    setAttend(response.data.data);

  }
  useEffect(() => {
    if(!attend[0]){
      getAttend();
    }
  }, [attend])

  useEffect(() => {

    const data = attend.map((att) => {
      return { user: att._id, student: att._id, status: 'pending', Date: moment().format() }
    });
    setAttendanceRecords(data);

  }, [attend])

  const changeAtt=(e,id)=>{

    const data = attendanceRecords.map((att) => {
      if(att.student==id){
        return {...att,status:e.target.value }
      }else{
        return {  ...att }
      }
    });

    setAttendanceRecords(data);

  }

  const saveAttendace= async()=>{
    const response = await axios.post("http://localhost:4040/v1/attendance/attendance/createMany", attendanceRecords)

  }

  return (
    <div>
      <div class="md:px-32 py-8 w-full">
        <div class="shadow overflow-hidden rounded border-b border-gray-200">
          <button onClick={saveAttendace} class="bg-gray-800 py-3 px-4 text-white  float-right ... ">Save Attendance</button>
          <table class="min-w-full bg-white mt-20">
            <thead class="bg-gray-800 text-white">
              <tr>
                <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm flex space-x-4 ...">First name</th>
                <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">Last name</th>
                <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Phone</th>
                <th class="text-left py-3 px-4 uppercase font-semibold text-sm">Email</th>
                <th class="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm flex space-x-4 ...">Status</th>

              </tr>
            </thead>
            <tbody class="text-gray-700">
              {attend.map((members) => (
                <tr>
                  <td class="w-1/3 text-left py-3 px-4">{members?.firstName}</td>
                  <td class="w-1/3 text-left py-3 px-4">{members?.lastName}</td>
                  <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="tel:622322662">{members?.phone}</a></td>
                  <td class="text-left py-3 px-4"><a class="hover:text-blue-500" href="mailto:jonsmith@mail.com">{members?.email}</a></td>
                  <div class="custom-select" style={{ width: "200px" }}>
                    <select onChange={(e) => changeAtt(e, members._id)}>
                      <option value="pending">Pending</option>
                      <option value="accepted">Present</option>
                      <option value="declined">Absent</option>

                    </select>
                  </div>
                </tr>))}



            </tbody>
          </table>
        </div>
      </div>


    </div>
  )
}

export default TakeAttendance
