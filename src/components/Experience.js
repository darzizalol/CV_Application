import React, { useState } from 'react';
import '../styles/Experience.css';

function Experience({ onAdd, onEdit, experience }) {
  const [exp, setExp] = useState({
    company: '',
    position: '',
    responsibilities: '',
    startDate: '',
    endDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExp(prevExp => ({ ...prevExp, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(exp);
    setExp({
      company: '',
      position: '',
      responsibilities: '',
      startDate: '',
      endDate: ''
    });
  };

  return (
    <div className="experience">
      <h2>Work Experience</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Company:</label>
          <input
            type="text"
            name="company"
            value={exp.company}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Position:</label>
          <input
            type="text"
            name="position"
            value={exp.position}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Responsibilities:</label>
          <textarea
            name="responsibilities"
            value={exp.responsibilities}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Start Date:</label>
          <input
            type="date"
            name="startDate"
            value={exp.startDate}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>End Date:</label>
          <input
            type="date"
            name="endDate"
            value={exp.endDate}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Experience</button>
      </form>

      {experience.map(exp => (
        !exp.submitted ? (
          <form key={exp.id} onSubmit={(e) => {
            e.preventDefault();
            onAdd({ ...exp, submitted: true });
          }}>
            <div>
              <label>Company:</label>
              <input
                type="text"
                name="company"
                value={exp.company}
                onChange={(e) => {
                  const updated = { ...exp, company: e.target.value };
                  onAdd(updated);
                }}
                required
              />
            </div>
            {/* Similar fields for other experience details */}
            <button type="submit">Save</button>
          </form>
        ) : (
          <div key={exp.id} className="experience-item">
            <h3>{exp.company}</h3>  
            <p>Position: {exp.position}</p>
            <p>Responsibilities: {exp.responsibilities}</p>
            <p>Dates: {exp.startDate} to {exp.endDate}</p>
            <button onClick={() => onEdit(exp.id)}>Edit</button>
          </div>
        )
      ))}
    </div>
  );
}

export default Experience;