import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../config";

export default function ViewCourseS() {
  const [course, setCourse] = useState([]);

  const fetchCourse = async () => {
    try {
      const response = await axios.get(`${config.url}/viewcourse`);
      setCourse(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchCourse();
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Courses</h1>

      <table
        border={1}
        align="center"
        style={{ width: "auto", height: "auto" }}
      >
        <thead>
          <tr>
            <th>Course Code</th>
            <th>Course Title</th>
            <th>Department</th>
            <th>Academic Year</th>
            <th>Year</th>
            <th>Semester</th>
            <th>Handout</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(course) && course.length > 0 ? (
            course.map((course, index) => (
              <tr key={index}>
                <td>{course.coursecode}</td>
                <td>{course.coursetitle}</td>
                <td>{course.dept}</td>
                <td>{course.academicyear}</td>
                <td>{course.year}</td>
                <td>{course.semester}</td>
                <td>
  {course.file.endsWith('.jpg') || course.file.endsWith('.jpeg') || course.file.endsWith('.png') ? (
    <img src={`${config.url}/handoutfile/${course.file}`} alt="Event" style={{ width: '250px', height: '250px' }} />
  ) : (
    <a href={`${config.url}/handoutfile/${course.file}`}>Click Here</a>
  )}
</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">Data Not Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
