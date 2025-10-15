import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Icon,
  Button,
  Link,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";

const AskHank = () => {
  const assurances = [
    "Confidential one-on-one guidance tailored to your financial goals",
    "Real talk about money habits, relationships, and long-term plans",
    "Actionable steps you can apply immediately to improve financial wellbeing",
  ];

  const focusAreas = [
    "Navigating difficult money conversations with partners or family",
    "Building resilient wealth strategies for volatile markets",
    "Clarifying debt, investment, and retirement decisions with expert insight",
  ];

  return (
    <Box bg="gray.50" minH="100vh">
      <Box
        bgGradient="linear(to-r, brand.900, brand.700)"
        color="white"
        py={{ base: 12, md: 20 }}
      >
        <Container maxW="container.xl">
          <VStack spacing={{ base: 6, md: 8 }} align="start">
            <Heading as="h1" size={{ base: "xl", md: "2xl" }} fontWeight="bold">
              AskHank.ca
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl" }} maxW="3xl" lineHeight="tall">
              Ask Hank: Your Money Coach by Henry Svec. When you face a money or money relationship problem, who can you trust? AskHank.ca offers a private Q&amp;A experience that puts discretion, expertise, and empathy first.
            </Text>
            <HStack spacing={{ base: 3, md: 4 }} wrap="wrap">
              <Button
                as={Link}
                href="https://askhank.ca"
                isExternal
                colorScheme="accent"
                size={{ base: "md", md: "lg" }}
                fontWeight="semibold"
              >
                Visit askHank.ca
              </Button>
              <Button
                as={RouterLink}
                to="/contact"
                variant="outline"
                colorScheme="whiteAlpha"
                size={{ base: "md", md: "lg" }}
              >
                Talk With Misron
              </Button>
            </HStack>
          </VStack>
        </Container>
      </Box>

      <Container maxW="container.xl" py={{ base: 12, md: 16 }}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 8, md: 12 }}>
          <VStack
            spacing={4}
            align="start"
            p={{ base: 6, md: 8 }}
            bg="white"
            borderWidth={1}
            borderRadius="lg"
            borderColor="gray.200"
            boxShadow="sm"
          >
            <Heading as="h2" size="lg" color="brand.700">
              What Makes Ask Hank Different?
            </Heading>
            {assurances.map((item, index) => (
              <HStack key={index} align="start" spacing={3}>
                <Icon as={CheckCircleIcon} color="accent.500" boxSize={5} mt={1} />
                <Text color="gray.600" lineHeight="tall">
                  {item}
                </Text>
              </HStack>
            ))}
          </VStack>

          <VStack
            spacing={4}
            align="start"
            p={{ base: 6, md: 8 }}
            bg="white"
            borderWidth={1}
            borderRadius="lg"
            borderColor="gray.200"
            boxShadow="sm"
          >
            <Heading as="h2" size="lg" color="brand.700">
              Conversations Hank Leads
            </Heading>
            {focusAreas.map((item, index) => (
              <HStack key={index} align="start" spacing={3}>
                <Icon as={CheckCircleIcon} color="brand.500" boxSize={5} mt={1} />
                <Text color="gray.600" lineHeight="tall">
                  {item}
                </Text>
              </HStack>
            ))}
          </VStack>
        </SimpleGrid>

        <Box
          mt={{ base: 12, md: 16 }}
          bg="brand.50"
          borderRadius="xl"
          borderWidth={1}
          borderColor="brand.100"
          p={{ base: 6, md: 10 }}
        >
          <Heading as="h3" size="lg" color="brand.700" mb={4} textAlign="center">
            Private Q&amp;A. Honest Answers.
          </Heading>
          <Text
            color="gray.700"
            textAlign="center"
            fontSize={{ base: "md", md: "lg" }}
            maxW="4xl"
            mx="auto"
            lineHeight="tall"
          >
            Hank brings decades of financial coaching wisdom to every conversation. Whether you need a sounding board for a sensitive decision or a long-range plan to build confidence around money, AskHank.ca connects you directly with a trusted voice who has seen it all.
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default AskHank;

