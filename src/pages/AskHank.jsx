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
  Image,
  Stack,
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

  const heroImage =
    "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1600&q=80";

  return (
    <Box bg="gray.50" minH="100vh">
      <Box
        bgGradient="linear(to-r, brand.900, brand.700)"
        color="white"
        py={{ base: 12, md: 20 }}
      >
        <Container maxW="container.xl">
          <Stack
            direction={{ base: "column", lg: "row" }}
            spacing={{ base: 10, lg: 16 }}
            align={{ base: "flex-start", lg: "center" }}
          >
            <VStack spacing={{ base: 6, md: 8 }} align="start" flex={1}>
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
            <Box flex={1} w="100%">
              <VStack align="stretch" spacing={{ base: 6, md: 8 }}>
                <Box position="relative" borderRadius="2xl" overflow="hidden" boxShadow="2xl">
                  <Image
                    src={heroImage}
                    alt="Financial coach discussing plans with clients"
                    objectFit="cover"
                    width="100%"
                    height="100%"
                    maxH={{ base: "220px", md: "300px", lg: "360px" }}
                  />
                  <Box position="absolute" inset={0} bgGradient="linear(to-br, blackAlpha.700, transparent)" />
                  <VStack
                    position="absolute"
                    bottom={{ base: 4, md: 6 }}
                    left={{ base: 4, md: 6 }}
                    align="start"
                    spacing={2}
                    color="white"
                  >
                    <Text fontSize="sm" letterSpacing="widest" textTransform="uppercase">
                      Confidential Money Coaching
                    </Text>
                    <Heading size="md" maxW="sm" lineHeight="short">
                      Guiding families through pivotal financial decisions with empathy
                    </Heading>
                  </VStack>
                </Box>
                <Box
                  borderRadius="xl"
                  borderWidth={1}
                  borderColor="whiteAlpha.400"
                  bg="whiteAlpha.200"
                  backdropFilter="blur(6px)"
                  p={{ base: 5, md: 6 }}
                >
                  <Text color="whiteAlpha.900" lineHeight="tall">
                    Hank Svec blends decades of advisory experience with compassionate coaching so you can act on
                    a plan that feels right for your relationships and long-term goals.
                  </Text>
                </Box>
              </VStack>
            </Box>
          </Stack>
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
