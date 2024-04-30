import React,{useState,useEffect,useRef} from 'react'
import axios from "axios";
import config from "../config";

export default function ViewAssignmentS() {
    const [assignment, setAssignment] = useState([]);
    const [submitted, setSubmitted] = useState(false);

    const [formData, setFormData] = useState({
      // name: "",
      //     coursetitle:"",
      //     coursecode:"",
      //     deadline: "",
      file: null
    });
  
    const fileInputRef = useRef(null); // Ref for the file input element
  
    // const [message, setMessage] = useState("");
    // const [error, setError] = useState("");
  
    // const handleChange = (e) => {
    //   setFormData({ ...formData, [e.target.id]: e.target.value });
    // };
    const handleFileChange = (e) => {
      setFormData({ ...formData, file: e.target.files[0] });
    };



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
  



    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        setSubmitted(true);
        const formDataToSend = new FormData();
        formDataToSend.append('file', formData.file); // Append the file object
  
        const response = await axios.post(`${config.url}/submitassignment`, formDataToSend, {
          headers: {
            'Content-Type': 'multipart/form-data' // Set content type for FormData
          }
        });
        if (response.status === 200) {
          setFormData({
            
            file:""
          });
          fileInputRef.current.value = '';
        }
        
        // setMessage(response.data);
        // setError(""); // set error to ""
      } catch (error) {
        // setError(error.response.data);
        // setMessage(""); //set message to ""
      }
    };
  
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
      <img src={`${config.url}/assignmentfile/${assignment.file}`} alt="Event" style={{ width: '250px', height: '250px' }} />
    ) : (
      <a href={`${config.url}/assignmentfile/${assignment.file}`}>Click Here</a>
    )}
  </td>
  <td>
    <div className="personal-details">
          <label htmlFor="assignemt">Assignment</label>
          <input type="file" id="file" ref={fileInputRef} onChange={handleFileChange} required />
        </div>
        <form onSubmit={handleSubmit}>
                  <button type='submit' className='submit-btn'
                    // onClick={() => (assignment.coursecode)}
                    // className="button"
                  >
                    Submit Assignment
                  </button>
                  <label>
        <input type="checkbox" checked={submitted} readOnly /> Submitted
      </label>
                 </form>
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