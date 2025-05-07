import React, { useState } from 'react';
import '../styles/GeneralInfo.css';

function GeneralInfo({ onSubmit, initialData }) {
  const [info, setInfo] = useState({
    name: initialData.name || '',
    email: initialData.email || '',
    phone: initialData.phone || ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo(prevInfo => ({ ...prevInfo, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(info);
  };

  return (
    <form onSubmit={handleSubmit} className="general-info">
      <h2>General Information</h2>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={info.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={info.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Phone:</label>
        <input
          type="tel"
          name="phone"
          value={info.phone}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default GeneralInfo;