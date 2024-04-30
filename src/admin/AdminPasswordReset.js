import React, { useState } from "react";
import axios from "axios";
import AdminPasswordResetForm from "./AdminPasswordResetForm";
import "../main/passwordreset.css";
import config from "../config";

export default function AdminPasswordReset() {
  const [formData, setFormData] = useState({ username: "" });
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
      const response = await axios.post(`${config.url}/checkusername`, {
        username: formData.username,
      });
      if (response.data) {
        setFlag(true);
        setMessage("")
        setError("");
      } else {
        setFlag(false);
        setMessage("Username not found");
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
            <label>Enter Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Reset Password</button>
        </form>
      ) : (
        <AdminPasswordResetForm username={formData.username} />
      )}
    </div>
  );
}
