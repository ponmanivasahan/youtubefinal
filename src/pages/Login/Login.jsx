import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { BsCCircle } from "react-icons/bs";

function Login() {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [signInName, setSignInName] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const [signUpName, setSignUpName] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");

  const navigate = useNavigate();


  const handleSignIn = () => {
    if (!signInName || !signInPassword) {
      alert("Please enter valid login details");
      return;
    }

    alert("Login Successful!");
    setTimeout(() => {
      setShowSignIn(false);
      navigate("/account", { state: { username: signInName } });
    }, 3000);
  };
  const handleSignUp = () => {
    if (!signUpName || !signUpPassword) {
      alert("Please fill all details for signup");
      return;
    }

    alert("Signup Successful!");
    setTimeout(() => {
      setShowSignUp(false);
      navigate("/home", { state: { username: signUpName } });
    }, 1000);
  };

  return (
    <div className='maindiv'>
      <h3 className='sprak'>SPARK YOUR CREATIVITY ON YOUTUBE</h3>

      <div>
        <button className='sign' onClick={() => setShowSignIn(true)}>Sign In</button>
        <br />
        <button className='sign1' onClick={() => setShowSignUp(true)}>Sign Up</button>

        <p className='all'>All Rights Are Reserved</p>
        <p className='all'>
          copyright <BsCCircle /> {new Date().getFullYear()}
        </p>
      </div>

      {showSignIn && (
        <div className="modal-bg">
          <div className="modal-box">
            <h2>Sign In</h2>

            <input
              type="email"
              placeholder="Username@gmail.com"
            
              onChange={(e) => setSignInName(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"

              onChange={(e) => setSignInPassword(e.target.value)}
            />

            <button onClick={handleSignIn}>Sign In</button>
            <button className="close-btn" onClick={() => setShowSignIn(false)}>
              Close
            </button>
          </div>
        </div>
      )}

      {showSignUp && (
        <div className="modal-bg">
          <div className="modal-box">
            <h2>Sign Up</h2>

            <input
              type="email"
              placeholder="Choose Email"
          
              onChange={(e) => setSignUpName(e.target.value)}
            />

            <input
              type="password"
              placeholder="Create Password"
         
              onChange={(e) => setSignUpPassword(e.target.value)}
            />

            <button onClick={handleSignUp}>Sign Up</button>
            <button className="close-btn" onClick={() => setShowSignUp(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
