import React from 'react'

const MajorRoute = () => {
  return (
    <Routes>
        
        <Route path="/" element={<Login />}/>
        <Route path="/signup" element={<SignUp />}/>
    </Routes>
  )
}

export default MajorRoute