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
import {
  FaChartLine,
  FaCogs,
  FaHandshake,
  FaLightbulb,
  FaPuzzlePiece,
  FaRocket,
  FaShieldAlt,
  FaUsers,
} from "react-icons/fa";

const collaborationModels = [
  {
    title: "Venture Studio Sprints",
    description: "Joint product sprints to move new concepts from idea to pilot with speed and discipline.",
    icon: FaRocket,
  },
  {
    title: "Industry Alliances",
    description: "Partnership models for modernizing operations or launching new revenue lines with shared governance.",
    icon: FaHandshake,
  },
  {
    title: "Platform Integrations",
    description: "Extensible integrations, APIs, and shared architectures built to scale across partner ecosystems.",
    icon: FaPuzzlePiece,
  },
];

const valuePillars = [
  {
    title: "Strategic Product Vision",
    description: "Clear market framing, target use cases, and value definition before engineering begins.",
    icon: FaLightbulb,
  },
  {
    title: "Operational Readiness",
    description: "Delivery controls, decision-making rhythms, and enablement that fit existing operating models.",
    icon: FaUsers,
  },
  {
    title: "Risk and Compliance Guardrails",
    description: "Responsible AI, privacy, and IP frameworks that stand up to legal and security review.",
    icon: FaShieldAlt,
  },
  {
    title: "Measured Growth",
    description: "Progress tied to adoption, efficiency, retention, and revenue from the start.",
    icon: FaChartLine,
  },
];

const serviceTracks = [
  {
    title: "Discovery and Alignment",
    points: [
      "Executive workshops on user needs, regulation, and commercial goals.",
      "Market scanning to prioritize viable opportunities.",
      "Shared success scorecards across stakeholders.",
    ],
  },
  {
    title: "Product Architecture",
    points: [
      "Reference architectures combining partner and Misron capabilities.",
      "Security, governance, and integration blueprints.",
      "Experience flows mapping user impact across touchpoints.",
    ],
  },
  {
    title: "Build and Validate",
    points: [
      "Cross-functional delivery pods with shared oversight.",
      "Pilot deployments with clear instrumentation.",
      "Release planning that preserves speed and control.",
    ],
  },
  {
    title: "Scale and Operate",
    points: [
      "Runbooks for support, stewardship, and enablement.",
      "Commercial alignment on packaging and incentives.",
      "Ongoing optimization informed by telemetry and partner review.",
    ],
  },
];

const deliveryRhythm = [
  {
    phase: "01",
    title: "Immersion",
    description: "Form the joint leadership group, align on hypotheses, and establish governance pathways.",
  },
  {
    phase: "02",
    title: "Design Sprints",
    description: "Prototype concepts and de-risk data access, integration, and security decisions.",
  },
  {
    phase: "03",
    title: "Build Cycles",
    description: "Run iterative development with shared reviews, checkpoints, and visible progress.",
  },
  {
    phase: "04",
    title: "Launch and Iterate",
    description: "Monitor adoption, refine the offer, and feed learning back into the roadmap.",
  },
];

const proofPoints = [
  "AI Bee Health co-developed with Wildflower Bee Farm.",
  "Fintech compliance automation accelerated through partner delivery.",
  "Secure NLP accelerators launched for professional services teams.",
];

