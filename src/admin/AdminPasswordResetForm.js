import React, { useState } from "react";
import axios from "axios";
import "../main/passwordreset.css";
import config from "../config";
export default function AdminPasswordResetForm(props){
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChangeNewPassword = (e) => {
    setNewPassword(e.target.value);
  };

  const handleChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${config.url}/resetadminpassword`,
        { username: props.username, newPassword }
      );
      setMessage(response.data);
      setError("");
      if (newPassword !== confirmPassword) {
        setMessage("Passwords do not match");
      }
    } catch (error) {
      setError(error.message);
      setMessage("");
    }
  };

  return (
    <div >
      {message ? <h4 align="center">{message}</h4> : <h4 align="center">{error}</h4>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>New Password</label>
          <input
            type="password"
            value={newPassword}
            onChange={handleChangeNewPassword}
            required
          />
        </div>
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={handleChangeConfirmPassword}
            required
          />
        </div>
        <button type="submit">Reset Password</button>
      </form>
    </div>
  );
};


