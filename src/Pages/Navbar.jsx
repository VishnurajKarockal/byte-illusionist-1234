// import { Avatar, AvatarBadge, Box, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, HStack, Image, Spacer, useDisclosure, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Text, Input, Flex } from '@chakra-ui/react';
// import React, { useState } from 'react';
// import logo from '../assets/Facebook_Logo_(2019).png';
// import { ChatIcon } from '@chakra-ui/icons';
// import { useDispatch, useSelector } from 'react-redux';
// import  {mainblue} from "../Resources";
// import { LOGOUT_USER } from '../Redux/ActionType';
// import { useNavigate } from 'react-router';

// const Navbar = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const userName = useSelector((state) => state.auth.username);
  
//   const { isOpen: isDrawerOpen, onOpen: onDrawerOpen, onClose: onDrawerClose } = useDisclosure();
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [message, setMessage] = useState('');
//   const [messages, setMessages] = useState([{ text: 'Hello', sender: 'system' }]);

//   const handleChatIconClick = () => {
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   const handleMessageSend = () => {
//     if (message.trim() !== '') {
//       setMessages([...messages, { text: message, sender: 'user' }]);
//       setMessage('');
//     }
//   };

//   return (
//     <Box position="fixed" top="0" left="0" right="0" zIndex="999" backgroundColor="white" boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px">
//       <HStack padding={"10px"}>
//         <Image src={logo} height={"50px"} />
//         <Spacer />
//         <ChatIcon boxSize="28px" marginRight={"20px"} onClick={handleChatIconClick} />
//         <Avatar onClick={onDrawerOpen}>
//           <AvatarBadge boxSize='1.25em' bg='green.500' />
//         </Avatar>
//         <Drawer isOpen={isDrawerOpen} placement="right" onClose={onDrawerClose}>
//           <DrawerOverlay>
//             <DrawerContent>
//               <DrawerCloseButton />
//               <DrawerHeader color={mainblue}>Welcome Back</DrawerHeader>
//               <DrawerBody>
//                 <Text fontSize={"1.5rem"} fontWeight={"600"} marginBottom={"50px"}>Hello {userName}</Text>
//                 <Button onClick={() => {
//                   dispatch({type:LOGOUT_USER})
//                   navigate("/login")
//                 }} >Logout</Button>
//               </DrawerBody>
//             </DrawerContent>
//           </DrawerOverlay>
//         </Drawer>
//       </HStack>
//       {/* Modal */}
//       <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Chat Modal</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             {/* Chat Messages */}
//             <Box maxHeight="300px" overflowY="auto">
//               {messages.map((msg, index) => (
//                 <Flex key={index} justifyContent={msg.sender === 'user' ? 'flex-end' : 'flex-start'} marginBottom="10px">
//                   <Box
//                     backgroundColor={msg.sender === 'user' ? 'blue.500' : 'gray.200'}
//                     color={msg.sender === 'user' ? 'white' : 'black'}
//                     borderRadius="10px"
//                     padding="10px"
//                     maxWidth="70%"
//                   >
//                     {msg.text}
//                   </Box>
//                 </Flex>
//               ))}
//             </Box>
//             {/* Message Input */}
//             <Flex marginTop="20px">
//               <Input
//                 placeholder="Type your message..."
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 marginRight="10px"
//               />
//               <Button onClick={handleMessageSend} colorScheme="blue">Send</Button>
//             </Flex>
//           </ModalBody>
//           <ModalFooter>
//             <Button colorScheme="blue" mr={3} onClick={handleCloseModal}>
//               Close
//             </Button>
//           </ModalFooter>
//         </ModalContent>
//       </Modal>
//     </Box>
//   );
// }

// export default Navbar;

import React, { useEffect, useState } from 'react';
import { Avatar, AvatarBadge, Box, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, HStack, Image, Spacer, useDisclosure, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Text, Input, Flex, useColorMode, Select, VStack, useBreakpointValue } from '@chakra-ui/react';
import { ChatIcon, MoonIcon, SunIcon } from '@chakra-ui/icons'; // Import MoonIcon and SunIcon
import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT_USER } from '../Redux/ActionType';
import { useNavigate } from 'react-router';
import logo from '../assets/Facebook_Logo_(2019).png';
import { mainblue, url } from "../Resources";
import axios from 'axios';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const dispatch = useDispatch();
  // ========================
  const [usersData,setUsersData] = useState([])
  const fetchUserData = async () => {
    
    try {
      const res = await axios.get(`${url}/user`);
      
      setUsersData(res.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }
  useEffect(() => {
    fetchUserData();
  }, [])
  


  // =========================
  const navigate = useNavigate();
  const userName = useSelector((state) => state.auth.username);
  const { isOpen: isDrawerOpen, onOpen: onDrawerOpen, onClose: onDrawerClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode(); // Chakra UI hook for managing color mode
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([{ text: 'Hello', sender: 'system' }]);
  const [clickedLink, setClickedLink] = useState(null);
  const showIcons = useBreakpointValue({ base: false, md: true });
  const handleChatIconClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleMessageSend = () => {
    if (message.trim() !== '') {
      setMessages([...messages, { text: message, sender: 'user' }]);
      setMessage('');
    }
  };

  const changeTheme = () => {
    toggleColorMode(); // Toggles between light and dark mode
  };

  return (
    <Box position="fixed" top="0" left="0" right="0" zIndex="999" backgroundColor={colorMode === "light" ? "white" : "gray.900"} boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px">
      <HStack padding={"10px"}>
        <Image src={logo} height={"50px"} />
        <Spacer />
        <Box
  mt={4}
  marginX={{ base: 'auto', md: '30%' }} // Set horizontal margin
  textAlign="center"
  position="relative" // Set position to relative
  left="100px" // Shift the entire navbar 100px to the right
>
  <HStack
    spacing={20}
    alignItems="center" // Align items vertically in the center
  >
    {/* Conditional rendering for icons */}
    {showIcons && (
      <>
        <Link to="/" style={{ fontSize: "1rem", fontWeight: "500", color: clickedLink === '/' ? mainblue : "black", textDecoration: 'none' }} onClick={() => setClickedLink('/')}><Image style={{ width: "30px", height: "30px" }} src='https://img.icons8.com/ios/50/home-page.png'/></Link>
        <Link to="/marketplace" style={{ fontSize: "1rem", fontWeight: "500", color: clickedLink === '/marketplace' ? mainblue : "black", textDecoration: 'none' }} onClick={() => setClickedLink('/marketplace')}><Image style={{ width: "30px", height: "30px" }} src='https://img.icons8.com/ios/50/online-shop-card-payment.png'/></Link>
        <Link to="/videos" style={{ fontSize: "1rem", fontWeight: "500", color: clickedLink === '/videos' ? mainblue : "black", textDecoration: 'none' }} onClick={() => setClickedLink('/videos')}><Image style={{ width: "30px", height: "30px" }} src='https://img.icons8.com/dotty/80/movies-folder--v1.png'/></Link>
        <Link to="/friends" style={{ fontSize: "1rem", fontWeight: "500", color: clickedLink === '/friends' ? mainblue : "black", textDecoration: 'none' }} onClick={() => setClickedLink('/friends')}><Image style={{ width: "30px", height: "30px" }} src='https://img.icons8.com/ios/50/friends.png'/></Link>
      </>
    )}
  </HStack>
</Box>


        <Spacer />
        <ChatIcon boxSize="28px" marginRight={"20px"} onClick={handleChatIconClick} />
        <Avatar onClick={onDrawerOpen}>
          <AvatarBadge boxSize='1.25em' bg='green.500' />
        </Avatar>
        <Button onClick={changeTheme} ml={4}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />} {/* Use MoonIcon for light mode and SunIcon for dark mode */}
        </Button>
        <Drawer isOpen={isDrawerOpen} placement="right" onClose={onDrawerClose}>
          <DrawerOverlay>
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader color={mainblue}>Welcome Back</DrawerHeader>
              <DrawerBody>
                <Text fontSize={"1.5rem"} fontWeight={"600"} marginBottom={"50px"}>Hello {userName}</Text>
                <Button onClick={() => {
                  dispatch({type:LOGOUT_USER})
                  navigate("/login")
                }} >Logout</Button>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </HStack>
      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Chat With Your Frineds</ModalHeader>

          <ModalCloseButton />
          <ModalBody>
          <Select>
              <option>Select friend</option>
              {usersData.map((item, i) => (
                <option key={item.id} value={`${item.firstName} ${item.lastName}`}>
                  {`${item.firstName} ${item.lastName}`}
                </option>
              ))}
            </Select>
            {/* Chat Messages */}
            <Box maxHeight="300px" overflowY="auto" marginTop={"20px"}>
              {messages.map((msg, index) => (
                <Flex key={index} justifyContent={msg.sender === 'user' ? 'flex-end' : 'flex-start'} marginBottom="10px">
                  <Box
                    backgroundColor={msg.sender === 'user' ? 'blue.500' : 'gray.200'}
                    color={msg.sender === 'user' ? 'white' : 'black'}
                    borderRadius="10px"
                    padding="10px"
                    maxWidth="70%"
                  >
                    {msg.text}
                  </Box>
                </Flex>
              ))}
            </Box>
            {/* Message Input */}
            <Flex marginTop="20px">
              <Input
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                marginRight="10px"
              />
              <Button onClick={handleMessageSend} colorScheme="blue">Send</Button>
            </Flex>
          </ModalBody>
          <ModalFooter>
            {/* <Button colorScheme="blue" mr={3} onClick={handleCloseModal}>
              Close
            </Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default Navbar;
