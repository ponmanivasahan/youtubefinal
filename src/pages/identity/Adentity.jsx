import React, { useState } from 'react';
import './AdentityPage.css';
import { useNavigate } from 'react-router-dom';
import { RiArrowGoBackLine } from "react-icons/ri";
export default function Identity() {
  const [form, setForm] = useState({
    fullname: '',
    email: '',
    phone: '',
    dob: '',
    gender: '',
    country: '',
    bio: '',
    username: '',
  });

  const navigate = useNavigate(); 

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.fullname || !form.email || !form.username) {
      alert('Please fill all required fields');
      return;
    } else {
      navigate('/home'); 
    }
  };

  return (
    <div className="id-wrapper">
      <div className="id-card">
        <h2 className="id-title">Identity Information</h2>

        <input name="fullname" placeholder="Full Name" className="id-input" onChange={handleChange} />
        <input name="email" placeholder="Email Address" className="id-input" onChange={handleChange} />
        <input name="username" placeholder="Preferred Username" className="id-input" onChange={handleChange} />
        <input name="phone" placeholder="Phone Number" className="id-input" onChange={handleChange} />

        <label className="id-label">Date of Birth:</label>
        <input type="date" name="dob" className="id-input" onChange={handleChange} />

        <label className="id-label">Gender:</label>
        <select name="gender" className="id-input" onChange={handleChange}>
          <option value="">Select</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>

        <select name="country" className="id-input" onChange={handleChange}>
          <option value="">Select Country</option>
          <option>India</option>
          <option>USA</option>
          <option>UK</option>
          <option>Canada</option>
          <option>Australia</option>
        </select>

        <textarea name="bio" className="id-textarea" placeholder="Short Bio" onChange={handleChange}></textarea>

        <button className="id-btn" onClick={handleSubmit}>Save Identity</button>
      </div>
           <footer className="footer">
              <button className="back-btn" onClick={() => navigate(-1)}>
                <RiArrowGoBackLine size={24} />
              </button>
            </footer>
    </div>
  );
}
