import React from "react";
import { Routes, Route } from "react-router-dom"
import Home from "../views/home";
import Header from "../components/header";
import SignIn from "../views/signin";
import RegisterStudents from "../components/MentorDashboard/registeringStudentsDashboard";
import AttendancePage from "../components/MentorDashboard/attendancePage";
import MentorDashoard from "../components/MentorDashboard/mainDashboard";
import Permissions from "../components/MentorDashboard/Permission";
const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="/header" element={<Header />} />
      <Route path="/signin" element={<SignIn />} />

      <Route path="/registeringstudents" element={<RegisterStudents />} />

      <Route path="/attendancePage" element={<AttendancePage />} />
      <Route path="/maindashboard" element={<MentorDashoard />} />
      <Route path="/permission" element={< Permissions/>} />
    
    </Routes>
  )
}
export default Index;
