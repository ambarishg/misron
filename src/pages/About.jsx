import {
  Box,
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
import { FaChartLine, FaCogs, FaGlobe, FaHandshake, FaLightbulb, FaUsers } from "react-icons/fa";

const identityStatements = [
  {
    title: "Boutique by Design",
    detail:
      "Independent, multi-disciplinary engineers and strategists who thrive in ambiguity and move at founder speed.",
    icon: FaLightbulb,
  },
  {
    title: "Enterprise Credibility",
    detail:
      "Leaders from Fortune 500 innovation labs and venture-backed scaleups who understand regulated environments and rapid growth demands.",
    icon: FaChartLine,
  },
  {
    title: "Global Perspective",
    detail:
      "Delivery hubs in India with partner networks across North America and Europe, enabling 24/7 momentum and cultural fluency.",
    icon: FaGlobe,
  },
];

const values = [
  {
    title: "Integrity in Execution",
    description:
      "Transparent communication, responsible AI practices, and measurable commitments anchored in your business reality.",
  },
  {
    title: "Human-Centred Innovation",
    description:
      "Solutions shaped with real users, blending behavioural insights with technical excellence for adoption that lasts.",
  },
  {
    title: "Shared Wins",
    description:
      "We integrate with your teams, co-own milestones, and celebrate outcomes that elevate both organisations.",
  },
  {
    title: "Continuous Learning",
    description:
      "Curiosity keeps us ahead—research sprints, guilds, and experimentation fuel better decisions and better products.",
  },
];

const disciplines = [
  "Data platforms & modern architecture",
  "Machine learning engineering & MLOps",
  "Responsible AI frameworks and governance",
  "Automation, NLP, and computer vision",
  "Product strategy, service design, and GTM enablement",
  "Embedded delivery leadership and transformation coaching",
];



const leadershipPrinciples = [
  {
    title: "Clarity First",
    description:
      "We start with articulation of the opportunity, constraints, and success metrics so teams move in lockstep.",
    icon: FaCogs,
  },
  {
    title: "Design With",
    description:
      "Stakeholders sit at the table—from field operators to executives—ensuring every solution honours context and ambition.",
    icon: FaUsers,
  },
  {
    title: "Commit to Outcomes",
    description:
      "Roadmaps are coupled with accountability. We build the observability and governance needed to sustain value.",
    icon: FaHandshake,
  },
];

const About = () => {
  const bg = useColorModeValue("gray.50", "gray.900");
  const cardBg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const accent = useColorModeValue("brand.600", "brand.200");
  const border = useColorModeValue("gray.200", "gray.700");

  return (
    <Box bg={bg} minH="100vh" py={{ base: 12, md: 20 }}>
      <Container maxW="container.xl">
        {/* Hero */}
        <VStack spacing={6} align="start" mb={{ base: 12, md: 16 }}>
          <Text textTransform="uppercase" letterSpacing="wider" fontWeight="semibold" color={accent}>
            About Misron
          </Text>
          <Heading as="h1" size={{ base: "2xl", md: "3xl" }} fontWeight="extrabold" lineHeight="shorter">
            Engineering clarity and confidence into every data & AI journey
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} color={textColor} maxW="3xl" lineHeight="tall">
            Misron is a boutique engineering partner headquartered in India with global reach. We help organisations
            turn complex data challenges into resilient, revenue-generating products that respect governance,
            user trust, and speed to market.
          </Text>
        </VStack>

        {/* Identity */}
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 6, md: 8 }} mb={{ base: 12, md: 16 }}>
          {identityStatements.map((item) => (
            <VStack
              key={item.title}
              align="start"
              spacing={4}
              bg={cardBg}
              borderWidth={1}
              borderColor={border}
              borderRadius="xl"
              p={{ base: 6, md: 8 }}
              boxShadow="md"
            >
              <Icon as={item.icon} boxSize={8} color={accent} />
              <Heading size="md" color={accent}>
                {item.title}
              </Heading>
              <Text color={textColor} lineHeight="tall">
                {item.detail}
              </Text>
            </VStack>
          ))}
        </SimpleGrid>

        {/* Narrative */}
        <Box
          bg={cardBg}
          borderRadius="xl"
          borderWidth={1}
          borderColor={border}
          p={{ base: 8, md: 12 }}
          mb={{ base: 12, md: 16 }}
          boxShadow="lg"
        >
          <Stack direction={{ base: "column", md: "row" }} spacing={{ base: 6, md: 10 }}>
            <VStack align="start" spacing={4} flex={2}>
              <Heading size="lg" color={accent}>
                Blending intelligence, engineering, and empathy
              </Heading>
              <Text color={textColor} lineHeight="tall">
                “Misron” originates from Bengali, meaning a purposeful blend. The name honours our belief that powerful
                outcomes emerge when diverse disciplines, cultures, and perspectives converge. Our teams combine
                product strategists, data scientists, ML engineers, and delivery leaders who co-create with clients
                rather than deliver in isolation.
              </Text>
              <Text color={textColor} lineHeight="tall">
                We invest in understanding your industry rhythms, regulatory realities, and human stories before we write
                a single line of code. That empathy—paired with technical depth—enables us to ship solutions that
                stakeholders trust and champion.
              </Text>
            </VStack>
            <Divider orientation="vertical" display={{ base: "none", md: "block" }} />
            <VStack align="stretch" spacing={4} flex={1}>
              <Heading size="md" color={accent}>
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

        {/* Leadership Principles */}
        <VStack align="start" spacing={{ base: 6, md: 8 }} mb={{ base: 12, md: 16 }}>
          <Heading size={{ base: "lg", md: "xl" }} color={accent}>
            How Misron Leads Engagements
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 6, md: 8 }} width="100%">
            {leadershipPrinciples.map((principle) => (
              <VStack
                key={principle.title}
                align="start"
                spacing={4}
                bg={cardBg}
                borderRadius="xl"
                borderWidth={1}
                borderColor={border}
                p={{ base: 6, md: 7 }}
                boxShadow="md"
              >
                <Icon as={principle.icon} boxSize={7} color={accent} />
                <Heading size="md" color={accent}>
                  {principle.title}
                </Heading>
                <Text color={textColor} lineHeight="tall">
                  {principle.description}
                </Text>
              </VStack>
            ))}
          </SimpleGrid>
        </VStack>

        {/* Values */}
        <VStack align="start" spacing={{ base: 6, md: 8 }} mb={{ base: 12, md: 16 }}>
          <Heading size={{ base: "lg", md: "xl" }} color={accent}>
            Values That Shape Every Product
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 6, md: 8 }} width="100%">
            {values.map((value) => (
              <Box
                key={value.title}
                bg={cardBg}
                borderRadius="xl"
                borderWidth={1}
                borderColor={border}
                p={{ base: 6, md: 7 }}
                boxShadow="md"
              >
                <Heading size="md" color={accent} mb={3}>
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

