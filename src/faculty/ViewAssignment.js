import React, {useState,useEffect} from 'react'
import axios from "axios";
import config from "../config";
export default function ViewAssignment() {
    const [assignment, setAssignment] = useState([]);

    const fetchAssignment = async () => {
      try {
        const response = await axios.get(`${config.url}/viewassignment`);
        setAssignment(response.data);
      } catch (error) {
        console.error(error.message);
      }
    };
  
    useEffect(() => {
      fetchAssignment();
    }, []);
  
    
  
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Assignments</h1>
  
        <table
          border={1}
          align="center"
          style={{ width: "auto", height: "auto" }}
        >
          <thead>
            <tr>
              <th>Name of the Assignment</th>
              <th>Course Code</th>
              <th>Course Title</th>
              <th>Deadline</th>
              <th>Assignment</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(assignment) && assignment.length > 0 ? (
              assignment.map((assignment, index) => (
                <tr key={index}>
                  <td>{assignment.name}</td>
                  <td>{assignment.coursecode}</td>
                  <td>{assignment.coursetitle}</td>
                  <td>{assignment.deadline}</td>
                  
                  
                  <td>
    {assignment.file.endsWith('.jpg') || assignment.file.endsWith('.jpeg') || assignment.file.endsWith('.png') ? (
      <img src={`http://localhost:2000/assignmentfile/${assignment.file}`} alt="Event" style={{ width: '250px', height: '250px' }} target='new'/>
    ) : (
      <a href={`http://localhost:2000/assignmentfile/${assignment.file}`} target='new'>Click Here</a>
    )}
  </td>
                  
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">Data Not Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
}