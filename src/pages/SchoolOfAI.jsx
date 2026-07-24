import {
  Box,
  Badge,
  Divider,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";

import {
  FaBrain,
  FaPython,
  FaRobot,
  FaUserGraduate,
  FaCheckCircle,
} from "react-icons/fa";

const features = [
  {
    icon: FaBrain,
    title: "CBSE AI Curriculum",
    description:
      "Full syllabus coverage for CBSE Artificial Intelligence, Class IX and X, mapped to board learning outcomes and assessment criteria.",
  },
  {
    icon: FaPython,
    title: "Python Programming",
    description:
      "Python taught from first principles, reinforced through graded coding exercises that build toward independent project work.",
  },
  {
    icon: FaRobot,
    title: "Applied AI Projects",
    description:
      "Every module ends in a working project, so students demonstrate understanding by building, not only by answering questions.",
  },
  {
    icon: FaUserGraduate,
    title: "Industry Mentorship",
    description:
      "Sessions are designed and delivered by practicing AI professionals, not generic curriculum staff.",
  },
];

const credentials = [
  "CBSE-aligned syllabus and assessment mapping",
  "Python taught from the ground up, no prior coding required",
  "Portfolio of real, working AI projects by course end",
  "Small batches for direct instructor attention",
  "Taught by working AI practitioners",
];

const stats = [
  { label: "Grade Level", value: "IX \u2013 X" },
  { label: "Board", value: "CBSE" },
  { label: "Format", value: "Project-Based" },
  { label: "Stack", value: "AI \u00b7 Python \u00b7 CT" },
];

export default function SchoolOfAI() {
  const pageBg = useColorModeValue("gray.50", "gray.900");
  const heroBg = useColorModeValue(
    "linear(to-br, rgba(248, 250, 252, 0.96), rgba(236, 242, 247, 0.96), rgba(226, 234, 241, 0.96))",
    "linear(to-br, brand.900, brand.800)"
  );
  const cardBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const accent = useColorModeValue("brand.700", "brand.200");
  const sectionLabel = useColorModeValue("brand.600", "accent.200");
  const sectionTitle = useColorModeValue("brand.900", "white");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const heroText = useColorModeValue("brand.900", "white");
  const heroSubtext = useColorModeValue("gray.600", "gray.200");
  const cardShadow = useColorModeValue("0 14px 34px rgba(15, 23, 42, 0.07)", "dark-lg");
  const badgeBg = useColorModeValue("gray.100", "whiteAlpha.100");
  const accentBar = useColorModeValue("brand.600", "brand.300");
  return (
    <Box bg={pageBg} minH="100vh">
      <Box bgGradient={heroBg} borderBottom="1px solid" borderColor={borderColor}>
        <Container maxW="container.xl" py={{ base: 12, md: 16 }}>
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={16} alignItems="center">
          {/* Left */}
          <Stack spacing={8}>
            <HStack spacing={3}>
              <Box w="28px" h="2px" bg={accentBar} />
              <Text
                fontSize="xs"
                letterSpacing="0.15em"
                fontWeight="600"
                color={sectionLabel}
                textTransform="uppercase"
              >
                School of AI &amp; Computing
              </Text>
            </HStack>

            <Heading
              fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
              lineHeight="1.1"
              fontWeight="800"
              color={heroText}
            >
              A rigorous AI education
              <br />
              for CBSE Class IX &amp; X
            </Heading>

            <Text fontSize="lg" color={heroSubtext} maxW="520px" lineHeight="1.7">
              Students build Artificial Intelligence, Python programming and
              computational thinking skills through structured, project-based
              instruction aligned with the current CBSE curriculum.
            </Text>

            <Divider borderColor="gray.200" pt={2} />

            <SimpleGrid columns={4} spacing={4} pt={2}>
              {stats.map((s) => (
                <VStack key={s.label} align="start" spacing={1}>
                  <Text
                    fontSize={{ base: "sm", md: "md" }}
                    fontWeight="700"
                    color={heroText}
                  >
                    {s.value}
                  </Text>
                  <Text
                    fontSize="xs"
                    color="gray.500"
                    textTransform="uppercase"
                    letterSpacing="0.05em"
                  >
                    {s.label}
                  </Text>
                </VStack>
              ))}
            </SimpleGrid>
          </Stack>

          {/* Right: credential card */}
          <Box
            bg={cardBg}
            borderRadius="2xl"
            border="1px solid"
            borderColor={borderColor}
            shadow="lg"
            position="relative"
            overflow="hidden"
          >
            <Box h="6px" bg={accentBar} />

            <Box p={10}>
              <Text
                fontSize="xs"
                letterSpacing="0.15em"
                fontWeight="600"
                color={accentBar}
                textTransform="uppercase"
                mb={4}
              >
                Why Parents Choose Us
              </Text>

              <Heading size="lg" fontWeight="700" color={sectionTitle} mb={8}>
                Preparing students for an AI-driven future
              </Heading>

              <VStack align="stretch" spacing={5}>
                {credentials.map((item) => (
                  <HStack key={item} align="start" spacing={3}>
                    <Icon as={FaCheckCircle} color={accent} mt={1} boxSize={4} />
                    <Text color={textColor} lineHeight="1.6">
                      {item}
                    </Text>
                  </HStack>
                ))}
              </VStack>
            </Box>
          </Box>
        </SimpleGrid>
        </Container>
      </Box>

      {/* WHY CHOOSE US */}
      <Container maxW="container.xl" py={24}>
        <VStack spacing={4} mb={16}>
          <HStack spacing={3}>
            <Box w="28px" h="2px" bg={accentBar} />
            <Text
              fontSize="xs"
              letterSpacing="0.15em"
              fontWeight="600"
              color={sectionLabel}
              textTransform="uppercase"
            >
              Why Misron
            </Text>
            <Box w="28px" h="2px" bg={accentBar} />
          </HStack>

          <Heading
            textAlign="center"
            fontSize={{ base: "3xl", md: "4xl" }}
            fontWeight="800"
            color={sectionTitle}
          >
            Building the next generation
            <br />
            of AI innovators
          </Heading>

          <Text color={textColor} maxW="650px" textAlign="center" lineHeight="1.7">
            We combine industry expertise, project-based learning and the CBSE
            curriculum to help students build durable, future-ready skills.
          </Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} spacing={8}>
          {features.map((feature) => (
            <Box
              key={feature.title}
              bg={cardBg}
              p={8}
              rounded="xl"
              border="1px solid"
              borderColor={borderColor}
              transition="all .2s ease"
              boxShadow={cardShadow}
              _hover={{
                borderColor: accent,
                shadow: "md",
              }}
            >
              <Flex
                w="52px"
                h="52px"
                rounded="lg"
                bg={badgeBg}
                align="center"
                justify="center"
                mb={6}
              >
                <Icon as={feature.icon} boxSize={6} color={accent} />
              </Flex>

              <Heading size="md" fontWeight="700" color={sectionTitle} mb={3}>
                {feature.title}
              </Heading>

              <Text color={textColor} lineHeight="1.6" fontSize="sm">
                {feature.description}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
