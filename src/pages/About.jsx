import {
  Badge,
  Box,
  Container,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaChartLine, FaCogs, FaGlobe, FaHandshake, FaLightbulb, FaUsers } from "react-icons/fa";

const identityStatements = [
  {
    title: "Boutique by Design",
    detail: "Senior engineers and strategists working with focus, speed, and direct accountability.",
    icon: FaLightbulb,
  },
  {
    title: "Enterprise Credibility",
    detail: "Experience across regulated environments, operating complexity, and growth-stage execution.",
    icon: FaChartLine,
  },
  {
    title: "Global Perspective",
    detail: "Delivery rooted in India with partnerships and context across North America and Europe.",
    icon: FaGlobe,
  },
];

const values = [
  {
    title: "Integrity in Execution",
    description: "Clear communication, realistic commitments, and strong governance through delivery.",
  },
  {
    title: "Human-Centered Design",
    description: "Products shaped around how people actually work, decide, and adopt change.",
  },
  {
    title: "Shared Accountability",
    description: "We work alongside client teams and stay close to the outcomes that matter.",
  },
  {
    title: "Continuous Learning",
    description: "Research, iteration, and applied feedback improve both product quality and decision-making.",
  },
];

const disciplines = [
  "Data platforms and modern architecture",
  "Machine learning engineering and MLOps",
  "Responsible AI governance",
  "Automation, NLP, and computer vision",
  "Product strategy and service design",
  "Embedded delivery leadership",
];

const leadershipPrinciples = [
  {
    title: "Clarity First",
    description: "We define the opportunity, constraints, and success measures before execution starts.",
    icon: FaCogs,
  },
  {
    title: "Design With Stakeholders",
    description: "Decision-makers, operators, and end users stay part of the process throughout delivery.",
    icon: FaUsers,
  },
  {
    title: "Commit to Outcomes",
    description: "Roadmaps are tied to measurable progress, not just output volume.",
    icon: FaHandshake,
  },
];

