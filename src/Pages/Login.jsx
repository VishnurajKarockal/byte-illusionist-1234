import React, { useState } from 'react';
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
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { LOGGED_IN_USERNAME, LOGIN_SUCCESS } from '../Redux/ActionType';
import { useDispatch } from 'react-redux';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const toast = useToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchUserData = async () => {
    try {
      const res = await axios.get(`${url}/user`);
      const data = res.data;
      
      for (const item of data) {
        if (item.email === email && item.password === password) {
          await Promise.all([
            dispatch({type: LOGIN_SUCCESS}),
            dispatch({type: LOGGED_IN_USERNAME, payload: item.firstName})
            
          ]);
          navigate("/")
          AccountCreateToast();
          break;
        }
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  }

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

  return (
    <Box mt={{ base: "2rem" }} mb={{ base: "2rem" }}>
      <Box
        margin={"auto"}
        bg={"white"}
        color={"#2f4e44"}
        boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
        padding={"30px"}
        width={{ base: "95%", sm: "100%", md: "80%", lg: "90%" }}
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
              <Button h="1.75rem" size="sm" onClick={() => setShow(!show)}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
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

          <h1
            style={{
              color: "#658a71",
              marginTop: "0.5rem",
              textAlign: "right",
            }}
          >
            Don't have an account?{"   "}{" "}
            <Link style={{ color: "red", fontWeight: "600" }} to={"/signup"}>
              Sign Up
            </Link>
            
          </h1>
          
        </FormControl>
      </Box>
    </Box>
  )
}

export default Login;
