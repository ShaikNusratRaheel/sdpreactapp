import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import "./navbar.css";


export default function MainNavBar({onAdminLogin,onStudentLogin,onFacultyLogin}) {
  return (
    <div>
      <nav>
        <div className="navvbar">
          <h1 style={{ fontSize: "20pt", color: "White", marginLeft: 0 }}>
            Acadamex
          </h1>
          <table className="menu">
            <td>
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
            </td>
          </table>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} exact />
        <Route path="/contact" element={<Contact />} exact />
        <Route path="/login" element={<Login onAdminLogin={onAdminLogin} onStudentLogin={onStudentLogin} onFacultyLogin={onFacultyLogin}/>} exact/>
      </Routes>
    </div>
  );
}
