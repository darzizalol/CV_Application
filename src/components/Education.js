import React, { useState } from 'react';
import '../styles/Education.css';

function Education({ onAdd, onEdit, education }) {
  const [edu, setEdu] = useState({
    school: '',
    degree: '',
    startDate: '',
    endDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEdu(prevEdu => ({ ...prevEdu, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(edu);
    setEdu({
      school: '',
      degree: '',
      startDate: '',
      endDate: ''
    });
  };

  return (
    <div className="education">
      <h2>Education</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>School:</label>
          <input
            type="text"
            name="school"
            value={edu.school}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Degree:</label>
          <input
            type="text"
            name="degree"
            value={edu.degree}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Start Date:</label>
          <input
            type="date"
            name="startDate"
            value={edu.startDate}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>End Date:</label>
          <input
            type="date"
            name="endDate"
            value={edu.endDate}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Education</button>
      </form>

      {education.map(edu => (
        !edu.submitted ? (
          <form key={edu.id} onSubmit={(e) => {
            e.preventDefault();
            onAdd({ ...edu, submitted: true });
          }}>
            <div>
              <label>School:</label>
              <input
                type="text"
                name="school"
                value={edu.school}
                onChange={(e) => {
                  const updated = { ...edu, school: e.target.value };
                  onAdd(updated);
                }}
                required
              />
            </div>
            {/* Similar fields for other education details */}
            <button type="submit">Save</button>
          </form>
        ) : (
          <div key={edu.id} className="education-item">
            <h3>{edu.school}</h3>
            <p>Degree: {edu.degree}</p>
            <p>Dates: {edu.startDate} to {edu.endDate}</p>
            <button onClick={() => onEdit(edu.id)}>Edit</button>
          </div>
        )
      ))}
    </div>
  );
}

export default Education;