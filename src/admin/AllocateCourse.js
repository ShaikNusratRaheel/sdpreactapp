import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../config";
export default function FacultyCourseAllocationForm() {
  const [formData, setFormData] = useState({
    courseId: "",
    facultyId: "",
    sectionId: ""
  });
  const [courses, setCourses] = useState([]);
  const [faculties, setFaculties] = useState([]);
  const [sections, setSections] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(`${config.url}/viewcourse`);
        setCourses(response.data);
      } catch (error) {
        setError("Error fetching courses");
      }
    };

    const fetchFaculties = async () => {
      try {
        const response = await axios.get(`${config.url}/viewfaculty`);
        setFaculties(response.data);
      } catch (error) {
        setError("Error fetching faculties");
      }
    };

    const fetchSections = async () => {
      try {
        const response = await axios.get(`${config.url}/viewsections`);
        setSections(response.data);
      } catch (error) {
        setError("Error fetching sections");
      }
    };

    fetchCourses();
    fetchFaculties();
    fetchSections();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${config.url}/allocatecourse`,
        formData
      );
      alert(response.data); // Show success message
      setError("");
    } catch (error) {
      setError(error.response.data);
    }
  };

  return (
    <div className="registration-container">
      <h2>Allocate Faculty to Course</h2>
      {error && <h4>{error}</h4>}
      <form onSubmit={handleSubmit}>
        <div className="personal-details">
          <label htmlFor="courseId">Course:</label>
          <select id="courseId" value={formData.courseId} onChange={handleChange} required>
            <option value="">Select Course</option>
            {courses.map(course => (
              <option key={course._id} value={course.coursecode}>{course.coursetitle}</option>
            ))}
          </select>
        </div>
        <div className="personal-details">
          <label htmlFor="facultyId">Faculty:</label>
          <select id="facultyId" value={formData.facultyId} onChange={handleChange} required>
            <option value="">Select Faculty</option>
            {faculties.map(faculty => (
              <option key={faculty._id} value={faculty.facultyid}>{faculty.fullname}</option>
            ))}
          </select>
        </div>
        <div className="personal-details">
          <label htmlFor="sectionId">Section:</label>
          <select id="sectionId" value={formData.sectionId} onChange={handleChange} required>
            <option value="">Select Section</option>
            {sections.map(section => (
              <option key={section._id} value={section.sectionCode}>{section.sectionCode}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="submit-btn">Allocate</button>
      </form>
    </div>
  );
}
