import React from 'react'
import { Route, Routes } from 'react-router'
import Login from '../Pages/Login'
import Posts from '../Pages/Posts'
import Friends from '../Pages/Friends'
import Marketplace from '../Pages/Marketplace'
import Videos from '../Pages/Videos'
import SignUp from '../Pages/SignUp'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Posts />}/>
        <Route path="/friends" element={<Friends />}/>
        <Route path="/marketplace" element={<Marketplace />}/>
        <Route path="/videos" element={<Videos />}/>
        
    </Routes>
  )
}

export default AllRoutes