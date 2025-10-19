import {
  Box,
  Button,
  Container,
  Divider,
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
import { CheckCircleIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import {
  FaDatabase,
  FaBrain,
  FaRobot,
  FaCogs,
  FaShieldAlt,
  FaChartLine,
  FaNetworkWired,
  FaUsersCog,
} from "react-icons/fa";

const serviceGroups = [
  {
    title: "Data Foundations",
    description:
      "Modern, governed data estates that unlock trusted decisioning and accelerate product development.",
    icon: FaDatabase,
    capabilities: [
      "Data strategy, maturity assessments, and target-state architecture.",
      "Data lakehouse, warehouse, and mesh implementations with observability baked in.",
      "Batch, streaming, and event-driven pipelines customised for regulatory needs.",
      "Metadata, lineage, and quality frameworks enabling compliance confidence.",
    ],
  },
  {
    title: "Applied AI & ML Engineering",
    description:
      "Specialised machine learning teams delivering models that are explainable, auditable, and production-ready.",
    icon: FaBrain,
    capabilities: [
      "Use-case discovery and financial modelling to prioritise impact.",
      "Model development spanning predictive, NLP, CV, and generative techniques.",
      "MLOps toolchains with CI/CD, monitoring, drift detection, and model governance.",
      "Responsible AI reviews covering bias mitigation, ethics, and human-in-the-loop design.",
    ],
  },
  {
    title: "Automation & Experience Engineering",
    description:
      "Human-centric automation that embeds intelligence into customer and employee journeys.",
    icon: FaRobot,
    capabilities: [
      "Conversational AI, knowledge assistants, and workflow automation.",
      "Computer vision solutions for field operations, manufacturing, and digital twins.",
      "Augmented analytics and decision-support experiences integrated with core systems.",
      "Change management, enablement, and adoption strategies to ensure sustained value.",
    ],
  },
  {
    title: "Agentic AI Orchestration",
    description:
      "Autonomous agent frameworks that collaborate with human teams to deliver continuous outcomes.",
    icon: FaCogs,
    capabilities: [
      "Blueprints for multi-agent ecosystems aligned to business guardrails and KPIs.",
      "Retriever-augmented workflows that blend enterprise knowledge with real-time signals.",
      "Action connectors and tool integrations that let agents execute tasks safely.",
      "Observation, alignment, and override controls to keep humans in command of outcomes.",
    ],
  },
];

const accelerators = [
  {
    title: "Governed Delivery",
    description:
      "Program leadership, PMO integration, and agile rituals designed for regulated industries.",
    icon: FaUsersCog,
  },
  {
    title: "Security & Compliance",
    description:
      "Zero-trust architectures, data protection, and compliance controls aligned with global standards.",
    icon: FaShieldAlt,
  },
  {
    title: "Performance & Scaling",
    description:
      "FinOps, capacity planning, and load strategies that keep solutions reliable and cost-efficient.",
    icon: FaChartLine,
  },
  {
    title: "Integration Fabric",
    description:
      "API ecosystems, event hubs, and connector frameworks that interoperate with your partners and platforms.",
    icon: FaNetworkWired,
  },
];

const engagementSteps = [
  {
    phase: "1 · Assess & Align",
    detail: "Joint discovery sessions translate strategic priorities into a scoped roadmap with measurable outcomes.",
  },
  {
    phase: "2 · Design & Prototype",
    detail: "Architectural blueprints and rapid prototypes validate feasibility, governance, and business desirability.",
  },
  {
    phase: "3 · Build & Launch",
    detail: "Cross-functional squads deliver production systems with continuous user testing and telemetry.",
  },
  {
    phase: "4 · Operate & Evolve",
    detail: "Managed optimisation, enablement, and enhancement cycles keep solutions resilient and relevant.",
  },
];

const Services = () => {
  const pageBg = useColorModeValue("gray.50", "gray.900");
  const cardBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const accent = useColorModeValue("brand.600", "brand.200");
  const textColor = useColorModeValue("gray.600", "gray.300");

  return (
    <Box bg={pageBg} minH="100vh">
      {/* Hero */}
      <Box bgGradient="linear(to-r, brand.900, brand.700)" color="white" py={{ base: 16, md: 24 }}>
        <Container maxW="container.xl">
          <Stack direction={{ base: "column", md: "row" }} spacing={{ base: 8, md: 14 }} align="center">
            <VStack align="start" spacing={6} flex={2}>
              <Text textTransform="uppercase" letterSpacing="widest" fontWeight="semibold" color="accent.200">
                Services
              </Text>
              <Heading as="h1" size={{ base: "2xl", md: "3xl" }} fontWeight="extrabold">
                Strategy through delivery for trusted data & AI products
              </Heading>
              <Text fontSize={{ base: "md", md: "xl" }} maxW="3xl" lineHeight="tall" color="accent.100">
                Misron embeds with your leadership, product, and engineering teams to modernise data estates, build responsible AI, and orchestrate automation that delivers measurable business outcomes.
              </Text>
              <HStack spacing={4} flexWrap="wrap">
                <Button as={RouterLink} to="/contact" colorScheme="accent" size="lg" fontWeight="semibold" rightIcon={<ArrowForwardIcon />}>
                  Schedule a Consultation
                </Button>
                <Button as={RouterLink} to="/coinnovationservices" variant="outline" colorScheme="whiteAlpha" size="lg">
                  Explore Co-Innovation
                </Button>
              </HStack>
            </VStack>
            <Box flex={1} bg="whiteAlpha.100" borderRadius="2xl" p={{ base: 6, md: 8 }} backdropFilter="blur(10px)">
              <VStack align="start" spacing={4}>
                <Heading size="md" color="accent.200">
                  Engagement Highlights
                </Heading>
                <VStack align="start" spacing={3}>
                  {[
                    "Cross-functional squads with data, ML, product, and change specialists.",
                    "Modular frameworks built for regulated industries and fast-growth ventures.",
                    "Transparent delivery governance with business and technology stakeholders.",
                  ].map((item) => (
                    <HStack key={item} align="start" spacing={3}>
                      <Icon as={CheckCircleIcon} color="accent.200" mt={1} />
                      <Text color="accent.100" lineHeight="tall">
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
        {/* Services */}
        <VStack align="start" spacing={{ base: 6, md: 8 }} mb={{ base: 16, md: 20 }}>
          <Heading size={{ base: "lg", md: "xl" }} color={accent}>
            Core Service Domains
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 6, md: 8 }} width="100%">
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
                boxShadow="md"
              >
                <HStack spacing={3}>
                  <Icon as={group.icon} boxSize={7} color={accent} />
                  <Heading size="md" color={accent}>
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

        {/* Accelerators */}
        <VStack align="start" spacing={{ base: 6, md: 8 }} mb={{ base: 16, md: 20 }}>
          <Heading size={{ base: "lg", md: "xl" }} color={accent}>
            Accelerators That Sustain Momentum
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={{ base: 6, md: 8 }} width="100%">
            {accelerators.map((item) => (
              <Box
                key={item.title}
                bg={cardBg}
                borderRadius="xl"
                borderWidth={1}
                borderColor={borderColor}
                p={{ base: 6, md: 7 }}
                boxShadow="sm"
              >
                <HStack spacing={3} mb={3}>
                  <Icon as={item.icon} boxSize={6} color={accent} />
                  <Heading size="sm" color={accent}>
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

        {/* Engagement Steps */}
        <VStack align="start" spacing={{ base: 6, md: 8 }}>
          <Heading size={{ base: "lg", md: "xl" }} color={accent}>
            Partnership Rhythm
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 4 }} spacing={{ base: 6, md: 6 }} width="100%">
            {engagementSteps.map((step) => (
              <VStack
                key={step.phase}
                align="start"
                spacing={3}
                bg={cardBg}
                borderRadius="xl"
                borderWidth={1}
                borderColor={borderColor}
                p={{ base: 5, md: 6 }}
                boxShadow="sm"
              >
                <Text fontWeight="bold" color={accent}>
                  {step.phase}
                </Text>
                <Text color={textColor} lineHeight="tall">
                  {step.detail}
                </Text>
              </VStack>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>

      {/* CTA */}
      <Box bg={useColorModeValue("brand.900", "brand.800")} color="white" py={{ base: 12, md: 16 }}>
        <Container maxW="container.xl">
          <Stack direction={{ base: "column", md: "row" }} spacing={{ base: 6, md: 10 }} align="center">
            <VStack align="start" spacing={3} flex={1}>
              <Heading size={{ base: "lg", md: "xl" }}>
                Let’s architect a roadmap that delivers clarity and confidence.
              </Heading>
              <Text color="accent.100" lineHeight="tall">
                Share your goals, timelines, and constraints—we’ll configure a boutique squad ready to move with you from discovery to scale.
              </Text>
            </VStack>
            <HStack spacing={4}>
              <Button as={RouterLink} to="/contact" colorScheme="accent" size="lg" fontWeight="semibold">
                Talk to Misron
              </Button>
              <Button as={RouterLink} to="/projects" variant="outline" colorScheme="whiteAlpha" size="lg">
                View Case Studies
              </Button>
            </HStack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Services;
