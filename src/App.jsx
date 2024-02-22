import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignUp from './Pages/SignUp'
import { ChakraProvider } from '@chakra-ui/react'
import Login from './Pages/Login'

function App() {
  

  return (
    <>
      <SignUp />
      <Login />
    </>
    
  )
}

export default App