const CoInnovationServices = () => {
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
                Co-Innovation
              </Badge>
              <Heading as="h1" size={{ base: "2xl", md: "3xl" }} lineHeight="shorter" color={heroText}>
                Build strategic products through structured partnership
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} color={heroSubtext} lineHeight="tall">
                Misron works with enterprises, venture teams, and technology partners to bring data and AI products to
                market with speed, governance, and operational discipline.
              </Text>
              <HStack spacing={4} flexWrap="wrap">
                <Button as={RouterLink} to="/contact" colorScheme="accent" size="lg">
                  Request a Session
                </Button>
                <Button as={RouterLink} to="/services" variant="outline" colorScheme="blackAlpha" size="lg">
                  View Services
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
                    Partnership Snapshot
                  </Text>
                  <Heading size="md" color={sectionTitle}>
                    Joint execution with clear governance
                  </Heading>
                </Box>
                <VStack align="start" spacing={4}>
                  {proofPoints.map((item) => (
                    <HStack key={item} align="start" spacing={3}>
                      <Icon as={FaCogs} color={accent} mt={1} />
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
              Collaboration Models
            </Text>
            <Heading size={{ base: "lg", md: "xl" }} color={sectionTitle}>
              Partnership structures we support
            </Heading>
          </Box>
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
                boxShadow={cardShadow}
              >
                <Icon as={model.icon} boxSize={7} color={accent} />
                <Heading size="md" color={sectionTitle}>
                  {model.title}
                </Heading>
                <Text color={textColor} lineHeight="tall">
                  {model.description}
                </Text>
              </VStack>
            ))}
          </SimpleGrid>
        </VStack>

        <VStack align="start" spacing={{ base: 6, md: 8 }} mb={{ base: 16, md: 20 }}>
          <Box>
            <Text fontSize="xs" letterSpacing="0.12em" textTransform="uppercase" color={sectionLabel} mb={2}>
              Value Pillars
            </Text>
            <Heading size={{ base: "lg", md: "xl" }} color={sectionTitle}>
              What keeps the model grounded
            </Heading>
          </Box>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 6, md: 8 }} width="100%">
            {valuePillars.map((pillar) => (
              <Box
                key={pillar.title}
                bg={cardBg}
                borderRadius="xl"
                borderWidth={1}
                borderColor={borderColor}
                p={{ base: 6, md: 8 }}
                boxShadow={cardShadow}
              >
                <HStack spacing={3} mb={3}>
                  <Icon as={pillar.icon} boxSize={6} color={accent} />
                  <Heading size="md" color={sectionTitle}>
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

        <VStack align="start" spacing={{ base: 6, md: 8 }} mb={{ base: 16, md: 20 }}>
          <Box>
            <Text fontSize="xs" letterSpacing="0.12em" textTransform="uppercase" color={sectionLabel} mb={2}>
              Co-Innovation Tracks
            </Text>
            <Heading size={{ base: "lg", md: "xl" }} color={sectionTitle}>
              How the work is structured
            </Heading>
          </Box>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 6, md: 8 }} width="100%">
            {serviceTracks.map((track) => (
              <Box
                key={track.title}
                bg={cardBg}
                borderRadius="xl"
                borderWidth={1}
                borderColor={borderColor}
                p={{ base: 6, md: 8 }}
                boxShadow={cardShadow}
              >
                <Heading size="md" color={sectionTitle} mb={3}>
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

        <VStack align="start" spacing={{ base: 6, md: 8 }} mb={{ base: 16, md: 20 }}>
          <Box>
            <Text fontSize="xs" letterSpacing="0.12em" textTransform="uppercase" color={sectionLabel} mb={2}>
              Delivery Rhythm
            </Text>
            <Heading size={{ base: "lg", md: "xl" }} color={sectionTitle}>
              A structured partnership cadence
            </Heading>
          </Box>
          <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} spacing={{ base: 6, md: 6 }} width="100%">
            {deliveryRhythm.map((stage) => (
              <VStack
                key={stage.phase}
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
                  Phase {stage.phase}
                </Badge>
                <Heading size="sm" color={sectionTitle}>
                  {stage.title}
                </Heading>
                <Text color={textColor} lineHeight="tall">
                  {stage.description}
                </Text>
              </VStack>
            ))}
          </SimpleGrid>
        </VStack>

        <Box bg={cardBg} borderRadius="2xl" borderWidth={1} borderColor={borderColor} p={{ base: 8, md: 10 }} boxShadow={cardShadow}>
          <Stack direction={{ base: "column", md: "row" }} spacing={{ base: 6, md: 10 }} align="center">
            <VStack align="start" spacing={3} flex={1}>
              <Text fontSize="xs" letterSpacing="0.12em" textTransform="uppercase" color={sectionLabel}>
                Start a conversation
              </Text>
              <Heading size={{ base: "lg", md: "xl" }} color={sectionTitle}>
                Ready to shape a product through partnership?
              </Heading>
              <Text color={textColor} fontSize={{ base: "md", md: "lg" }} lineHeight="tall">
                We can align on the model, governance, and delivery plan before work begins.
              </Text>
            </VStack>
            <HStack spacing={4} flexWrap="wrap">
              <Button as={RouterLink} to="/contact" colorScheme="accent" size="lg">
                Start the Conversation
              </Button>
              <Button as={RouterLink} to="/services" variant="outline" colorScheme="blackAlpha" size="lg">
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
