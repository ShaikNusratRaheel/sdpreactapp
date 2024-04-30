import React from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
//import profile from './logo.svg'
import "./studentnavbar.css";
import ViewCourseS from './ViewCourseS';
import StudentProfile from './StudentProfile';
import StudentTimetable from './StudentTimetable';
import ViewAssignmentS from './ViewAssignmentS';


export default function StudentHome() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isStudentLoggedIn');
    localStorage.removeItem('student');

    navigate('https://studentcmsystem.netlify.app/login');
    window.location.reload()
  };
  return (
    <div>
      <nav>
        <div className="navvbar">
          <h1 style={{ fontSize: "20pt", color: "White", marginLeft: 0 }}>
            Acadamex
          </h1>

          <table className="menu">
            {/* <td>
              <Link to="/">Home</Link>&nbsp;&nbsp;
            </td>
            <td>
              <Link to="/about">About</Link>&nbsp;&nbsp;
            </td>
            <td>
              <Link to="/contact">Contact</Link>&nbsp;&nbsp;
            </td>
            <td>
              <Link to="/login">Login</Link>&nbsp;&nbsp;
            </td> */}
          </table>
        </div>
      </nav>
      <ul className="navbar">
        <li>
          <Link to="/studenthome">Home</Link>
        </li>
        <li>
          <Link to="/studentprofile">Profile</Link>
        </li>
        <li>
          <Link to="/sviewattendance">Attendance</Link>
        </li>
        <li>
          <Link to="/sviewtimetable">Timetable</Link>
        </li>
        <li>
          <Link to="/viewcourses">Courses</Link>
        </li>
        <li>
          <Link to="/sviewassignments">Assignments</Link>
        </li>
        <li>
          <Link to="/results">Results</Link>
        </li>
        <li>
          <Link to="/feedback">Feedback</Link>
        </li>

        <br />
        <br />

        <br />

        <br />
        <li>
          <Link to="/Settings">Settings</Link>
        </li>
        <li><button className="logoutButton" onClick={handleLogout}>Logout</button></li>
      </ul>
      <Routes>
      <Route path="/viewcourses" Component={ViewCourseS} exact /> 
      <Route path="/studentprofile" element={<StudentProfile />}></Route>
      <Route path="/sviewtimetable" element={<StudentTimetable />}></Route>
      <Route path="/sviewassignments" element={<ViewAssignmentS />}></Route>

      </Routes>
    </div>
  );
}
