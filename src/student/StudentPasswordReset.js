import React, { useState } from "react";
import axios from "axios";
import StudentPasswordResetForm from "./StudentPasswordResetForm";
import "../main/passwordreset.css";
import config from "../config";

export default function StudentPasswordReset() {
  const [formData, setFormData] = useState({ studentid: "" });
  const [error, setError] = useState("");
  const [flag, setFlag] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.url}/checkstudentid`, {
        studentid: formData.studentid,
      });
      if (response.data) {
        setFlag(true);
        setMessage("");
        setError("");
      } else {
        setFlag(false);
        setMessage("studentid not found");
        setError("");
      }
    } catch (error) {
      setError(error.message);
      setMessage("");
    }
  };

  return (
    <div className="reset-password-container">
      {message ? (
        <h4 align="center">{message}</h4>
      ) : (
        <h4 align="center">{error}</h4>
      )}
      <h3 align="center">
        <u>Reset Password</u>
      </h3>
      {!flag ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Enter studentid</label>
            <input
              type="text"
              name="studentid"
              value={formData.studentid}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Reset Password</button>
        </form>
      ) : (
        <StudentPasswordResetForm studentid={formData.studentid} />
      )}
    </div>
  );
}
