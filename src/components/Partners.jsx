import { Badge, Box, Container, Heading, SimpleGrid, Text, VStack, useColorModeValue } from "@chakra-ui/react";

const Partners = () => {
  const pageBg = useColorModeValue("gray.50", "gray.900");
  const cardBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const sectionLabel = useColorModeValue("brand.600", "accent.200");
  const sectionTitle = useColorModeValue("brand.900", "white");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const cardShadow = useColorModeValue("0 14px 34px rgba(15, 23, 42, 0.07)", "dark-lg");

  return (
    <Box bg={pageBg} minH="100vh">
      <Container maxW="container.xl" py={{ base: 12, md: 16 }}>
        <VStack spacing={5} align="start" maxW="3xl">
          <Badge px={3} py={1} borderRadius="full" bg={useColorModeValue("brand.100", "whiteAlpha.200")} color={sectionTitle}>
            Partners
          </Badge>
          <Heading as="h1" size={{ base: "2xl", md: "3xl" }} color={sectionTitle}>
            Partner relationships and collaborations
          </Heading>
          <Text color={textColor} fontSize={{ base: "lg", md: "xl" }} lineHeight="tall">
            This section is being updated to present partner relationships with the same clarity and consistency as the rest of the site.
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, md: 6 }} mt={{ base: 10, md: 14 }}>
          {[
            "Strategic technology partners",
            "Industry collaborators",
            "Co-innovation relationships",
          ].map((item) => (
            <Box
              key={item}
              bg={cardBg}
              borderWidth={1}
              borderColor={borderColor}
              borderRadius="lg"
              p={{ base: 5, md: 6 }}
              boxShadow={cardShadow}
            >
              <Heading size="md" color={sectionTitle} mb={3}>
                {item}
              </Heading>
              <Text color={textColor} lineHeight="tall">
                Partner details can be added here as approved brand assets and collaboration summaries become available.
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Partners;
