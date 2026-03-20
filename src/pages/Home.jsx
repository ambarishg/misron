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
import { CheckCircleIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";

const products = [
  {
    title: "AskHank.ca",
    subtitle: "Ask Hank: Your Money Coach",
    description:
      "Private money coaching for sensitive financial decisions.",
    href: "https://askhank.ca",
    featured: true,
    domain: {
      label: "Finance",
      lightBg: "green.50",
      darkBg: "green.900",
      lightColor: "green.700",
      darkColor: "green.200",
      borderColor: "green.100",
    },
  },
  {
    title: "AI Bee Health",
    description:
      "Disease detection and forecasting to protect colony health and yield.",
    domain: {
      label: "Sustainability and Ecology",
      lightBg: "teal.50",
      darkBg: "teal.900",
      lightColor: "teal.700",
      darkColor: "teal.200",
      borderColor: "teal.100",
    },
  },
  {
    title: "Misron Assistant",
    description:
      "Secure research assistant for traceable insights and executive summaries.",
    domain: {
      label: "Enterprise",
      lightBg: "blue.50",
      darkBg: "blue.900",
      lightColor: "blue.700",
      darkColor: "blue.200",
      borderColor: "blue.100",
    },
  },
];

const differentiators = [
  {
    title: "Boutique Engineering Rigor",
    detail:
      "Senior teams delivering enterprise-grade work with direct accountability.",
  },
  {
    title: "Strategy Through Delivery",
    detail:
      "Strategy, delivery, and operations aligned in one engagement model.",
  },
  {
    title: "Measured Progress",
    detail:
      "Clear KPIs tied to adoption, efficiency, and business value.",
  },
];

const capabilities = [
  {
    title: "Data Products and Platforms",
    description:
      "Governed data platforms and analytics built for better decisions.",
  },
  {
    title: "Applied AI and Automation",
    description:
      "Practical AI and automation with governance built in.",
  },
  {
    title: "Industry Partnerships",
    description:
      "Co-innovation with partners across fintech, healthcare, agritech, and services.",
  },
];

const engagementMilestones = [
  {
    phase: "01",
    title: "Discover",
    detail: "Define the problem, priorities, and success measures.",
  },
  {
    phase: "02",
    title: "Design and Validate",
    detail: "Validate workflows, feasibility, and governance early.",
  },
  {
    phase: "03",
    title: "Build and Launch",
    detail: "Deliver secure systems with clear rollout and operating plans.",
  },
  {
    phase: "04",
    title: "Operate and Evolve",
    detail: "Improve performance and value through measured iteration.",
  },
];

const credibilitySignals = [
  "Trusted by teams in North America and India.",
  "Transparent delivery with measurable outcomes.",
  "Built for regulated and operationally sensitive environments.",
];

const Home = () => {
  const pageBg = useColorModeValue("gray.50", "gray.900");
  const heroBg = useColorModeValue(
    "linear(to-br, rgba(248, 250, 252, 0.96), rgba(236, 242, 247, 0.96), rgba(226, 234, 241, 0.96))",
    "linear(to-br, brand.900, brand.800)"
  );
  const sectionLabel = useColorModeValue("brand.600", "accent.200");
  const sectionTitle = useColorModeValue("brand.900", "white");
  const mutedText = useColorModeValue("gray.600", "gray.300");
  const cardBg = useColorModeValue("white", "gray.800");
  const cardBorder = useColorModeValue("gray.200", "gray.700");
  const subtleBorder = useColorModeValue("gray.300", "gray.600");
  const subtleBg = useColorModeValue("gray.100", "whiteAlpha.100");
  const accent = useColorModeValue("brand.700", "brand.200");
  const heroText = useColorModeValue("brand.900", "white");
  const heroSubtext = useColorModeValue("gray.600", "gray.200");
  const cardShadow = useColorModeValue("0 14px 34px rgba(15, 23, 42, 0.07)", "dark-lg");
  const ctaBg = useColorModeValue("brand.900", "brand.800");

  return (
    <Box bg={pageBg}>
      <Box bgGradient={heroBg} borderBottom="1px solid" borderColor={cardBorder}>
        <Container maxW="container.xl" py={{ base: 12, md: 16 }}>
          <Stack
            direction={{ base: "column", lg: "row" }}
            spacing={{ base: 8, lg: 12 }}
            align={{ base: "flex-start", lg: "stretch" }}
          >
            <VStack align="start" spacing={5} flex={1.2} maxW="2xl">
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
                Boutique Digital Engineering
              </Badge>
              <Heading as="h1" size={{ base: "2xl", md: "3xl" }} lineHeight="shorter" color={heroText}>
                Data and AI products built for real operations
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} lineHeight="tall" color={heroSubtext}>
                Misron helps leadership teams design and deliver data and AI systems that are secure, practical, and ready to scale.
              </Text>
              <HStack spacing={4} flexWrap="wrap">
                <Button
                  as={RouterLink}
                  to="/contact"
                  colorScheme="accent"
                  size="lg"
                  rightIcon={<ArrowForwardIcon />}
                >
                  Book a Working Session
                </Button>
                <Button as={RouterLink} to="/about" variant="outline" colorScheme="blackAlpha" size="lg">
                  Learn About Misron
                </Button>
              </HStack>
            </VStack>

            <Box
              flex={{ lg: "0 0 360px" }}
              w="100%"
              maxW={{ lg: "360px" }}
              alignSelf="flex-start"
              bg={cardBg}
              borderWidth="1px"
              borderColor={cardBorder}
              borderRadius="xl"
              p={{ base: 4, md: 5 }}
              boxShadow={cardShadow}
            >
              <VStack align="start" spacing={3}>
                <Box>
                  <Text fontSize="xs" letterSpacing="0.12em" textTransform="uppercase" color={sectionLabel} mb={1}>
                    Why teams choose Misron
                  </Text>
                  <Heading size="sm" color={sectionTitle}>
                    Direct, accountable delivery
                  </Heading>
                </Box>
                <VStack align="start" spacing={2}>
                  {credibilitySignals.map((item) => (
                    <HStack key={item} spacing={3} align="start">
                      <Icon as={CheckCircleIcon} color={accent} mt={1} />
                      <Text color={mutedText} lineHeight="1.6">
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

      <Container maxW="container.xl" py={{ base: 12, md: 16 }}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, md: 6 }} mb={{ base: 12, md: 16 }}>
          {differentiators.map((item) => (
            <Box
              key={item.title}
              bg={cardBg}
              borderRadius="lg"
              borderWidth={1}
              borderColor={cardBorder}
              p={{ base: 5, md: 6 }}
              boxShadow={cardShadow}
            >
              <Text fontSize="xs" letterSpacing="0.12em" textTransform="uppercase" color={sectionLabel} mb={3}>
                Differentiator
              </Text>
              <Heading size="md" color={sectionTitle} mb={3}>
                {item.title}
              </Heading>
              <Text color={mutedText} lineHeight="tall">
                {item.detail}
              </Text>
            </Box>
          ))}
        </SimpleGrid>

        <VStack align="start" spacing={{ base: 5, md: 6 }} mb={{ base: 12, md: 16 }}>
          <Box>
            <Text fontSize="xs" letterSpacing="0.12em" textTransform="uppercase" color={sectionLabel} mb={2}>
              Flagship Products
            </Text>
            <Heading size={{ base: "lg", md: "xl" }} color={sectionTitle}>
              Products built around clear use cases
            </Heading>
          </Box>
          <Text color={mutedText} maxW="3xl" lineHeight="tall">
            Selected products and platforms delivered with a focus on adoption, trust, and execution.
          </Text>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, md: 6 }} width="100%">
            {products.map((product) => (
              <VStack
                key={product.title}
                align="start"
                spacing={3}
                bg={cardBg}
                borderRadius="lg"
                borderWidth={1}
                borderColor={product.featured ? subtleBorder : cardBorder}
                p={{ base: 5, md: 6 }}
                boxShadow={cardShadow}
                _hover={{ borderColor: subtleBorder }}
                transition="border-color 0.2s ease"
              >
                <Badge
                  bg={useColorModeValue(product.domain.lightBg, product.domain.darkBg)}
                  color={useColorModeValue(product.domain.lightColor, product.domain.darkColor)}
                  borderWidth={1}
                  borderColor={useColorModeValue(product.domain.borderColor, "transparent")}
                  borderRadius="full"
                  px={3}
                  py={1}
                  textTransform="uppercase"
                  letterSpacing="0.1em"
                  fontSize="xs"
                  fontWeight="semibold"
                >
                  {product.domain.label}
                </Badge>
                <Heading size="md" color={sectionTitle}>
                  {product.title}
                </Heading>
                {product.subtitle && (
                  <Text fontWeight="semibold" color={mutedText}>
                    {product.subtitle}
                  </Text>
                )}
                <Text color={mutedText} lineHeight="tall">
                  {product.description}
                </Text>
                {product.href ? (
                  <Link
                    href={product.href}
                    isExternal
                    color={accent}
                    fontWeight="semibold"
                    _hover={{ textDecoration: "underline" }}
                  >
                    Visit AskHank.ca
                  </Link>
                ) : (
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

        <VStack align="start" spacing={{ base: 5, md: 6 }} mb={{ base: 12, md: 16 }}>
          <Box>
            <Text fontSize="xs" letterSpacing="0.12em" textTransform="uppercase" color={sectionLabel} mb={2}>
              Capabilities
            </Text>
            <Heading size={{ base: "lg", md: "xl" }} color={sectionTitle}>
              Core delivery areas
            </Heading>
          </Box>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, md: 6 }} width="100%">
            {capabilities.map((item) => (
              <Box
                key={item.title}
                bg={cardBg}
                borderRadius="lg"
                borderWidth={1}
                borderColor={cardBorder}
                p={{ base: 5, md: 6 }}
                boxShadow={cardShadow}
              >
                <Heading size="md" color={sectionTitle} mb={3}>
                  {item.title}
                </Heading>
                <Text color={mutedText} lineHeight="tall">
                  {item.description}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </VStack>

        <VStack align="start" spacing={{ base: 5, md: 6 }}>
          <Box>
            <Text fontSize="xs" letterSpacing="0.12em" textTransform="uppercase" color={sectionLabel} mb={2}>
              Engagement Model
            </Text>
            <Heading size={{ base: "lg", md: "xl" }} color={sectionTitle}>
              A clear engagement model
            </Heading>
          </Box>
          <Text color={mutedText} maxW="3xl" lineHeight="tall">
            A structured cadence gives teams visibility into scope, risk, and progress.
          </Text>
          <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} spacing={{ base: 5, md: 5 }} width="100%">
            {engagementMilestones.map((milestone) => (
              <VStack
                key={milestone.phase}
                align="start"
                spacing={3}
                bg={cardBg}
                borderRadius="lg"
                borderWidth={1}
                borderColor={cardBorder}
                p={{ base: 4, md: 5 }}
                boxShadow={cardShadow}
              >
                <Badge px={3} py={1} borderRadius="lg" bg={subtleBg} color={accent}>
                  Phase {milestone.phase}
                </Badge>
                <Heading size="sm" color={sectionTitle}>
                  {milestone.title}
                </Heading>
                <Text color={mutedText} lineHeight="tall">
                  {milestone.detail}
                </Text>
              </VStack>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>

      <Box bg={ctaBg} color="white" py={{ base: 10, md: 14 }}>
        <Container maxW="container.xl">
          <Stack direction={{ base: "column", md: "row" }} spacing={{ base: 5, md: 8 }} align="center">
            <VStack align="start" spacing={3} flex={1}>
              <Text fontSize="xs" letterSpacing="0.12em" textTransform="uppercase" color="whiteAlpha.700">
                Start a conversation
              </Text>
              <Heading size={{ base: "lg", md: "xl" }}>
                Ready to move with a clearer plan?
              </Heading>
              <Text color="whiteAlpha.800" lineHeight="tall">
                We align on outcomes, architecture, and delivery constraints before execution begins.
              </Text>
            </VStack>
            <HStack spacing={4} flexWrap="wrap">
              <Button as={RouterLink} to="/contact" colorScheme="accent" size="lg">
                Start the Conversation
              </Button>
              <Button as={RouterLink} to="/coinnovationservices" variant="outline" colorScheme="whiteAlpha" size="lg">
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
