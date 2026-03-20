import {
  Badge,
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Icon,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";

const AskHank = () => {
  const assurances = [
    "Confidential one-to-one guidance tailored to your financial situation.",
    "Direct conversations on money habits, relationships, and long-term planning.",
    "Practical next steps you can apply immediately.",
  ];

  const focusAreas = [
    "Difficult money conversations with partners or family",
    "Wealth strategy in uncertain markets",
    "Debt, investment, and retirement decisions",
  ];

  const pageBg = useColorModeValue("gray.50", "gray.900");
  const heroBg = useColorModeValue("linear(to-br, #f4f6f8, #e9eef2)", "linear(to-br, brand.900, brand.800)");
  const cardBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const accent = useColorModeValue("brand.700", "brand.200");
  const sectionLabel = useColorModeValue("brand.600", "accent.200");
  const sectionTitle = useColorModeValue("brand.900", "white");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const heroText = useColorModeValue("brand.900", "white");
  const heroSubtext = useColorModeValue("gray.600", "gray.200");
  const cardShadow = useColorModeValue("0 10px 30px rgba(15, 23, 42, 0.06)", "dark-lg");

  return (
    <Box bg={pageBg} minH="100vh">
      <Box bgGradient={heroBg} borderBottom="1px solid" borderColor={borderColor}>
        <Container maxW="container.xl" py={{ base: 14, md: 20 }}>
          <Stack direction={{ base: "column", lg: "row" }} spacing={{ base: 10, lg: 16 }} align="stretch">
            <VStack spacing={{ base: 6, md: 8 }} align="start" flex={1.2} maxW="2xl">
              <Badge
                px={3}
                py={1}
                borderRadius="full"
                bg={useColorModeValue("brand.100", "whiteAlpha.200")}
                color={heroText}
                borderWidth="1px"
                borderColor={useColorModeValue("brand.200", "whiteAlpha.300")}
                letterSpacing="0.12em"
                textTransform="uppercase"
              >
                AskHank.ca
              </Badge>
              <Heading as="h1" size={{ base: "2xl", md: "3xl" }} lineHeight="shorter" color={heroText}>
                Private money coaching for personal decisions that matter
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} maxW="3xl" lineHeight="tall" color={heroSubtext}>
                Ask Hank gives individuals and families a confidential place to work through financial questions with
                clarity, discretion, and practical guidance.
              </Text>
              <HStack spacing={{ base: 3, md: 4 }} wrap="wrap">
                <Button as={Link} href="https://askhank.ca" isExternal colorScheme="accent" size={{ base: "md", md: "lg" }}>
                  Visit askHank.ca
                </Button>
                <Button
                  as={RouterLink}
                  to="/contact"
                  variant="outline"
                  colorScheme="blackAlpha"
                  size={{ base: "md", md: "lg" }}
                >
                  Talk With Misron
                </Button>
              </HStack>
            </VStack>

            <Box
              flex={1}
              w="100%"
              bg={cardBg}
              borderWidth={1}
              borderColor={borderColor}
              borderRadius="2xl"
              p={{ base: 6, md: 8 }}
              boxShadow={cardShadow}
            >
              <VStack align="start" spacing={5}>
                <Box>
                  <Text fontSize="xs" letterSpacing="0.12em" textTransform="uppercase" color={sectionLabel} mb={2}>
                    Coaching Snapshot
                  </Text>
                  <Heading size="md" color={sectionTitle}>
                    Discreet, personal, practical
                  </Heading>
                </Box>
                <Text color={textColor} lineHeight="tall">
                  Henry Svec brings advisory experience and calm judgment to conversations that often involve stress,
                  uncertainty, and family dynamics.
                </Text>
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
            bg={cardBg}
            borderWidth={1}
            borderRadius="xl"
            borderColor={borderColor}
            boxShadow={cardShadow}
          >
            <Text fontSize="xs" letterSpacing="0.12em" textTransform="uppercase" color={sectionLabel}>
              What Sets It Apart
            </Text>
            <Heading as="h2" size="lg" color={sectionTitle}>
              What makes Ask Hank different
            </Heading>
            {assurances.map((item, index) => (
              <HStack key={index} align="start" spacing={3}>
                <Icon as={CheckCircleIcon} color={accent} boxSize={5} mt={1} />
                <Text color={textColor} lineHeight="tall">
                  {item}
                </Text>
              </HStack>
            ))}
          </VStack>

          <VStack
            spacing={4}
            align="start"
            p={{ base: 6, md: 8 }}
            bg={cardBg}
            borderWidth={1}
            borderRadius="xl"
            borderColor={borderColor}
            boxShadow={cardShadow}
          >
            <Text fontSize="xs" letterSpacing="0.12em" textTransform="uppercase" color={sectionLabel}>
              Focus Areas
            </Text>
            <Heading as="h2" size="lg" color={sectionTitle}>
              Conversations Hank leads
            </Heading>
            {focusAreas.map((item, index) => (
              <HStack key={index} align="start" spacing={3}>
                <Icon as={CheckCircleIcon} color={accent} boxSize={5} mt={1} />
                <Text color={textColor} lineHeight="tall">
                  {item}
                </Text>
              </HStack>
            ))}
          </VStack>
        </SimpleGrid>

        <Box mt={{ base: 12, md: 16 }} bg={cardBg} borderRadius="2xl" borderWidth={1} borderColor={borderColor} p={{ base: 6, md: 10 }} boxShadow={cardShadow}>
          <Text fontSize="xs" letterSpacing="0.12em" textTransform="uppercase" color={sectionLabel} mb={3} textAlign="center">
            Positioning
          </Text>
          <Heading as="h3" size="lg" color={sectionTitle} mb={4} textAlign="center">
            Private questions. Clear answers.
          </Heading>
          <Text
            color={textColor}
            textAlign="center"
            fontSize={{ base: "md", md: "lg" }}
            maxW="4xl"
            mx="auto"
            lineHeight="tall"
          >
            AskHank.ca gives clients direct access to trusted financial guidance when the decision is personal, sensitive,
            or difficult to discuss elsewhere.
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default AskHank;
