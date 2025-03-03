import { Box, Container, Heading, Text, VStack, useToast } from '@chakra-ui/react';

const Contact = () => {
  const toast = useToast();

  const handleContactInfoClick = () => {
    toast({
      title: "Contact Information Copied",
      description: "The contact information has been copied to your clipboard.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={12} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">Contact Us</Heading>
        
        <Text textAlign="center" fontSize="lg">
          If you have any questions or are ready to embark on your data and AI journey, please do not hesitate to reach out to us. We are here to assist you.
        </Text>

        {/* Office Information */}
        <Box textAlign="center">
          <Heading as="h2" size="xl" mb={4} color="brand.600">Our Office</Heading>
          <Text fontSize="lg">Salt Lake, Kolkata, India</Text>
          <Text fontSize="lg">Phone: +91 62893 290271</Text>
          <Text fontSize="lg">Email: misron.consulting@gmail.com</Text>
          <Text 
            fontSize="lg" 
            color="teal.500" 
            cursor="pointer" 
            onClick={handleContactInfoClick}
            mt={4}
          >
            Click here to copy contact information
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Contact;
