import React from "react";
import { Route, Routes } from "react-router-dom";
// import DashLayout from "../components/Dashboard/Layout"

// import AddStudent from "../components/AddStudent/AddStudent";
import Signin from "../components/Forms/Signin";
import AdminDashboard from "../views/Dashboard/AdminDashboard";
import Statistics from "../components/Statistics";
import Redux from "../components/redux/actionType";
import ReduxCounter from "../components/redux/ReduxCounter";
import Mentors from "../components/Mentors";
import SuperAdmin from "../views/Dashboard/SuperAdmin";
import Addmentor from "../components/Addmentor";
import StudentForm from "../views/Dashboard/StudentForm";
import StudentStatus from "../components/StudentStatus";
import TakeAttendance from "../components/TakeAttendance";
import Permission from "../components/Permissions";
import HomePage from "../components/HomePage/HomePage";





const Index = () => {
  return (
    <>
   


      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="home" element={<Home />} /> */}
        {/* <Route path= "/Dashboard" element = {<View/>} /> */}
        <Route path="/signin" element={<Signin />} />
        {/* <Route path="/addstudent" element={<AddStudent/>}/> */}
        <Route path="/dashboard" element={<AdminDashboard />}>
          <Route path="" element={<Statistics />} />
          <Route path="students" element={<SuperAdmin />} />
          <Route path="counter" element={<ReduxCounter />} />
          <Route path="mentors" element={<Mentors />} />
          <Route path="StudentForm" element={<StudentForm />} />
          <Route path="" element={<Statistics />} />
          <Route path="Addmentor" element={<Addmentor />} />
          <Route path="mentors" element={<Mentors />} />

          <Route path="view" element={<StudentStatus />} />
          <Route path="TakeAttendance" element={<TakeAttendance/>}></Route>
          <Route path="Permissions" element={<Permission/>} ></Route>

        </Route>


      </Routes>




    </>
  )
}
export default Index;
