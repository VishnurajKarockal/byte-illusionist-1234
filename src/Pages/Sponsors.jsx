import React, { useState, useEffect } from 'react';
import { Box, Text, Grid } from '@chakra-ui/react';
import axios from 'axios';
import { mainblue, url } from "../Resources"; // Assuming url is correctly defined in Resources file
import SponsorCard from '../Components/SponsorCard';

const Sponsors = () => {
    const [sponsors, setSponsors] = useState([]);
    
    const fetchSponsors = async () => {
        try {
            const res = await axios.get(`${url}/sponsors`);
            setSponsors(res.data);
        } catch (error) {
            console.error("Error fetching sponsors:", error);
        }
    };

    useEffect(() => {
        fetchSponsors();
    }, []);

    return (
        <Box padding={"30px"}>
            <Text
                fontWeight={"bold"}
                marginBottom={"20px"}
                fontSize={"l"}
                color={mainblue}
                textAlign={"center"}
                textTransform={"uppercase"}
                letterSpacing={"wide"}
                borderBottom={"2px solid"}
                paddingBottom={"10px"}
                position={"sticky"}
                top={"0"}
                zIndex={"10"}
                backgroundColor={"#c1cbd9"}
            >
                Our Sponsors
            </Text>
            <Grid
                gap={6}
                templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
            >
                {sponsors.map((item) => (
                    <SponsorCard key={item.id} {...item}/>
                ))}
            </Grid>
        </Box>
    );
};

export default Sponsors;
