import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Accounts.css";

import { RiArrowGoBackLine } from "react-icons/ri";
function Accounts() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleNext = () => {
    if (!email || !email.includes("@")) {
      alert("Please enter a valid email");
      return;
    }
    localStorage.setItem("userEmail", email);

    navigate("/identity");
  };

  return (
    <div className="email-wrapper">
      <div className="email-box">
        <h2>Create your YouTube Account</h2>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button onClick={handleNext}>Next</button>
      </div>
          <footer className="footer">
             <button className="back-btn" onClick={() => navigate(-1)}>
               <RiArrowGoBackLine size={24} />
             </button>
           </footer>
    </div>
  );
}

export default Accounts
