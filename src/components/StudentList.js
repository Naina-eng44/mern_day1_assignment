import React from "react";

function StudentList({ students }) {
  return (
    <div>
      <h2> Student List</h2>

      {students.length === 0 ? (
        <p>No students available</p>
      ) : (
        students.map((student, index) => (
          <div key={index}>
            <p>Name: {student.name}</p>
            <p>Age: {student.age}</p>
            <p>Course: {student.course}</p>
            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default StudentList;