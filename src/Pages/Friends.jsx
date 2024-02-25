

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { url } from "../Resources";
import { Grid, GridItem } from "@chakra-ui/react";
import { Box } from '@chakra-ui/react'
import Friends_card from '../Components/Friends_card';

const Friends = () => {
  const [userData, setUserData] = useState([]);

  const fetchAllUser = async () => {
    try {
      const res = await axios.get(`${url}/user`);
      console.log("aaaaaaaaaaaaaaa", res);
      setUserData(res.data); // Assuming your response data is an array of user data
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchAllUser(); // Don't forget to call the function here
  }, []);

  return (
    
    <Grid
      templateColumns={{
        base: "1fr",        
        sm: "1fr 4fr",      
        md: "1fr 4fr",      
        lg: "1fr 4fr",      
        xl: "1fr 4fr",      
      }}
      gap={6}
    >
      {/* Sidebar content */}
      <Box>
        {/* Place your sidebar content here */}
      </Box>

      {/* Grid content */}
      <Box>
        <Grid 
        templateColumns={{
          base: "1fr",        // Single column layout on small screens
          md: "1fr 1fr 1fr", // Four-column layout on medium screens
          lg: "1fr 1fr 1fr", // Four-column layout on large screens
          xl: "1fr 1fr 1fr", // Four-column layout on extra-large screens
        }}
        gap={6}
        
        >
          {userData.map((item) => (
            <Friends_card key={item.id} {...item} />
          ))}
        </Grid>
      </Box>
    </Grid>
  )
}

export default Friends;
