import React, { useEffect, useState } from 'react';
 import './faculty.css';

export default function FacultyProfile() {
  const [facultyData, setFacultyData] = useState(null);

  useEffect(() => {
    const storedFacultyData = localStorage.getItem('faculty');
    if (storedFacultyData) {
      const parsedFacultyData = JSON.parse(storedFacultyData);
      setFacultyData(parsedFacultyData);
    }
  }, []);

  return (
    facultyData ? (
      <div className='profile-card'>
        <p><strong>Id:</strong> {facultyData.facultyid}</p>
        <p><strong>Name:</strong> {facultyData.fullname}</p>
        <p><strong>Gender:</strong> {facultyData.gender}</p>
        <p><strong>Department:</strong> {facultyData.department}</p>
        <p><strong>Designation:</strong> {facultyData.designation}</p>
        <p><strong>Email:</strong> {facultyData.email}</p>
        <p><strong>Contact:</strong> {facultyData.contact}</p>
        <p><strong>Address:</strong> {facultyData.address}</p>
      </div>
    ) : (
      <p>No Data Found</p>
    )
  );
}