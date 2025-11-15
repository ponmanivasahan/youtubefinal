import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './New.css'
import { RiArrowGoBackLine } from "react-icons/ri";
function Add() {

  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [description, setDescription] = useState("")
  const [link,setLink]=useState(0)

  const navigate = useNavigate()

  const handle = () => {
    if (!password || !name || !description || !link) {
      alert("please fill all the fields")
    } else {
      alert("Reel added successfully!!")
      navigate("/home")
    }
  }

  return (
    <div className='new'>
      <h4 className='head'>Submit Your Content</h4>

      <input className='channel'
        type='text'
        placeholder='enter your channel name'
        onChange={(e) => setName(e.target.value)}
      />
 <br />
      <input className='pass'
        type='password'
        placeholder=' enter your passkey ...'
        onChange={(e) => setPassword(e.target.value)}
      /> <br />
       <textarea className='des'
        placeholder='enter your feelings'
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <br /><br />
      <p className='para'>Enter the video link</p>
      <br />
      <input type='link' className='link'
      placeholder='enter the link'
      onChange={(e) => setLink(e.target.value)} />
<br />
      <button onClick={handle} className='button'>Add Reel</button>

              <footer className="footer">
            <button className="back-btn" onClick={() => navigate(-1)}>
              <RiArrowGoBackLine size={24} />
            </button>
          </footer>
        </div>
  )
}

export default Add
