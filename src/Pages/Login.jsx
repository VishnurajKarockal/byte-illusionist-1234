import React, { useState } from 'react'
import {
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Box,
  Text,
  useToast,
} from "@chakra-ui/react";

import { mainblue, url } from "../Resources";

import { Link } from 'react-router-dom';
import axios from 'axios';
import { LOGGED_IN_USERNAME, LOGIN_FAIL, LOGIN_SUCCESS } from '../Redux/ActionType';
import { useDispatch } from 'react-redux';
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = React.useState(false);
  const [userdata,setUserData] = useState([]);
  const handleClick = () => setShow(!show);
  const [isCredentialCorrect,setIsCredentialCorrect] = useState(false);
  const [logintry, setLoginTry] = useState(false);
  const toast = useToast();
  const dispatch = useDispatch();
  // const handleLogin = () => {
    
  
  // }

  // Account created toast 

  const AccountCreateToast = () => {
    const examplePromise = new Promise((resolve) => {
      setTimeout(() => resolve(200), 2000);
    });
    return toast.promise(examplePromise, {
      success: {
        title: "Login Successfull!..",
        description: "Welcome Back!",
        isClosable: true,
      },
      error: { title: "Promise rejected", description: "Something wrong" },
      loading: { title: "Checking Credentials", description: "Please wait" },
    });
  }


  //  Acoound creation failed toast
  const accountCreateFail = () => {
    return toast({
      title: "Invalid Credentials.",
      description: "Check all fields ",
      status: "warning",
      duration: 1000,
      isClosable: true,
    });
  };



  const fetchUserData = async () => {
    setLoginTry(true);
    try {
      const res = await axios.get(`${url}/user`);
      const data = res.data;
      
      for (const item of data) {
        if (item.email === email && item.password === password) {
          await Promise.all([
            dispatch({type: LOGIN_SUCCESS}),
            dispatch({type: LOGGED_IN_USERNAME, payload: item.firstName})
          ]);
          AccountCreateToast();
          break;
        }
      }

      // if (!auth.auth) {
      //   accountCreateFail();
      // }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }




  return (
    <Box mt={{ base: "2rem" }} mb={{ base: "2rem" }}>
      <Box
        margin={"auto"}
        bg={"white"}
        color={"#2f4e44"}
        boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
        padding={"30px"}
        width={{ base: "95%", sm: "100%", md: "60%", lg: "40%" }}
        borderRadius={"10px"}
        
      >
        <Text textAlign={"center"} fontSize={"1.7rem"} color={mainblue}>
          LOGIN
        </Text>

        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormLabel>Password</FormLabel>
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" >
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          {/* <Button backgroundColor='#658a71' _hover={{backgroundColor:"#63a677"}} color={"white"} width='full' marginTop={"15px"} onClick={fetchUserData}>SIGN IN</Button> */}
          <Button
            className="font-semibold"
            _hover={{ bg: "#fafaf1", color: "#658a71" }}
            size="md"
            color="#fafaf1"
            bg = {mainblue}
            height="38px"
            width="100%"
            border="2px"
            variant="solid"
            borderColor="#2f4e44"
            onClick={() => fetchUserData()}
            marginTop={"15px"}

          >
            Login
          </Button>

          {/* <h1
            style={{
              color: "#658a71",
              marginTop: "0.5rem",
              textAlign: "right",
            }}
          >
            Don't have an account?{"   "}{" "}
            <Link style={{ color: "#2f4e44", fontWeight: "600" }}>
              Sign Up
            </Link>
          </h1> */}
        </FormControl>
      </Box>
    </Box>
  )
}

export default Login