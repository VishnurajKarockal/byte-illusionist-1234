
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignUp from './Pages/SignUp'
import { Box, ChakraProvider, IconButton, VStack, useDisclosure } from '@chakra-ui/react'
import Login from './Pages/Login'
import { useSelector } from 'react-redux'
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import AllRoutes from './Routes/AllRoutes'
import Friends from './Pages/Friends'
import Navbar from './Pages/Navbar'

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Navbar />
      <Box
        display="flex"
        justifyContent="space-between"
        height="100vh"
        width="100vw"
        textAlign="center"
        marginTop={"70px"}
      >
        {/* Hamburger Icon for Mobile */}
        {!isOpen && (
          <IconButton
            aria-label="Toggle Menu"
            icon={<HamburgerIcon />}
            display={{ base: 'block', md: 'none' }}
            onClick={onOpen}
          />
        )}

        {/* Sidebar Navigation */}
        <Box
            boxShadow={"rgba(17, 12, 46, 0.15) 0px 48px 100px 0px"}
            className="left-sidebar"
            style={{ width: isOpen ? '60%' : '27%', overflowY: 'auto' }} 
            display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
            bg="gray.200"
            onClick={onClose} 
          >
          {isOpen && (
            <IconButton
              aria-label="Close Menu"
              icon={<CloseIcon />}
              alignSelf="flex-end"
              onClick={onClose}
              mt={2}
              mr={2}
            />
          )}
          <VStack mt={4} spacing={4} alignItems="flex-start" marginLeft={"30%"}>
            <Link to="/" onClick={onClose} style={{fontSize:"1rem",fontWeight:"500"}}>🏘️ Home</Link>
            <Link to="/marketplace" onClick={onClose} style={{fontSize:"1rem",fontWeight:"500"}}>🛒 Marketplace</Link>
            <Link to="/videos" onClick={onClose} style={{fontSize:"1rem",fontWeight:"500"}}>🎥 Videos</Link>
            <Link to="/friends" onClick={onClose} style={{fontSize:"1rem",fontWeight:"500"}}>🫂 Friends</Link>
          </VStack>
        </Box>

        {/* Center Content */}
        <Box className="center-content" style={{ flex: '1', overflowY: 'auto', }}>
          <AllRoutes />
        </Box>

        {/* Right Sidebar (Friends) */}
        <Box
          className="right-sidebar"
          style={{ width: '27%', overflowY: 'auto' }}
          display={{ base:'none', md:'none', lg: 'block' }}
          bg="gray.200"
        >
          <Box className="online-friends" style={{ padding: '20px' }}>
            <h2>Online Friends</h2>
            <Friends />
          </Box>
        </Box>
      </Box>
    </>
    
    
  )
}

export default App


// ============================================

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import SignUp from './Pages/SignUp'
// import { Box, ChakraProvider, IconButton, VStack, useDisclosure } from '@chakra-ui/react'
// import Login from './Pages/Login'
// import { useSelector } from 'react-redux'
// import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
// import { Link } from 'react-router-dom'
// import AllRoutes from './Routes/AllRoutes'
// import Friends from './Pages/Friends'
// import Navbar from './Pages/Navbar'

// function App() {
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   return (
//     <>
//       <Navbar />
//       <Box
//         display="flex"
//         justifyContent="space-between"
//         height="100vh"
//         width="100vw"
//         textAlign="center"
//         marginTop={"70px"}
//       >
//         {/* Hamburger Icon for Mobile */}
//         {!isOpen && (
//           <IconButton
//             aria-label="Toggle Menu"
//             icon={<HamburgerIcon />}
//             display={{ base: 'block', md: 'none' }}
//             onClick={onOpen}
//           />
//         )}

//         {/* Sidebar Navigation */}
//         <Box
//             boxShadow={"rgba(17, 12, 46, 0.15) 0px 48px 100px 0px"}
//             className="left-sidebar"
//             style={{ width: isOpen ? '60%' : '27%', overflowY: 'auto', position: 'fixed', left: 0, top: 0, bottom: 0, marginTop: "70px"}} 
//             display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
//             bg="gray.200"
//             onClick={onClose} 
//           >
//           {isOpen && (
//             <IconButton
//               aria-label="Close Menu"
//               icon={<CloseIcon />}
//               alignSelf="flex-end"
//               onClick={onClose}
//               mt={2}
//               mr={2}
//             />
//           )}
//           <VStack mt={4} spacing={4} alignItems="flex-start" marginLeft={"30%"}>
//             <Link to="/" onClick={onClose} style={{fontSize:"1rem",fontWeight:"500"}}>🏘️ Home</Link>
//             <Link to="/marketplace" onClick={onClose} style={{fontSize:"1rem",fontWeight:"500"}}>🛒 Marketplace</Link>
//             <Link to="/videos" onClick={onClose} style={{fontSize:"1rem",fontWeight:"500"}}>🎥 Videos</Link>
//             <Link to="/friends" onClick={onClose} style={{fontSize:"1rem",fontWeight:"500"}}>🫂 Friends</Link>
//           </VStack>
//         </Box>

//         {/* Center Content */}
//         <Box className="center-content" style={{ flex: '1', overflowY: 'auto', backgroundColor: "red",height: "100vh" }}>
//           <AllRoutes />
          
//         </Box>

//         {/* Right Sidebar (Friends) */}
//         <Box
//           className="right-sidebar"
//           style={{ width: '27%', overflowY: 'auto',  right: 0, backgroundColor: "yellow",height:"100vh"}}
//           display={{ base: 'none', md: 'none', lg: 'block' }}
//           bg="gray.200"
//         >
//           <Box className="online-friends" style={{ padding: '20px' }}>
//             <h2>Online Friends</h2>
//             <Friends />
//           </Box>
//         </Box>
//       </Box>
//     </>
    
    
//   )
// }

// export default App
