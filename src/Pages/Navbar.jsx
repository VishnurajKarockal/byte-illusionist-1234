import { Avatar, AvatarBadge, Box, HStack, Image, Spacer } from '@chakra-ui/react';
import React from 'react';
import logo from '../assets/Facebook_Logo_(2019).png';
import { ChatIcon } from '@chakra-ui/icons';

const Navbar = () => {
  return (
    <Box position="fixed" top="0" left="0" right="0" zIndex="999" backgroundColor="white" boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px">
      <HStack padding={"10px"}>
        <Image src={logo} height={"50px"} />
        <Spacer />
        <ChatIcon boxSize="28px" marginRight={"20px"} />
        <Avatar onClick={() => alert("dkjbjksbfkjbn")}>
          <AvatarBadge boxSize='1.25em' bg='green.500' />
        </Avatar>
      </HStack>
    </Box>
  );
}

export default Navbar;
