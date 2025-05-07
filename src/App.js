import React, { useState } from 'react';
import GeneralInfo from './components/GeneralInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import CVPreview from './components/CVPreview';
import './styles/App.css';

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    email: '',
    phone: '',
    submitted: false
  });

  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  const handleGeneralSubmit = (info) => {
    setGeneralInfo({ ...info, submitted: true });
  };

  const handleGeneralEdit = () => {
    setGeneralInfo({ ...generalInfo, submitted: false });
  };

  const addEducation = (edu) => {
    setEducation([...education, { ...edu, submitted: true, id: Date.now() }]);
  };

  const editEducation = (id) => {
    setEducation(education.map(edu => 
      edu.id === id ? { ...edu, submitted: false } : edu
    ));
  };

  const addExperience = (exp) => {
    setExperience([...experience, { ...exp, submitted: true, id: Date.now() }]);
  };

  const editExperience = (id) => {
    setExperience(experience.map(exp => 
      exp.id === id ? { ...exp, submitted: false } : exp
    ));
  };

  return (
    <div className="app">
      <h1>CV Application</h1>
      <div className="forms">
        {!generalInfo.submitted ? (
          <GeneralInfo onSubmit={handleGeneralSubmit} initialData={generalInfo} />
        ) : (
          <div>
            <button onClick={handleGeneralEdit}>Edit General Info</button>
          </div>
        )}
        
        <Education 
          onAdd={addEducation} 
          onEdit={editEducation} 
          education={education} 
        />
        
        <Experience 
          onAdd={addExperience} 
          onEdit={editExperience} 
          experience={experience} 
        />
      </div>
      
      <CVPreview 
        generalInfo={generalInfo} 
        education={education} 
        experience={experience} 
      />
    </div>
  );
}

export default App;