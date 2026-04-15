import React, { useState } from "react";
import './App.css';
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";


function App() {
  const [students, setStudents] = useState([]);
  const [clickCount, setClickCount] = useState(0);

  // Add Student (Arrow Function)
  const registerLearner = async (newStudent) => {
    // Async simulation (Promise + setTimeout)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Spread operator
    setStudents([...students, newStudent]);
  };

  // Filter students (Age > 18)
  const filteredStudents = students.filter(
    (student) => student.age > 18
  );

  return (
    <div style={{ textAlign: "center" }}>
      <h1> Student Management System</h1>

      <StudentForm registerLearner={registerLearner} />

      <button onClick={() => setClickCount(clickCount + 1)}>
        Clicked {clickCount} times
      </button>

      <StudentList students={filteredStudents} />
    </div>
  );
}

export default App;
