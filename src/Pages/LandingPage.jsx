import { Box, IconButton, VStack, useDisclosure } from "@chakra-ui/react";
import Navbar from "./Navbar";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import AllRoutes from "../Routes/AllRoutes";
import Friends from "./Friends";
import Sponsors from "./Sponsors";
import { mainblue } from "../Resources";
import Login from "./Login";



function LandingPage() {
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
          <VStack mt={4} spacing={4} alignItems="flex-start" marginLeft={{ base: '30%', md: '30%' }}>
            <Link to="/"  onClick={onClose} style={{ fontSize: { base: "1rem", md: "1.2rem" }, fontWeight: "500",color:mainblue }}>🏘️ Home</Link>
            <Link to="/marketplace" onClick={onClose} style={{ fontSize: { base: "1rem", md: "1.2rem" }, fontWeight: "500",color:mainblue }}>🛒 Marketplace</Link>
            <Link to="/videos" onClick={onClose} style={{ fontSize: { base: "1rem", md: "1.2rem" }, fontWeight: "500",color:mainblue }}>🎥 Videos</Link>
            <Link to="/friends" onClick={onClose} style={{ fontSize: { base: "1rem", md: "1.2rem" }, fontWeight: "500",color:mainblue }}>🫂 Friends</Link>
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
            <Sponsors />
          </Box>
        </Box>
      </Box>
    </>
    
    
  )
}

export default LandingPage
