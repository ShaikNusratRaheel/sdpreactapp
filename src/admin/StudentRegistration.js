import React, { useState } from "react";
import axios from "axios";
import "./form.css";
import config from "../config";
export default function StudentRegistration() {
  const [formData, setFormData] = useState({
    studentid: "",
    fullname: "",
    gender: "",
    department: "",
    program: "",
    semester: "",
    year: "",
    dateofbirth: "",
    email: "",
    contact: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${config.url}/insertstudent`,
        formData
      );
      if (response.status === 200) {
        setFormData({
          studentid: "",
          fullname: "",
          gender: "",
          department: "",
          program: "",
          semester: "",
          year: "",
          dateofbirth: "",
          email: "",
          contact: "",
        });
      }
      setMessage(response.data);
      setError("");
    } catch (error) {
      setError(error.response.data);
      setMessage("");
    }
  };

  return (
    <div className="registration-container">
      <header>
        <h2 style={{ textAlign: "center" }}>Student Registration Form</h2>
      </header>

      {message ? (
        <h4 align="center">{message}</h4>
      ) : (
        <h4 align="center">{error}</h4>
      )}
      <div className="inner-container">
        <form onSubmit={handleSubmit}>
          <div className="three-details-item">
            <div className="personal-details">
              <label>Student ID</label>
              <input
                type="number"
                id="studentid"
                value={formData.studentid}
                onChange={handleChange}
                required
              />
            </div>
            <div className="personal-details">
              <label>Full Name</label>
              <input
                type="text"
                id="fullname"
                value={formData.fullname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="personal-details">
              <label>Gender</label>
              <select
                id="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div className="three-details-item">
            <div className="personal-details">
              <label>Department</label>
              <select
                id="department"
                value={formData.department}
                onChange={handleChange}
                required
              >
                <option value="">Select Department</option>
                <option value="CSE">CSE</option>
                <option value="ECE">ECE</option>
                <option value="MECH">MECH</option>
                <option value="CIVIL">CIVIL</option>
              </select>
            </div>
            <div className="personal-details">
              <label>Program</label>
              <select
                id="program"
                value={formData.program}
                onChange={handleChange}
                required
              >
                <option value="">Select Program</option>
                <option value="BTECH">B.Tech</option>
                <option value="MTECH">M.Tech</option>
              </select>
            </div>
            <div className="personal-details">
              <label>Semester</label>
              <select
                id="semester"
                value={formData.semester}
                onChange={handleChange}
                required
              >
                <option value="">Select Semester</option>
                <option value="ODD">ODD</option>
                <option value="EVEN">EVEN</option>
              </select>
            </div>
          </div>
          <div className="three-details-item">
            <div className="personal-details">
              <label>Year</label>
              <input
                type="number"
                id="year"
                value={formData.year}
                onChange={handleChange}
                required
              />
            </div>
            <div className="personal-details">
              <label>Date of Birth</label>
              <input
                type="date"
                id="dateofbirth"
                value={formData.dateofbirth}
                onChange={handleChange}
                required
              />
            </div>
            <div className="personal-details">
              <label>Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="three-details-item">
            <div className="personal-details">
              <label>Contact</label>
              <input
                type="number"
                id="contact"
                value={formData.contact}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <button className="submit-btn" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
