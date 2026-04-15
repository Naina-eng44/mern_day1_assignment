import React, { useState } from "react";

function StudentForm({ registerLearner }) {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    course: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.age || !formData.course) {
      alert("Please fill all fields");
      return;
    }

    if (formData.age <= 18) {
      alert("Age must be greater than 18");
      return;
    }

    registerLearner({
      name: formData.name,
      age: Number(formData.age),
      course: formData.course,
    });

    // Reset form
    setFormData({ name: "", age: "", course: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={formData.name}
        onChange={handleChange}
      />

      <input
        type="number"
        name="age"
        placeholder="Enter Age"
        value={formData.age}
        onChange={handleChange}
      />

      <input
        type="text"
        name="course"
        placeholder="Enter Course"
        value={formData.course}
        onChange={handleChange}
      />

      <button type="submit">Add Student</button>
    </form>
  );
}

export default StudentForm;