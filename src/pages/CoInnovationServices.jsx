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
import {
  FaHandshake,
  FaLightbulb,
  FaRocket,
  FaUsers,
  FaPuzzlePiece,
  FaChartLine,
  FaShieldAlt,
  FaCogs,
} from "react-icons/fa";

const collaborationModels = [
  {
    title: "Venture Studio Sprints",
    description:
      "Rapid co-creation programmes for founders and intrapreneurs bringing net-new concepts to market. We build joint squads, validate product-market fit, and move from hypothesis to pilot in weeks.",
    icon: FaRocket,
  },
  {
    title: "Industry Alliances",
    description:
      "Partner with domain leaders to modernise core operations or unlock new revenue streams. Misron orchestrates governance, compliance, and data-sharing frameworks that keep partnerships aligned.",
    icon: FaHandshake,
  },
  {
    title: "Platform Integrations",
    description:
      "Embed your technology into our data and AI ecosystems—or integrate ours into yours. We design extensible architectures, APIs, and SDKs so products scale seamlessly across customer portfolios.",
    icon: FaPuzzlePiece,
  },
];

const valuePillars = [
  {
    title: "Strategic Product Vision",
    description:
      "Facilitated ideation backed by market intelligence to define the ‘why’, target segments, and value proposition before engineering begins.",
    icon: FaLightbulb,
  },
  {
    title: "Operational Readiness",
    description:
      "Delivery leadership, agile rituals, and change management support that embed co-innovation into existing operating models.",
    icon: FaUsers,
  },
  {
    title: "Risk & Compliance Guardrails",
    description:
      "Responsible AI, data privacy, and IP frameworks that let legal and security stakeholders champion the collaboration.",
    icon: FaShieldAlt,
  },
  {
    title: "Measurable Growth",
    description:
      "Business cases grounded in metrics—adoption, retention, efficiency gains, revenue expansion—tracked from day one.",
    icon: FaChartLine,
  },
];

const serviceTracks = [
  {
    title: "Discovery & Alignment",
    points: [
      "Executive workshops capturing user needs, regulatory considerations, and commercial goals.",
      "Market and trend landscaping to prioritise high-value opportunity spaces.",
      "Joint success scorecards aligning stakeholders on measurable outcomes.",
    ],
  },
  {
    title: "Product Architecture",
    points: [
      "Reference architectures blending partner capabilities with Misron’s data and AI components.",
      "Security, governance, and integration blueprints signed off by both organisations.",
      "Experience design journeys illustrating user impact across touchpoints.",
    ],
  },
  {
    title: "Build & Validate",
    points: [
      "Cross-functional pods with shared PMO oversight and transparent burndown reporting.",
      "Pilot deployments with instrumentation to capture qualitative and quantitative feedback.",
      "Iterative release strategy ensuring momentum without sacrificing quality.",
    ],
  },
  {
    title: "Scale & Operate",
    points: [
      "Runbooks for enablement, support, and ongoing data stewardship.",
      "Commercial go-to-market alignment: packaging, pricing, partner incentives.",
      "Continuous optimisation loops, informed by telemetry and partner retrospectives.",
    ],
  },
];

const deliveryRhythm = [
  {
    phase: "Immersion (Weeks 1-2)",
    description:
      "Form the joint leadership council, align on hypotheses, and establish compliance pathways.",
  },
  {
    phase: "Design Sprints (Weeks 3-6)",
    description:
      "Prototype concepts, validate with users, and de-risk data access, integration, and security.",
  },
  {
    phase: "Build Cycles (Weeks 7-14)",
    description:
      "Iterative development with shared sprint reviews, technical showcases, and governance checkpoints.",
  },
  {
    phase: "Launch & Iterate (Weeks 15+)",
    description:
      "Co-own go-to-market, monitor adoption metrics, and feed learnings into the partnership backlog.",
  },
];

const proofPoints = [
  "Co-created AI Bee Health alongside Wildflower Bee Farm, building an edge-ready disease detection platform now piloted across multiple apiaries.",
  "Accelerated fintech compliance automation with a partner network, reducing audit preparation cycles by 45%.",
  "Delivered joint NLP accelerators for professional services firms, enabling secure knowledge retrieval across global practices.",
];

