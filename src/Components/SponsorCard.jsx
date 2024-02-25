import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';

const SponsorCard = (item) => {
  return (
    <Box
      key={item.id}
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      transition="all 0.3s ease"
      marginBottom={"20px"}
      _hover={{ transform: 'scale(1.05)', bg: 'gray.100' }}
    >
      <Image src={item.sponsor_image} alt={item.sponsor_name} />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Text color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="sm">
            {item.sponsor_type}
          </Text>
        </Box>

        <Text mt="1" fontWeight="semibold" fontSize="lg" lineHeight="tight" color={"grey"}>
          {item.sponsor_name}
        </Text>
      </Box>
    </Box>
  );
};

export default SponsorCard;
