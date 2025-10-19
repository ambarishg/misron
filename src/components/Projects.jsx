import {
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
    description:
      "Early detection models forecast colony health issues before they escalate, empowering commercial apiaries to intervene proactively.",
  },
  {
    icon: FiShield,
    title: "Field-Ready Design",
    description:
      "Edge-ready architecture and resilient data pipelines ensure reliability in remote farming environments with limited connectivity.",
  },
  {
    icon: FiAward,
    title: "Sustainable Outcomes",
    description:
      "Supports pollination stability and yield improvement initiatives while aligning agricultural innovation with environmental stewardship.",
  },
];

const resultMetrics = [
  {
    value: "75%",
    label: "Model Accuracy Across Key Diseases",
  },
  {
    value: "6 Weeks",
    label: "Time to MVP from Discovery Workshop",
  },
  {
    value: "24/7",
    label: "Monitoring Coverage for Partner Apiaries",
  },
];

const Projects = () => {
  const heroImage =
    "https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1680&q=80";
  const cardBg = useColorModeValue("white", "gray.800");
  const cardBorder = useColorModeValue("gray.200", "gray.700");
  const accentText = useColorModeValue("brand.600", "brand.200");

  return (
    <Box bg={useColorModeValue("gray.50", "gray.900")} py={{ base: 12, md: 20 }}>
      <Container maxW="container.xl">
        <Stack
          direction={{ base: "column", lg: "row" }}
          spacing={{ base: 10, lg: 16 }}
          align={{ base: "flex-start", lg: "center" }}
        >
          <VStack align="start" spacing={6} flex={1}>
            <Text
              textTransform="uppercase"
              fontWeight="semibold"
              letterSpacing="widest"
              color={accentText}
            >
              Flagship Product Case Study
            </Text>
            <Heading as="h1" size={{ base: "2xl", md: "3xl" }} fontWeight="extrabold">
              AI Bee Health
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }} color={useColorModeValue("gray.600", "gray.300")}>
              In partnership with Wildflower Bee Farm, Misron engineered an AI-driven monitoring
              platform that detects and predicts bee types , bees , pollen bees , drones . The solution blends computer vision,
              and intuitive dashboards crafted for field technicians and research teams.
            </Text>
            <HStack spacing={4} flexWrap="wrap">
              <Button
                as="a"
                href="https://aibeehealth.ca"
                target="_blank"
                rel="noopener noreferrer"
                colorScheme="brand"
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
                colorScheme="brand"
                rightIcon={<FaYoutube />}
              >
                Watch Product Overview
              </Button>
            </HStack>
          </VStack>
          <Box flex={1}>
            <VStack align="stretch" spacing={{ base: 6, md: 8 }}>
              <Box position="relative" borderRadius="2xl" overflow="hidden" boxShadow="2xl">
                <Image
                  src={heroImage}
                  alt="Beekeepers inspecting hive frames for colony health"
                  width="100%"
                  height="100%"
                  objectFit="cover"
                  maxH={{ base: "220px", md: "300px", lg: "340px" }}
                />
                <Box
                  position="absolute"
                  inset={0}
                  bgGradient="linear(to-br, blackAlpha.700, transparent)"
                />
                <VStack
                  position="absolute"
                  bottom={{ base: 4, md: 6 }}
                  left={{ base: 4, md: 6 }}
                  align="start"
                  spacing={1}
                  color="white"
                >
                  <Text fontSize="xs" letterSpacing="widest" textTransform="uppercase">
                    Bee Health Intelligence
                  </Text>
                  <Heading size="md" maxW="sm" lineHeight="short" fontWeight="semibold">
                    Field teams diagnosing colony vitality to guide proactive interventions
                  </Heading>
                </VStack>
              </Box>
              <Box display="flex" justifyContent="center">
                <Image
                  src="./aibeehealth.png"
                  alt="AI Bee Health Dashboard"
                  maxW={{ base: "260px", md: "340px" }}
                  borderRadius="lg"
                  boxShadow="xl"
                />
              </Box>
            </VStack>
          </Box>
        </Stack>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 6, md: 8 }} mt={{ base: 12, md: 16 }}>
          {impactHighlights.map((item) => (
            <VStack
              key={item.title}
              align="start"
              spacing={4}
              bg={cardBg}
              borderWidth={1}
              borderColor={cardBorder}
              borderRadius="xl"
              p={{ base: 6, md: 8 }}
              boxShadow="md"
            >
              <Icon as={item.icon} boxSize={8} color={accentText} />
              <Heading size="md" color={accentText}>
                {item.title}
              </Heading>
              <Text color={useColorModeValue("gray.600", "gray.300")} lineHeight="tall">
                {item.description}
              </Text>
            </VStack>
          ))}
        </SimpleGrid>

        <Box
          mt={{ base: 12, md: 16 }}
          borderRadius="2xl"
          overflow="hidden"
          boxShadow="xl"
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
            <Box flex={2} p={{ base: 6, md: 8 }}>
              <Heading size="lg" mb={3} color={accentText}>
                From Hive to Insight
              </Heading>
              <Text color={useColorModeValue("gray.600", "gray.300")} lineHeight="tall">
                A proprietary model ensemble classifies bees, monitors activity levels, and prescribes
                interventions, all surfaced through a single mission-control view for beekeepers and
                research partners.
              </Text>
            </Box>
            <Divider orientation="vertical" display={{ base: "none", md: "block" }} />
            <VStack
              flex={1}
              spacing={5}
              p={{ base: 6, md: 8 }}
              align="stretch"
              bg={useColorModeValue("brand.50", "gray.800")}
            >
              {resultMetrics.map((metric) => (
                <Box key={metric.label}>
                  <Heading size="2xl" color={accentText} fontWeight="extrabold">
                    {metric.value}
                  </Heading>
                  <Text color={useColorModeValue("gray.600", "gray.300")} fontSize="sm" textTransform="uppercase">
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
          p={{ base: 8, md: 12 }}
          boxShadow="lg"
        >
          <Stack direction={{ base: "column", md: "row" }} spacing={{ base: 8, md: 12 }}>
            <VStack align="start" spacing={4} flex={2}>
              <Heading size="lg" color={accentText}>
                Collaboration Blueprint
              </Heading>
              <Text color={useColorModeValue("gray.600", "gray.300")} lineHeight="tall">
                Misron's boutique engineering squad partnered closely with Wildflower Bee Farm's field
                experts to frame success metrics, gather observational data, and iterate quickly on model
                performance. The result is an assistant that speaks the language of beekeepers while
                surfacing insights trusted by research partners.
              </Text>
            </VStack>
            <Divider orientation="vertical" display={{ base: "none", md: "block" }} />
            <VStack align="stretch" spacing={4} flex={1}>
              <Text color={useColorModeValue("gray.500", "gray.400")} fontSize="sm" textTransform="uppercase">
                Engagement Snapshot
              </Text>
              <Text color={useColorModeValue("gray.600", "gray.300")} lineHeight="tall">
                - Discovery workshops with agritech stakeholders
                <br />
                - Rapid prototyping sprints with on-site validation
                <br />
                - Deployment playbooks enabling regional scaling
              </Text>
              <Button as={RouterLink} to="/contact" colorScheme="brand" rightIcon={<FaExternalLinkAlt />}>
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