const CoInnovationServices = () => {
  const pageBg = useColorModeValue("gray.50", "gray.900");
  const cardBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const accent = useColorModeValue("brand.600", "brand.200");
  const textColor = useColorModeValue("gray.600", "gray.300");

  return (
    <Box bg={pageBg} minH="100vh">
      {/* Hero */}
      <Box position="relative" bgGradient="linear(to-r, brand.900, brand.700)" color="white" py={{ base: 16, md: 24 }}>
        <Container maxW="container.xl">
          <Stack direction={{ base: "column", md: "row" }} spacing={{ base: 10, md: 16 }} align="center">
            <VStack align="start" spacing={6} flex={2}>
              <Text textTransform="uppercase" letterSpacing="widest" fontWeight="semibold" color="accent.200">
                Co-Innovation Programmes
              </Text>
              <Heading as="h1" size={{ base: "2xl", md: "3xl" }} fontWeight="extrabold" lineHeight="shorter">
                Build strategic products with a boutique engineering partner by your side
              </Heading>
              <Text fontSize={{ base: "md", md: "xl" }} maxW="3xl" lineHeight="tall" color="accent.100">
                Misron teams with enterprises, venture studios, and technology providers to bring data and AI products to market faster—without sacrificing compliance, user trust, or operational excellence.
              </Text>
              <HStack spacing={4} flexWrap="wrap">
                <Button as={RouterLink} to="/contact" colorScheme="accent" size="lg" fontWeight="semibold">
                  Request a Co-Innovation Session
                </Button>
                <Button as={RouterLink} to="/projects" variant="outline" colorScheme="whiteAlpha" size="lg">
                  View Flagship Work
                </Button>
              </HStack>
            </VStack>
            <Box flex={1} bg="whiteAlpha.100" borderRadius="2xl" p={{ base: 6, md: 8 }} backdropFilter="blur(10px)">
              <VStack align="start" spacing={4}>
                <Heading size="md" color="accent.200">
                  Partnership Snapshot
                </Heading>
                {proofPoints.map((item) => (
                  <HStack key={item} align="start" spacing={3}>
                    <Icon as={FaCogs} color="accent.200" mt={1} />
                    <Text color="accent.100" lineHeight="tall">
                      {item}
                    </Text>
                  </HStack>
                ))}
              </VStack>
            </Box>
          </Stack>
        </Container>
      </Box>

      <Container maxW="container.xl" py={{ base: 16, md: 20 }}>
        {/* Collaboration Models */}
        <VStack align="start" spacing={{ base: 6, md: 8 }} mb={{ base: 16, md: 20 }}>
          <Heading size={{ base: "lg", md: "xl" }} color={accent}>
            Collaboration Models
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 6, md: 8 }} width="100%">
            {collaborationModels.map((model) => (
              <VStack
                key={model.title}
                align="start"
                spacing={4}
                bg={cardBg}
                borderRadius="xl"
                borderWidth={1}
                borderColor={borderColor}
                p={{ base: 6, md: 8 }}
                boxShadow="md"
              >
                <Icon as={model.icon} boxSize={8} color={accent} />
                <Heading size="md" color={accent}>
                  {model.title}
                </Heading>
                <Text color={textColor} lineHeight="tall">
                  {model.description}
                </Text>
              </VStack>
            ))}
          </SimpleGrid>
        </VStack>

        {/* Value Pillars */}
        <VStack align="start" spacing={{ base: 6, md: 8 }} mb={{ base: 16, md: 20 }}>
          <Heading size={{ base: "lg", md: "xl" }} color={accent}>
            What Sets Misron Apart
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 6, md: 8 }} width="100%">
            {valuePillars.map((pillar) => (
              <Box
                key={pillar.title}
                bg={cardBg}
                borderRadius="xl"
                borderWidth={1}
                borderColor={borderColor}
                p={{ base: 6, md: 8 }}
                boxShadow="md"
              >
                <HStack spacing={3} mb={3}>
                  <Icon as={pillar.icon} boxSize={7} color={accent} />
                  <Heading size="md" color={accent}>
                    {pillar.title}
                  </Heading>
                </HStack>
                <Text color={textColor} lineHeight="tall">
                  {pillar.description}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>

        {/* Service Tracks */}
        <VStack align="start" spacing={{ base: 6, md: 8 }} mb={{ base: 16, md: 20 }}>
          <Heading size={{ base: "lg", md: "xl" }} color={accent}>
            Co-Innovation Tracks
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 6, md: 8 }} width="100%">
            {serviceTracks.map((track) => (
              <Box
                key={track.title}
                bg={cardBg}
                borderRadius="xl"
                borderWidth={1}
                borderColor={borderColor}
                p={{ base: 6, md: 8 }}
                boxShadow="md"
              >
                <Heading size="md" color={accent} mb={3}>
                  {track.title}
                </Heading>
                <VStack align="start" spacing={3}>
                  {track.points.map((point) => (
                    <HStack key={point} align="start" spacing={3}>
                      <Icon as={FaCogs} boxSize={4} color={accent} mt={1} />
                      <Text color={textColor} lineHeight="tall">
                        {point}
                      </Text>
                    </HStack>
                  ))}
                </VStack>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>

        {/* Delivery Rhythm */}
        <VStack align="start" spacing={{ base: 6, md: 8 }} mb={{ base: 16, md: 20 }}>
          <Heading size={{ base: "lg", md: "xl" }} color={accent}>
            Delivery Rhythm
          </Heading>
          <Stack spacing={6}>
            {deliveryRhythm.map((stage, index) => (
              <Box
                key={stage.phase}
                bg={cardBg}
                borderRadius="xl"
                borderWidth={1}
                borderColor={borderColor}
                p={{ base: 6, md: 7 }}
                boxShadow="sm"
              >
                <HStack justify="space-between" mb={2}>
                  <Text fontWeight="bold" color={accent}>
                    {stage.phase}
                  </Text>
                  <Text color={textColor} fontSize="sm">
                    Phase {index + 1}
                  </Text>
                </HStack>
                <Text color={textColor} lineHeight="tall">
                  {stage.description}
                </Text>
              </Box>
            ))}
          </Stack>
        </VStack>

        {/* CTA */}
        <Box
          bg={cardBg}
          borderRadius="2xl"
          borderWidth={1}
          borderColor={borderColor}
          p={{ base: 8, md: 12 }}
          boxShadow="xl"
        >
          <Stack direction={{ base: "column", md: "row" }} spacing={{ base: 6, md: 10 }} align="center">
            <VStack align="start" spacing={3} flex={1}>
              <Heading size={{ base: "lg", md: "xl" }} color={accent}>
                Ready to co-create the next generation of products?
              </Heading>
              <Text color={textColor} fontSize={{ base: "md", md: "lg" }} lineHeight="tall">
                Bring your strategy, we’ll bring boutique engineering depth. Together we’ll design the roadmap, define
                the governance, and execute with momentum.
              </Text>
            </VStack>
            <HStack spacing={4}>
              <Button as={RouterLink} to="/contact" colorScheme="brand" size="lg" fontWeight="semibold">
                Start the Conversation
              </Button>
              <Button as={RouterLink} to="/services" variant="outline" colorScheme="brand" size="lg">
                Explore Services
              </Button>
            </HStack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default CoInnovationServices;

