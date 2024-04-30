import React from "react";
import {  Link, Route, Routes, useNavigate} from "react-router-dom";
//import profile from './logo.svg'
import "./facultynavbar.css";
import PostAssignment from "./PostAssignment";
import ViewAssignment from "./ViewAssignment";
import FacultyProfile from "./FacultyProfile";
import FacultyTimetable from './FacultyTimetable';
import ViewCourseF from './ViewCourseF';


export default function FacultyHome() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isFacultyLoggedIn');
    localStorage.removeItem('faculty');

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
          <Link to="/facultyhome">Home</Link>
        </li>
        <li>
          <Link to="/facultyprofile">Profile</Link>
        </li>
        <li>
          <Link to="/markattendance">Attendance</Link>
        </li>
        <li>
          <Link to="/postassignment">Post Assignment</Link>
        </li>
        <li>
          <Link to="/viewassignment">View Assignment</Link>
        </li>
        <li>
          <Link to="/fviewtimetable">Timetable</Link>
        </li>
        <li>
          <Link to="/viewcoursef">Courses</Link>
        </li>
        <li>
          <Link to="/graderesults">Grading</Link>
        </li>
        <li>
          <Link to="/viewfeedback">Feedback</Link>
        </li>
        <br />

        <br />

        <br />

        <br />
        <li>
          <Link to="/Settings">Settings</Link>
        </li>
        <li>
        <li><button className="logoutButton" onClick={handleLogout}>Logout</button></li>
        </li>
      </ul>
      <Routes>
      <Route path="/facultyprofile" Component={FacultyProfile} exact />
      <Route path="/fviewtimetable" Component={FacultyTimetable} exact />
        <Route path="/postassignment" Component={PostAssignment} exact />
        <Route path="/viewassignment" Component={ViewAssignment} exact />
        <Route path="/viewcoursef" Component={ViewCourseF} exact />
      </Routes>
    </div>
  );
}