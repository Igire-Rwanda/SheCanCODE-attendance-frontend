import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../views/home";
// import DashLayout from "../components/Dashboard/Layout"
import View from "../views/Dashboard/DashLayout";
// import AddStudent from "../components/AddStudent/AddStudent";
import Signin from "../components/Forms/Signin";
import AdminDashboard from "../views/Dashboard/AdminDashboard";
import Statistics from "../components/Statistics";
import Redux from "../components/redux/actionType";
import ReduxCounter from "../components/redux/ReduxCounter";
import Class from "../views/Dashboard/Class";
import Student from "../components/pages/Student";
import AddClass from "../components/pages/AddClass";



const Index = () =>{
  return(
    <>
    
    <Routes>
      <Route path= "/" element = {<Home/>} />
      <Route path= "home" element = {<Home/>} />
      {/* <Route path= "/Dashboard" element = {<View/>} /> */}
      <Route path= "/signin" element = {<Signin/>} />
      {/* <Route path="/addstudent" element={<AddStudent/>}/> */}
      <Route path="/dashboard" element={<AdminDashboard/>}>
      <Route path="" element={<Statistics />} />
        <Route path="students" element={<Signin />} />
      <Route path ="counter" element={<ReduxCounter/>}/>
      <Route path ="Class" element={<Class/>}/>
      <Route path ="AddClass" element={<AddClass/>}/>
      <Route path ="Student" element={<Student/>}/>
      </Route>

    </Routes>
    
    </>
  )
}
export default Index;
