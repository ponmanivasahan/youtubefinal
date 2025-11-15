import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../Login/Login'
import Home from '../Home/Home'
import Shorts from '../shorts/Shorts'
import Subscription from '../subscriptions/Subscription'
import Logouting from '../Logout/Log'
import Add from '../New/News'
import Librarying from '../Library/Library'
import Playlist from '../Playlist/Playlist'
import Accounts from '../Accounts/Accounts'
import Identity from '../identity/Adentity'



function Routing() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/home' element={<Home />} />
     <Route path='/shorts' element={<Shorts />} />
     <Route path='/subscription' element={<Subscription/>} />
     <Route path='/logouts' element={<Logouting/>} />
     <Route path='/newreels' element={<Add/>} />
     <Route path="/account" element={<Accounts/>} />
     <Route path='/library' element={<Librarying/>} />
     <Route path='/playlist' element={<Playlist/>}/>
     <Route path='/identity' element={<Identity/>}/>
    </Routes>
  )
}

export default Routing