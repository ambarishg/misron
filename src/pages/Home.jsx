import {
  Badge,
  Box,
  Button,
  Container,
  Divider,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { CheckCircleIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";

const products = [
  {
    title: "AskHank.ca",
    subtitle: "Ask Hank: Your Money Coach",
    description:
      "Private, confidential money coaching with Henry Svec. Navigate sensitive financial decisions with trusted, one-to-one guidance.",
    href: "https://askhank.ca",
    featured: true,
    domain: { label: "Finance", colorScheme: "green" },
  },
  {
    title: "AI Bee Health",
    description:
      "Edge-first disease detection and forecasting platform purpose-built with Wildflower Bee Farm to preserve colony vitality and yield.",
    domain: { label: "Sustainability and Ecology", colorScheme: "teal" },
  },
  {
    title: "Misron Assistant",
    description:
      "Secure, document-grounded research assistant delivering traceable insights, compliance-ready summaries, and executive briefings in minutes.",
    domain: { label: "Enterprise", colorScheme: "purple" },
  },
];

const differentiators = [
  {
    title: "Boutique Engineering Rigor",
    detail:
      "Specialised squads delivering enterprise-grade architecture with the pace of a startup studio.",
  },
  {
    title: "Strategy Through Delivery",
    detail:
      "From discovery workshops to product operations, we steward initiatives end-to-end.",
  },
  {
    title: "Provable Outcomes",
    detail:
      "Engagements anchored in measurable KPIs - adoption, efficiency, user sentiment, and revenue impact.",
  },
];

const capabilities = [
  {
    title: "Data Products & Platforms",
    description:
      "Composable data estates, governed pipelines, and analytics experiences that unlock intelligent decisioning.",
  },
  {
    title: "Applied AI & Automation",
    description:
      "Operational AI that is explainable, auditable, and tuned to your business language and risk profile.",
  },
  {
    title: "Industry Partnerships",
    description:
      "Co-innovation programs with sector experts spanning fintech, healthcare, agritech, and professional services.",
  },
];

const engagementMilestones = [
  {
    phase: "01 - Discover",
    detail: "Co-create the product thesis, user stories, and success metrics with executive stakeholders.",
  },
  {
    phase: "02 - Design & Validate",
    detail: "Prototype high-value journeys, validate data feasibility, and stress-test governance needs.",
  },
  {
    phase: "03 - Build & Launch",
    detail: "Deliver secure, scalable solutions with progressive rollouts, observability, and enablement.",
  },
  {
    phase: "04 - Evolve",
    detail: "Operate a continuous improvement loop with telemetry-led enhancements and new revenue plays.",
  },
];

const credibilitySignals = [
  "Trusted by innovation leaders across North America and India.",
   "Partner-first mindset with transparent collaboration and measurable impact.",
];

const Home = () => {
  const heroImage =
    "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80";
  const heroBg = useColorModeValue("linear(to-r, brand.900, brand.700)", "linear(to-r, brand.800, brand.600)");
  const heroOverlay = useColorModeValue("rgba(16, 42, 67, 0.85)", "rgba(15, 36, 58, 0.75)");
  const cardBg = useColorModeValue("white", "gray.800");
  const cardBorder = useColorModeValue("gray.200", "gray.700");
  const accent = useColorModeValue("brand.600", "brand.200");

  return (
    <Box bg={useColorModeValue("gray.50", "gray.900")}>
      {/* Hero */}
      <Box
        position="relative"
        overflow="hidden"
        py={{ base: 16, md: 24 }}
        bgGradient={heroBg}
        color="white"
      >
        <Box position="absolute" inset={0} bg={heroOverlay} opacity={0.85} />
        <Container maxW="container.xl" position="relative">
          <Stack
            direction={{ base: "column", lg: "row" }}
            spacing={{ base: 10, lg: 16 }}
            align={{ base: "flex-start", lg: "center" }}
          >
            <VStack align="start" spacing={6} flex={1}>
              <Text textTransform="uppercase" letterSpacing="widest" fontWeight="semibold" color="accent.200">
                Boutique Digital Engineering
              </Text>
              <Heading as="h1" size={{ base: "2xl", md: "3xl" }} fontWeight="extrabold" lineHeight="shorter">
                Building trustworthy data & AI products
              </Heading>
              <Text fontSize={{ base: "md", md: "xl" }} maxW="3xl" lineHeight="tall" color="accent.100">
                Misron partners with leadership teams to orchestrate secure, measurable digital programmes - from
                strategic design through to production operations.
              </Text>
              <HStack spacing={4} flexWrap="wrap">
                <Button
                  as={RouterLink}
                  to="/contact"
                  colorScheme="accent"
                  size="lg"
                  fontWeight="semibold"
                  rightIcon={<ArrowForwardIcon />}
                >
                  Book a Working Session
                </Button>
                <Button
                  as={RouterLink}
                  to="/about"
                  variant="outline"
                  colorScheme="whiteAlpha"
                  size="lg"
                >
                  Learn About Misron
                </Button>
              </HStack>
            </VStack>
            <Box flex={1}>
              <VStack align="stretch" spacing={{ base: 6, md: 8 }}>
                <Box
                  position="relative"
                  borderRadius="2xl"
                  overflow="hidden"
                  boxShadow="2xl"
                >
                  <Image
                    src={heroImage}
                    alt="Engineering leaders collaborating in a modern workspace"
                    objectFit="cover"
                    width="100%"
                    height="100%"
                    maxH={{ base: "240px", md: "320px", lg: "360px" }}
                  />
                  <Box
                    position="absolute"
                    inset={0}
                    bgGradient="linear(to-br, blackAlpha.700, blackAlpha.300)"
                  />
                  <VStack
                    position="absolute"
                    bottom={{ base: 4, md: 6 }}
                    left={{ base: 4, md: 6 }}
                    align="start"
                    spacing={2}
                    color="white"
                  >
                    <Text fontSize="sm" letterSpacing="wider" textTransform="uppercase">
                      Proven Engineering Leaders
                    </Text>
                    <Heading size="md" maxW="xs" lineHeight="short">
                      Modern delivery rooms where strategy and execution align
                    </Heading>
                  </VStack>
                </Box>
                <Box
                  bg="whiteAlpha.100"
                  borderRadius="2xl"
                  p={{ base: 6, md: 8 }}
                  backdropFilter="blur(8px)"
                >
                  <VStack align="start" spacing={6}>
                    <Heading size="md" color="accent.100">
                      Why teams choose Misron
                    </Heading>
                    <VStack align="start" spacing={3}>
                      {credibilitySignals.map((item) => (
                        <HStack key={item} spacing={3} align="start">
                          <Icon as={CheckCircleIcon} color="accent.200" mt={1} />
                          <Text color="accent.100" lineHeight="tall">
                            {item}
                          </Text>
                        </HStack>
                      ))}
                    </VStack>
                  </VStack>
                </Box>
              </VStack>
            </Box>
          </Stack>
        </Container>
      </Box>

      <Container maxW="container.xl" py={{ base: 16, md: 20 }}>
        {/* Differentiators */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 6, md: 8 }} mb={{ base: 16, md: 20 }}>
          {differentiators.map((item) => (
            <Box
              key={item.title}
              bg={cardBg}
              borderRadius="xl"
              borderWidth={1}
              borderColor={cardBorder}
              p={{ base: 6, md: 8 }}
              boxShadow="md"
            >
              <Heading size="md" color={accent} mb={3}>
                {item.title}
              </Heading>
              <Text color={useColorModeValue("gray.600", "gray.300")} lineHeight="tall">
                {item.detail}
              </Text>
            </Box>
          ))}
        </SimpleGrid>

        {/* Featured Products */}
        <VStack align="start" spacing={{ base: 6, md: 8 }} mb={{ base: 16, md: 20 }}>
          <Heading size={{ base: "lg", md: "xl" }} color={accent}>
            Flagship Products
          </Heading>
          <Text color={useColorModeValue("gray.600", "gray.300")} maxW="3xl" lineHeight="tall">
            Product studios, venture teams, and enterprise innovators rely on Misron to bring differentiated data and
            AI offerings to market. Explore a selection of active engagements.
          </Text>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 6, md: 8 }} width="100%">
            {products.map((product) => (
              <VStack
                key={product.title}
                align="start"
                spacing={4}
                bg={product.featured ? "brand.50" : cardBg}
                borderRadius="xl"
                borderWidth={1}
                borderColor={product.featured ? accent : cardBorder}
                p={{ base: 6, md: 7 }}
                boxShadow={product.featured ? "xl" : "md"}
                transition="transform 0.2s ease, box-shadow 0.2s ease"
                _hover={{ transform: "translateY(-6px)", boxShadow: "xl" }}
                >
                  {product.domain && (
                    <Badge
                      colorScheme={product.domain.colorScheme}
                      variant="subtle"
                      borderRadius="full"
                      px={3}
                      py={1}
                      textTransform="uppercase"
                      letterSpacing="wider"
                      fontSize="xs"
                      fontWeight="semibold"
                    >
                      {product.domain.label}
                    </Badge>
                  )}
                  <Heading size="md" color={accent}>
                    {product.title}
                  </Heading>
                {product.subtitle && (
                  <Text fontWeight="semibold" color={useColorModeValue("gray.500", "gray.300")}>
                    {product.subtitle}
                  </Text>
                )}
                <Text color={useColorModeValue("gray.600", "gray.300")} lineHeight="tall">
                  {product.description}
                </Text>
                {product.href && (
                  <Link
                    href={product.href}
                    isExternal
                    color={accent}
                    fontWeight="semibold"
                    _hover={{ textDecoration: "underline" }}
                  >
                    Visit askHank.ca
                  </Link>
                )}
                {!product.href && (
                  <Button
                    as={RouterLink}
                    to={product.title === "Misron Assistant" ? "/searchassistant" : "/ai-bee-health"}
                    variant="link"
                    color={accent}
                    fontWeight="semibold"
                    rightIcon={<ArrowForwardIcon />}
                  >
                    View solution
                  </Button>
                )}
              </VStack>
            ))}
          </SimpleGrid>
        </VStack>

        {/* Capabilities */}
        <VStack align="start" spacing={{ base: 6, md: 8 }} mb={{ base: 16, md: 20 }}>
          <Heading size={{ base: "lg", md: "xl" }} color={accent}>
            What We Deliver
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 6, md: 8 }} width="100%">
            {capabilities.map((item) => (
              <Box
                key={item.title}
                bg={cardBg}
                borderRadius="xl"
                borderWidth={1}
                borderColor={cardBorder}
                p={{ base: 6, md: 7 }}
                boxShadow="md"
              >
                <Heading size="md" color={accent} mb={3}>
                  {item.title}
                </Heading>
                <Text color={useColorModeValue("gray.600", "gray.300")} lineHeight="tall">
                  {item.description}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>

        {/* Engagement Process */}
        <VStack align="start" spacing={{ base: 6, md: 8 }}>
          <Heading size={{ base: "lg", md: "xl" }} color={accent}>
            A Partnership Blueprint
          </Heading>
          <Text color={useColorModeValue("gray.600", "gray.300")} maxW="3xl" lineHeight="tall">
            Each engagement follows a transparent delivery cadence, ensuring stakeholders have clarity and control
            at every stage while momentum stays high.
          </Text>
          <SimpleGrid columns={{ base: 1, md: 4 }} spacing={{ base: 6, md: 6 }} width="100%">
            {engagementMilestones.map((milestone) => (
              <VStack
                key={milestone.phase}
                align="start"
                spacing={3}
                bg={cardBg}
                borderRadius="xl"
                borderWidth={1}
                borderColor={cardBorder}
                p={{ base: 5, md: 6 }}
              >
                <Text fontSize="sm" fontWeight="bold" color={accent}>
                  {milestone.phase}
                </Text>
                <Text color={useColorModeValue("gray.600", "gray.300")} lineHeight="tall">
                  {milestone.detail}
                </Text>
              </VStack>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>

      {/* Final CTA */}
      <Box bg={useColorModeValue("brand.900", "brand.800")} color="white" py={{ base: 12, md: 16 }}>
        <Container maxW="container.xl">
          <Stack direction={{ base: "column", md: "row" }} spacing={{ base: 6, md: 10 }} align="center">
            <VStack align="start" spacing={3} flex={1}>
              <Heading size={{ base: "lg", md: "xl" }}>
                Ready to bring your next product to market with confidence?
              </Heading>
              <Text color="accent.100" lineHeight="tall">
                Let's align on outcomes, architecture, and go-to-market. We will assemble the right specialists
                and get to work.
              </Text>
            </VStack>
            <HStack spacing={4}>
              <Button
                as={RouterLink}
                to="/contact"
                colorScheme="accent"
                size="lg"
                fontWeight="semibold"
              >
                Start the Conversation
              </Button>
              <Button
                as={RouterLink}
                to="/coinnovationservices"
                variant="outline"
                colorScheme="whiteAlpha"
                size="lg"
              >
                View Services
              </Button>
            </HStack>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;



