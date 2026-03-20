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
  SimpleGrid,
  Stack,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import ReactPlayer from "react-player";
import { FaExternalLinkAlt, FaYoutube } from "react-icons/fa";
import { FiActivity, FiAward, FiShield } from "react-icons/fi";
import { Link as RouterLink } from "react-router-dom";

const impactHighlights = [
  {
    icon: FiActivity,
    title: "Predictive Health Insights",
    description: "Early detection models help operators intervene before colony issues escalate.",
  },
  {
    icon: FiShield,
    title: "Field-Ready Design",
    description: "Edge-ready architecture supports remote farming environments with limited connectivity.",
  },
  {
    icon: FiAward,
    title: "Sustainable Outcomes",
    description: "The platform supports pollination stability and agricultural resilience.",
  },
];

const resultMetrics = [
  { value: "75%", label: "Model Accuracy Across Key Diseases" },
  { value: "6 Weeks", label: "Time to MVP from Discovery Workshop" },
  { value: "24/7", label: "Monitoring Coverage for Partner Apiaries" },
];

const Projects = () => {
  const pageBg = useColorModeValue("gray.50", "gray.900");
  const heroBg = useColorModeValue(
    "linear(to-br, rgba(248, 250, 252, 0.96), rgba(236, 242, 247, 0.96), rgba(226, 234, 241, 0.96))",
    "linear(to-br, brand.900, brand.800)"
  );
  const cardBg = useColorModeValue("white", "gray.800");
  const cardBorder = useColorModeValue("gray.200", "gray.700");
  const sectionLabel = useColorModeValue("brand.600", "accent.200");
  const sectionTitle = useColorModeValue("brand.900", "white");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const accentText = useColorModeValue("brand.700", "brand.200");
  const heroText = useColorModeValue("brand.900", "white");
  const heroSubtext = useColorModeValue("gray.600", "gray.200");
  const cardShadow = useColorModeValue("0 14px 34px rgba(15, 23, 42, 0.07)", "dark-lg");
  const badgeBg = useColorModeValue("gray.100", "whiteAlpha.100");

  return (
    <Box bg={pageBg}>
      <Box bgGradient={heroBg} borderBottom="1px solid" borderColor={cardBorder}>
        <Container maxW="container.xl" py={{ base: 12, md: 16 }}>
          <Stack direction={{ base: "column", lg: "row" }} spacing={{ base: 8, lg: 12 }} align="stretch">
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
                Case Study
              </Badge>
              <Heading as="h1" size={{ base: "2xl", md: "3xl" }} lineHeight="shorter" color={heroText}>
                AI Bee Health
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} color={heroSubtext} lineHeight="tall">
                A monitoring platform built with Wildflower Bee Farm to classify bee activity, detect disease patterns,
                and support field decisions.
              </Text>
              <HStack spacing={4} flexWrap="wrap">
                <Button
                  as="a"
                  href="https://aibeehealth.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  colorScheme="accent"
                  rightIcon={<FaExternalLinkAlt />}
                >
                  Visit AI Bee Health
                </Button>
                <Button
                  as="a"
                  href="https://www.youtube.com/watch?v=hDdE1aI0mOM"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  colorScheme="blackAlpha"
                  rightIcon={<FaYoutube />}
                >
                  Watch Overview
                </Button>
              </HStack>
            </VStack>
            <Box
              flex={{ lg: "0 0 360px" }}
              maxW={{ lg: "360px" }}
              alignSelf="flex-start"
              bg={cardBg}
              borderWidth={1}
              borderColor={cardBorder}
              borderRadius="xl"
              p={{ base: 4, md: 5 }}
              boxShadow={cardShadow}
            >
              <VStack align="start" spacing={3}>
                <Box>
                  <Text fontSize="xs" letterSpacing="0.12em" textTransform="uppercase" color={sectionLabel} mb={1}>
                    Product Snapshot
                  </Text>
                  <Heading size="sm" color={sectionTitle}>
                    Built for field use and operational clarity
                  </Heading>
                </Box>
                <Image
                  src="./aibeehealth.png"
                  alt="AI Bee Health Dashboard"
                  maxW={{ base: "240px", md: "300px" }}
                  borderRadius="md"
                  boxShadow="md"
                  alignSelf="center"
                />
              </VStack>
            </Box>
          </Stack>
        </Container>
      </Box>

      <Container maxW="container.xl" py={{ base: 12, md: 16 }}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, md: 6 }}>
          {impactHighlights.map((item) => (
            <VStack
              key={item.title}
              align="start"
              spacing={3}
              bg={cardBg}
              borderWidth={1}
              borderColor={cardBorder}
              borderRadius="lg"
              p={{ base: 5, md: 6 }}
              boxShadow={cardShadow}
            >
              <Icon as={item.icon} boxSize={7} color={accentText} />
              <Heading size="md" color={sectionTitle}>
                {item.title}
              </Heading>
              <Text color={textColor} lineHeight="tall">
                {item.description}
              </Text>
            </VStack>
          ))}
        </SimpleGrid>

        <Box
          mt={{ base: 12, md: 16 }}
          borderRadius="xl"
          overflow="hidden"
          boxShadow={cardShadow}
          bg={cardBg}
          borderWidth={1}
          borderColor={cardBorder}
        >
          <Box position="relative" paddingTop="56.25%">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=hDdE1aI0mOM"
              width="100%"
              height="100%"
              controls
              style={{ position: "absolute", top: 0, left: 0 }}
            />
          </Box>
          <Stack direction={{ base: "column", md: "row" }} spacing={0}>
            <Box flex={2} p={{ base: 5, md: 6 }}>
              <Heading size="lg" mb={3} color={sectionTitle}>
                From Hive to Insight
              </Heading>
              <Text color={textColor} lineHeight="tall">
                The platform classifies bee activity, monitors field conditions, and surfaces interventions through a
                single operating view for field teams and research partners.
              </Text>
            </Box>
            <VStack flex={1} spacing={4} p={{ base: 5, md: 6 }} align="stretch" bg={useColorModeValue("gray.50", "gray.700")}>
              {resultMetrics.map((metric) => (
                <Box key={metric.label}>
                  <Heading size="2xl" color={accentText} fontWeight="extrabold">
                    {metric.value}
                  </Heading>
                  <Text color={textColor} fontSize="sm" textTransform="uppercase">
                    {metric.label}
                  </Text>
                </Box>
              ))}
            </VStack>
          </Stack>
        </Box>

        <Box
          mt={{ base: 12, md: 16 }}
          borderRadius="xl"
          bg={cardBg}
          borderWidth={1}
          borderColor={cardBorder}
          p={{ base: 6, md: 8 }}
          boxShadow={cardShadow}
        >
          <Stack direction={{ base: "column", md: "row" }} spacing={{ base: 6, md: 8 }}>
            <VStack align="start" spacing={4} flex={2}>
              <Text fontSize="xs" letterSpacing="0.12em" textTransform="uppercase" color={sectionLabel}>
                Delivery Model
              </Text>
              <Heading size="lg" color={sectionTitle}>
                Collaboration blueprint
              </Heading>
              <Text color={textColor} lineHeight="tall">
                Misron worked with field experts to define success measures, collect observational data, and iterate on
                model performance in short delivery cycles.
              </Text>
            </VStack>
            <VStack align="stretch" spacing={4} flex={1}>
              <Text color={sectionLabel} fontSize="sm" textTransform="uppercase" fontWeight="semibold">
                Engagement Snapshot
              </Text>
              <Text color={textColor} lineHeight="tall">
                Discovery workshops with agritech stakeholders
                <br />
                Rapid prototyping with field validation
                <br />
                Deployment playbooks for regional scaling
              </Text>
              <Button as={RouterLink} to="/contact" colorScheme="accent" rightIcon={<FaExternalLinkAlt />}>
                Start a Project Conversation
              </Button>
            </VStack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;
