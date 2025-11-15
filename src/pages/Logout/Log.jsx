import React from 'react'
import './Log.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RiArrowGoBackLine } from "react-icons/ri";
function Logouting() {
  const navigate=useNavigate()
  const[password,setPassword]=useState()
  const handle=()=>{ if(!password){
    alert("please fill all feilds")
  }else{
  navigate("/")}}
  return (
    <div className='log'>
      <h2 className='letter'>Enter the password to log out</h2>
<input  className="input"type="password" placeholder='......' onChange={(password)=>{setPassword(password.target.value)}} />
 <br />
      <button  className="handle"onClick={handle}>LogOut</button>
        
                  <footer className="footer">
                <button className="back-btn" onClick={() => navigate(-1)}>
                  <RiArrowGoBackLine size={24} />
                </button>
              </footer>
            </div>
  )
}

export default Logouting