import { Box, Container, Heading, Text, SimpleGrid, Image, VStack } from '@chakra-ui/react';

const partnersData = [
  { name: 'Company A', logo: '/path/to/logoA.png' },
  { name: 'Company B', logo: '/path/to/logoB.png' },
  { name: 'Institution C', logo: '/path/to/logoC.png' },
  { name: 'Company D', logo: '/path/to/logoD.png' },
  // Add more companies/institutions as needed
];

const Partners = () => {
  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">Our Partners</Heading>
        <Text textAlign="center">
          We are proud to have collaborated with these esteemed companies and institutions.
        </Text>
        
        <SimpleGrid columns={[2, null, 4]} spacing={10}>
          {partnersData.map((partner, index) => (
            <Box key={index} textAlign="center">
              <Image src={partner.logo} alt={partner.name} boxSize="150px" objectFit="contain" />
              <Text mt={2}>{partner.name}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Partners;
