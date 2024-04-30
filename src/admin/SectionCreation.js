import React, { useState } from "react";
import axios from "axios";
import "./form.css";
import config from "../config";
export default function SectionRegistration() {
  const [formData, setFormData] = useState({
    sectionCode: "",
    academicYear: "",
    department: "",
    capacity: "",
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
        `${config.url}/insertsection`,
        formData
      );
      if (response.status === 200) {
        setFormData({ sectionCode: "", academicYear: "", department: "", capacity: "" });
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
      <h2>Section Registration</h2>
      {message ? <h4>{message}</h4> : <h4>{error}</h4>}
      <div className="inner-container">
        <form onSubmit={handleSubmit}>
          <div className="personal-details">
            <label>Section Code</label>
            <input
              type="text"
              id="sectionCode"
              value={formData.sectionCode}
              onChange={handleChange}
              required
            />
          </div>
          <div className="personal-details">
            <label>Academic Year</label>
            <input
              type="number"
              id="academicYear"
              value={formData.academicYear}
              onChange={handleChange}
              required
            />
          </div>
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
            <label>Capacity</label>
            <input
              type="number"
              id="capacity"
              value={formData.capacity}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
