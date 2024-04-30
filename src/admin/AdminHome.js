import React from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
//import profile from './logo.svg'
import "./adminnavbar.css";
import CreateCourse from "./CreateCourse";
import FacultyRegistration from "./FacultyRegistration";
import StudentRegistration from "./StudentRegistration";
import ViewStudents from "./ViewStudents";
import ViewFaculty from "./ViewFaculty";
import AdminProfile from './AdminProfile';
import ViewCourse from './ViewCourse';
import SectionCreation from './SectionCreation';  
import AllocateCourse from './AllocateCourse';
import ViewCourseFacultyMap from "./ViewCourseFacultyMap";


export default function AdminHome() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    localStorage.removeItem('admin');

    navigate('/login');
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
          <Link to="/adminhome">Home</Link>
        </li>
        <li>
          <Link to="/adminprofile">Profile</Link>
        </li>
        <li>
          <Link to="/registerstudent">Register Students</Link>
        </li>
        <li>
          <Link to="/registerfaculty">Register Faculty</Link>
        </li>
        <li>
          <Link to="/viewstudent">View Students</Link>
        </li>
        <li>
          <Link to="/viewfaculty">View Faculty</Link>
        </li>
        <li>
          <Link to="/alterattendance">Attendance</Link>
        </li>

        <li>
          <Link to="/createcourse">Create Courses</Link>
        </li>
        <li>
          <Link to="/createsection">Create Section</Link>
        </li>
        <li>
          <Link to="/viewcourse">View Course</Link>
        </li>

        <li>
          <Link to="/allocate">Course allocation</Link>
        </li>
        <li>
          <Link to="/viewcoursefacmap">View Course-Faculty</Link>
        </li>
        <li><button className="logoutButton" onClick={handleLogout}>Logout</button></li>
      </ul>
      <Routes>
        <Route path="/adminprofile" Component={AdminProfile} exact />
        <Route path="/createcourse" Component={CreateCourse} exact /> 
        <Route path="/registerfaculty" Component={FacultyRegistration} exact />
        <Route path="/registerstudent" Component={StudentRegistration} exact />
        <Route path="/createsection" Component={SectionCreation} exact />
        <Route path="/viewstudent" Component={ViewStudents} exact />
        <Route path="/viewfaculty" Component={ViewFaculty} exact />
        <Route path="/viewcourse" Component={ViewCourse} exact />
        <Route path="/allocate" Component={AllocateCourse} exact />
        <Route path="/viewcoursefacmap" Component={ViewCourseFacultyMap} exact />
 
      </Routes>
    </div>
  );
}