const About = () => {
  const bg = useColorModeValue("gray.50", "gray.900");
  const heroBg = useColorModeValue(
    "linear(to-br, rgba(248, 250, 252, 0.96), rgba(236, 242, 247, 0.96), rgba(226, 234, 241, 0.96))",
    "linear(to-br, brand.900, brand.800)"
  );
  const cardBg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const sectionLabel = useColorModeValue("brand.600", "accent.200");
  const sectionTitle = useColorModeValue("brand.900", "white");
  const accent = useColorModeValue("brand.700", "brand.200");
  const border = useColorModeValue("gray.200", "gray.700");
  const heroText = useColorModeValue("brand.900", "white");
  const heroSubtext = useColorModeValue("gray.600", "gray.200");
  const cardShadow = useColorModeValue("0 14px 34px rgba(15, 23, 42, 0.07)", "dark-lg");

  return (
    <Box bg={bg} minH="100vh">
      <Box bgGradient={heroBg} borderBottom="1px solid" borderColor={border}>
        <Container maxW="container.xl" py={{ base: 12, md: 16 }}>
            <VStack spacing={4} align="start" maxW="3xl">
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
              About Misron
            </Badge>
            <Heading as="h1" size={{ base: "2xl", md: "3xl" }} lineHeight="shorter" color={heroText}>
              A focused engineering partner for data and AI delivery
            </Heading>
            <Text fontSize={{ base: "lg", md: "xl" }} color={heroSubtext} lineHeight="tall">
              Misron helps organizations turn complex data and AI programs into secure, usable, and commercially relevant products.
            </Text>
          </VStack>
        </Container>
      </Box>

      <Container maxW="container.xl" py={{ base: 12, md: 16 }}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, md: 6 }} mb={{ base: 12, md: 16 }}>
          {identityStatements.map((item) => (
            <VStack
              key={item.title}
              align="start"
              spacing={3}
              bg={cardBg}
              borderWidth={1}
              borderColor={border}
              borderRadius="lg"
              p={{ base: 5, md: 6 }}
              boxShadow={cardShadow}
            >
              <Icon as={item.icon} boxSize={7} color={accent} />
              <Heading size="md" color={sectionTitle}>
                {item.title}
              </Heading>
              <Text color={textColor} lineHeight="tall">
                {item.detail}
              </Text>
            </VStack>
          ))}
        </SimpleGrid>

        <Box
          bg={cardBg}
          borderRadius="xl"
          borderWidth={1}
          borderColor={border}
          p={{ base: 6, md: 8 }}
          mb={{ base: 12, md: 16 }}
          boxShadow={cardShadow}
        >
          <Stack direction={{ base: "column", md: "row" }} spacing={{ base: 5, md: 8 }}>
            <VStack align="start" spacing={4} flex={2}>
              <Text fontSize="xs" letterSpacing="0.12em" textTransform="uppercase" color={sectionLabel}>
                Perspective
              </Text>
              <Heading size="lg" color={sectionTitle}>
                Product thinking, engineering depth, and operational realism
              </Heading>
              <Text color={textColor} lineHeight="tall">
                The name "Misron" comes from Bengali and speaks to purposeful blend. Our work brings together strategy,
                engineering, and delivery leadership to solve problems that cut across business and technology.
              </Text>
              <Text color={textColor} lineHeight="tall">
                We spend time understanding context before building. That includes operating constraints, governance needs,
                user behavior, and commercial priorities.
              </Text>
            </VStack>
            <VStack align="stretch" spacing={4} flex={1}>
              <Heading size="md" color={sectionTitle}>
                Core Disciplines
              </Heading>
              {disciplines.map((item) => (
                <HStack key={item} align="start" spacing={3}>
                  <Icon as={FaChartLine} boxSize={4} color={accent} mt={1} />
                  <Text color={textColor} lineHeight="tall">
                    {item}
                  </Text>
                </HStack>
              ))}
            </VStack>
          </Stack>
        </Box>

        <VStack align="start" spacing={{ base: 5, md: 6 }} mb={{ base: 12, md: 16 }}>
          <Box>
            <Text fontSize="xs" letterSpacing="0.12em" textTransform="uppercase" color={sectionLabel} mb={2}>
              Engagement Style
            </Text>
            <Heading size={{ base: "lg", md: "xl" }} color={sectionTitle}>
              How Misron leads delivery
            </Heading>
          </Box>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, md: 6 }} width="100%">
            {leadershipPrinciples.map((principle) => (
              <VStack
                key={principle.title}
                align="start"
                spacing={3}
                bg={cardBg}
                borderRadius="lg"
                borderWidth={1}
                borderColor={border}
                p={{ base: 5, md: 6 }}
                boxShadow={cardShadow}
              >
                <Icon as={principle.icon} boxSize={6} color={accent} />
                <Heading size="md" color={sectionTitle}>
                  {principle.title}
                </Heading>
                <Text color={textColor} lineHeight="tall">
                  {principle.description}
                </Text>
              </VStack>
            ))}
          </SimpleGrid>
        </VStack>

        <VStack align="start" spacing={{ base: 5, md: 6 }}>
          <Box>
            <Text fontSize="xs" letterSpacing="0.12em" textTransform="uppercase" color={sectionLabel} mb={2}>
              Values
            </Text>
            <Heading size={{ base: "lg", md: "xl" }} color={sectionTitle}>
              Principles behind the work
            </Heading>
          </Box>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, md: 6 }} width="100%">
            {values.map((value) => (
              <Box
                key={value.title}
                bg={cardBg}
                borderRadius="lg"
                borderWidth={1}
                borderColor={border}
                p={{ base: 5, md: 6 }}
                boxShadow={cardShadow}
              >
                <Heading size="md" color={sectionTitle} mb={3}>
                  {value.title}
                </Heading>
                <Text color={textColor} lineHeight="tall">
                  {value.description}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default About;
