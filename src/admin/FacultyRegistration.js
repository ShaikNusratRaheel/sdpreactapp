import React, { useState } from "react";
import axios from "axios";
import "./form.css";
import config from "../config";
export default function FacultyRegistration() {
  const [formData, setFormData] = useState({
    facultyid: "",
    fullname: "",
    gender: "",
    department: "",
    designation: "",
    email: "",
    contact: "",
    address: "",
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
        `${config.url}/insertfaculty`,
        formData
      );
      if (response.status === 200) {
        setFormData({
          facultyid: "",
          fullname: "",
          gender: "",
          department: "",
          designation: "",
          email: "",
          contact: "",
          address: "",
        });
      }
      setMessage(response.data);
      setError(""); // set error to ""
    } catch (error) {
      setError(error.response.data);
      setMessage(""); //set message to ""
    }
  };

  return (
    <div className="registration-container">
      <h2>Faculty Registration</h2>
      {message ? <h4>{message}</h4> : <h4>{error}</h4>}
      <div className="inner-container">
        <form onSubmit={handleSubmit}>
          <div className="three-details-item">
            <div className="personal-details">
              <label>Faculty ID</label>
              <input
                type="number"
                id="facultyid"
                value={formData.facultyid}
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
              <label>Designation</label>
              <select
                id="designation"
                value={formData.designation}
                onChange={handleChange}
                required
              >
                <option value="">Select Designation</option>
                <option value="PHD">B.Tech</option>
                <option value="MTECH">M.Tech</option>
              </select>
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
            <div className="personal-details">
              <label>Address</label>
              <input
                type="text"
                id="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <button type="submit" className="submit-btn">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
