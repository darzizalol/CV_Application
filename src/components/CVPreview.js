import React from 'react';
import '../styles/CVPreview.css';

function CVPreview({ generalInfo, education, experience }) {
  return (
    <div className="cv-preview">
      <h2>CV Preview</h2>
      <div className="general-preview">
        <h3>{generalInfo.name}</h3>
        <p>Email: {generalInfo.email}</p>
        <p>Phone: {generalInfo.phone}</p>
      </div>

      <div className="education-preview">
        <h3>Education</h3>
        {education.filter(edu => edu.submitted).map(edu => (
          <div key={edu.id} className="education-item">
            <h4>{edu.school}</h4>
            <p>Degree: {edu.degree}</p>
            <p>{edu.startDate} - {edu.endDate}</p>
          </div>
        ))}
      </div>

      <div className="experience-preview">
        <h3>Work Experience</h3>
        {experience.filter(exp => exp.submitted).map(exp => (
          <div key={exp.id} className="experience-item">
            <h4>{exp.company}</h4>
            <p>Position: {exp.position}</p>
            <p>Responsibilities: {exp.responsibilities}</p>
            <p>{exp.startDate} - {exp.endDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CVPreview;