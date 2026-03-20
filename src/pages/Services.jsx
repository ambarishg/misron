import {
  Badge,
  Box,
  Button,
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
import { Link as RouterLink } from "react-router-dom";
import { ArrowForwardIcon, CheckCircleIcon } from "@chakra-ui/icons";
import {
  FaBrain,
  FaChartLine,
  FaCogs,
  FaDatabase,
  FaNetworkWired,
  FaRobot,
  FaShieldAlt,
  FaUsersCog,
} from "react-icons/fa";

const serviceGroups = [
  {
    title: "Data Foundations",
    description: "Governed data platforms that support better decisions and faster product delivery.",
    icon: FaDatabase,
    capabilities: [
      "Data strategy and target-state architecture.",
      "Lakehouse, warehouse, and mesh implementations.",
      "Batch, streaming, and event-driven pipelines.",
      "Lineage, quality, and governance controls.",
    ],
  },
  {
    title: "Applied AI and ML Engineering",
    description: "Production-ready AI systems built with governance, explainability, and operational control.",
    icon: FaBrain,
    capabilities: [
      "Use-case discovery and impact modelling.",
      "Predictive, NLP, vision, and generative systems.",
      "MLOps, monitoring, drift detection, and governance.",
      "Responsible AI reviews and human oversight patterns.",
    ],
  },
  {
    title: "Automation and Experience Engineering",
    description: "Automation that improves customer and employee workflows without adding operational noise.",
    icon: FaRobot,
    capabilities: [
      "Knowledge assistants and workflow automation.",
      "Vision systems for field and operations teams.",
      "Decision-support and analytics experiences.",
      "Enablement and adoption planning.",
    ],
  },
  {
    title: "Agentic AI Orchestration",
    description: "Multi-agent systems aligned to business controls, tooling, and measurable outcomes.",
    icon: FaCogs,
    capabilities: [
      "Multi-agent operating models and guardrails.",
      "Retriever workflows grounded in enterprise data.",
      "Tool integrations for safe task execution.",
      "Observation, override, and alignment controls.",
    ],
  },
];

const accelerators = [
  {
    title: "Governed Delivery",
    description: "Program leadership and delivery controls suited to regulated environments.",
    icon: FaUsersCog,
  },
  {
    title: "Security and Compliance",
    description: "Data protection, access control, and compliance patterns built in from the start.",
    icon: FaShieldAlt,
  },
  {
    title: "Performance and Scaling",
    description: "Capacity, reliability, and cost management for sustained production use.",
    icon: FaChartLine,
  },
  {
    title: "Integration Fabric",
    description: "APIs, events, and connectors that fit into existing partner and enterprise ecosystems.",
    icon: FaNetworkWired,
  },
];

const engagementSteps = [
  {
    phase: "01",
    title: "Assess and Align",
    detail: "Translate strategic priorities into a scoped roadmap with measurable outcomes.",
  },
  {
    phase: "02",
    title: "Design and Prototype",
    detail: "Validate feasibility, governance, and business fit before scaling investment.",
  },
  {
    phase: "03",
    title: "Build and Launch",
    detail: "Deliver production systems with testing, telemetry, and clear ownership.",
  },
  {
    phase: "04",
    title: "Operate and Improve",
    detail: "Refine performance, adoption, and resilience through measured iteration.",
  },
];

const highlights = [
  "Cross-functional teams across data, product, AI, and delivery.",
  "Frameworks suited to regulated and operationally sensitive work.",
  "Clear governance across business and technical stakeholders.",
];

const Services = () => {
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
  const badgeBg = useColorModeValue("gray.100", "whiteAlpha.100");

  return (
    <Box bg={pageBg} minH="100vh">
      <Box bgGradient={heroBg} borderBottom="1px solid" borderColor={borderColor}>
        <Container maxW="container.xl" py={{ base: 14, md: 20 }}>
          <Stack direction={{ base: "column", lg: "row" }} spacing={{ base: 10, lg: 16 }} align="stretch">
            <VStack align="start" spacing={6} flex={1.3} maxW="2xl">
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
                Services
              </Badge>
              <Heading as="h1" size={{ base: "2xl", md: "3xl" }} lineHeight="shorter" color={heroText}>
                Delivery for data, AI, and operational systems
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} color={heroSubtext} lineHeight="tall">
                Misron works with leadership teams to modernize data platforms, deploy AI responsibly, and improve
                execution across critical workflows.
              </Text>
              <HStack spacing={4} flexWrap="wrap">
                <Button
                  as={RouterLink}
                  to="/contact"
                  colorScheme="accent"
                  size="lg"
                  rightIcon={<ArrowForwardIcon />}
                >
                  Schedule a Consultation
                </Button>
                <Button as={RouterLink} to="/coinnovationservices" variant="outline" colorScheme="blackAlpha" size="lg">
                  Explore Co-Innovation
                </Button>
              </HStack>
            </VStack>

            <Box
              flex={1}
              bg={cardBg}
              borderWidth="1px"
              borderColor={borderColor}
              borderRadius="2xl"
              p={{ base: 6, md: 8 }}
              boxShadow={cardShadow}
            >
              <VStack align="start" spacing={5}>
                <Box>
                  <Text fontSize="xs" letterSpacing="0.12em" textTransform="uppercase" color={sectionLabel} mb={2}>
                    Engagement Highlights
                  </Text>
                  <Heading size="md" color={sectionTitle}>
                    Delivery with clarity and control
                  </Heading>
                </Box>
                <VStack align="start" spacing={4}>
                  {highlights.map((item) => (
                    <HStack key={item} align="start" spacing={3}>
                      <Icon as={CheckCircleIcon} color={accent} mt={1} />
                      <Text color={textColor} lineHeight="tall">
                        {item}
                      </Text>
                    </HStack>
                  ))}
                </VStack>
              </VStack>
            </Box>
          </Stack>
        </Container>
      </Box>

      <Container maxW="container.xl" py={{ base: 16, md: 20 }}>
        <VStack align="start" spacing={{ base: 6, md: 8 }} mb={{ base: 16, md: 20 }}>
          <Box>
            <Text fontSize="xs" letterSpacing="0.12em" textTransform="uppercase" color={sectionLabel} mb={2}>
              Core Services
            </Text>
            <Heading size={{ base: "lg", md: "xl" }} color={sectionTitle}>
              Delivery areas we lead
            </Heading>
          </Box>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 6, md: 8 }} width="100%">
            {serviceGroups.map((group) => (
              <VStack
                key={group.title}
                align="start"
                spacing={4}
                bg={cardBg}
                borderRadius="xl"
                borderWidth={1}
                borderColor={borderColor}
                p={{ base: 6, md: 8 }}
                boxShadow={cardShadow}
              >
                <HStack spacing={3}>
                  <Icon as={group.icon} boxSize={6} color={accent} />
                  <Heading size="md" color={sectionTitle}>
                    {group.title}
                  </Heading>
                </HStack>
                <Text color={textColor} lineHeight="tall">
                  {group.description}
                </Text>
                <VStack align="start" spacing={3} color={textColor}>
                  {group.capabilities.map((item) => (
                    <HStack key={item} align="start" spacing={3}>
                      <Icon as={CheckCircleIcon} boxSize={4} color={accent} mt={1} />
                      <Text lineHeight="tall">{item}</Text>
                    </HStack>
                  ))}
                </VStack>
              </VStack>
            ))}
          </SimpleGrid>
        </VStack>

        <VStack align="start" spacing={{ base: 6, md: 8 }} mb={{ base: 16, md: 20 }}>
          <Box>
            <Text fontSize="xs" letterSpacing="0.12em" textTransform="uppercase" color={sectionLabel} mb={2}>
              Delivery Accelerators
            </Text>
            <Heading size={{ base: "lg", md: "xl" }} color={sectionTitle}>
              Controls that sustain momentum
            </Heading>
          </Box>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={{ base: 6, md: 8 }} width="100%">
            {accelerators.map((item) => (
              <Box
                key={item.title}
                bg={cardBg}
                borderRadius="xl"
                borderWidth={1}
                borderColor={borderColor}
                p={{ base: 6, md: 7 }}
                boxShadow={cardShadow}
              >
                <HStack spacing={3} mb={3}>
                  <Icon as={item.icon} boxSize={5} color={accent} />
                  <Heading size="sm" color={sectionTitle}>
                    {item.title}
                  </Heading>
                </HStack>
                <Text color={textColor} lineHeight="tall">
                  {item.description}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>

        <VStack align="start" spacing={{ base: 6, md: 8 }}>
          <Box>
            <Text fontSize="xs" letterSpacing="0.12em" textTransform="uppercase" color={sectionLabel} mb={2}>
              Engagement Model
            </Text>
            <Heading size={{ base: "lg", md: "xl" }} color={sectionTitle}>
              A clear delivery cadence
            </Heading>
          </Box>
          <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} spacing={{ base: 6, md: 6 }} width="100%">
            {engagementSteps.map((step) => (
              <VStack
                key={step.phase}
                align="start"
                spacing={4}
                bg={cardBg}
                borderRadius="xl"
                borderWidth={1}
                borderColor={borderColor}
                p={{ base: 5, md: 6 }}
                boxShadow={cardShadow}
              >
                <Badge px={3} py={1} borderRadius="full" bg={badgeBg} color={accent}>
                  Phase {step.phase}
                </Badge>
                <Heading size="sm" color={sectionTitle}>
                  {step.title}
                </Heading>
                <Text color={textColor} lineHeight="tall">
                  {step.detail}
                </Text>
              </VStack>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>

      <Box bg={useColorModeValue("brand.900", "brand.800")} color="white" py={{ base: 12, md: 16 }}>
        <Container maxW="container.xl">
          <Stack direction={{ base: "column", md: "row" }} spacing={{ base: 6, md: 10 }} align="center">
            <VStack align="start" spacing={3} flex={1}>
              <Text fontSize="xs" letterSpacing="0.12em" textTransform="uppercase" color="whiteAlpha.700">
                Start a conversation
              </Text>
              <Heading size={{ base: "lg", md: "xl" }}>
                Need a clearer path from strategy to delivery?
              </Heading>
              <Text color="whiteAlpha.800" lineHeight="tall">
                We align on outcomes, architecture, and operating constraints before execution begins.
              </Text>
            </VStack>
            <HStack spacing={4} flexWrap="wrap">
              <Button as={RouterLink} to="/contact" colorScheme="accent" size="lg">
                Talk to Misron
              </Button>
              <Button as={RouterLink} to="/coinnovationservices" variant="outline" colorScheme="whiteAlpha" size="lg">
                View Co-Innovation
              </Button>
            </HStack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Services;
