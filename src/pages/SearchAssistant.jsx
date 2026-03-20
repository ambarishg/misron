import {
  Badge,
  Box,
  Button,
  Container,
  Divider,
  Heading,
  HStack,
  Icon,
  Link,
  List,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  ArrowForwardIcon,
  AttachmentIcon,
  CheckCircleIcon,
  LockIcon,
  TimeIcon,
} from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";

const differentiators = [
  {
    icon: LockIcon,
    title: "Confidential by Design",
    description: "Knowledge stays inside your approved environment and access model.",
  },
  {
    icon: CheckCircleIcon,
    title: "Evidence-Backed Output",
    description: "Responses include citations and source references for fast validation.",
  },
  {
    icon: TimeIcon,
    title: "Faster Research Cycles",
    description: "Reduce hours of document review to minutes without losing control.",
  },
];

const workflowSteps = [
  {
    title: "Curate Trusted Knowledge",
    detail: "Upload policies, contracts, research, and operating documents into a secure knowledge base.",
  },
  {
    title: "Ask Direct Questions",
    detail: "Query the assistant in natural language across complex document sets.",
  },
  {
    title: "Review Traceable Answers",
    detail: "Validate responses through linked references and highlighted evidence.",
  },
  {
    title: "Act With Confidence",
    detail: "Use the output in briefings, reviews, and downstream workflows.",
  },
];

const industryUseCases = [
  {
    heading: "Legal and Compliance",
    audience: "General Counsel, Compliance Leads, Policy Analysts",
    bullets: [
      "Surface clauses, obligations, and renewal terms across contract libraries.",
      "Compare regulatory frameworks across jurisdictions.",
      "Detect inconsistent language or missing signatures early.",
    ],
  },
  {
    heading: "Healthcare and Life Sciences",
    audience: "Clinical Researchers, Pharmacovigilance Teams, Medical Affairs",
    bullets: [
      "Consolidate protocols, approvals, and event logs in one research workflow.",
      "Accelerate evidence reviews with cited answers.",
      "Maintain audit-ready narratives with verified source tracing.",
    ],
  },
  {
    heading: "Financial Services",
    audience: "Wealth Advisors, Risk Officers, Operations Leaders",
    bullets: [
      "Decode policies and operating playbooks quickly.",
      "Highlight control gaps across risk assessments.",
      "Create compliant guidance for frontline teams.",
    ],
  },
  {
    heading: "Industrial Operations",
    audience: "Engineering Leads, Manufacturing Excellence, HSE Directors",
    bullets: [
      "Reference manuals, standards, and field reports on demand.",
      "Validate procedures before maintenance windows close.",
      "Shorten incident reviews with cross-document analysis.",
    ],
  },
];

const everydayUseCases = [
  {
    heading: "Executive Briefings",
    bullets: [
      "Prepare updates backed by original source material.",
      "Summarize market or program changes with citations.",
      "Track evolving priorities with verifiable reporting.",
    ],
  },
  {
    heading: "Revenue Enablement",
    bullets: [
      "Equip sales teams with fast answers from internal playbooks.",
      "Create client-ready narratives with supporting references.",
      "Link customer notes to solution knowledge and use cases.",
    ],
  },
  {
    heading: "People and Culture",
    bullets: [
      "Clarify policies without waiting on manual support loops.",
      "Surface themes from surveys and leadership feedback.",
      "Support change programs with consistent internal messaging.",
    ],
  },
];

const integrationHighlights = [
  "APIs for knowledge uploads and retrieval.",
  "Granular access controls aligned to document permissions.",
  "Audit logs for governance and compliance review.",
];

const HighlightCard = ({ icon, title, description, accent, cardBg, borderColor, sectionTitle, textColor, cardShadow }) => (
  <VStack
    align="start"
    spacing={3}
    borderWidth={1}
    borderColor={borderColor}
    borderRadius="xl"
    bg={cardBg}
    p={{ base: 5, md: 6 }}
    boxShadow={cardShadow}
    h="full"
  >
    <Icon as={icon} boxSize={6} color={accent} />
    <Heading size="md" color={sectionTitle}>
      {title}
    </Heading>
    <Text color={textColor} lineHeight="tall">
      {description}
    </Text>
  </VStack>
);

const UseCaseCard = ({ heading, audience, bullets, accent, cardBg, borderColor, sectionTitle, textColor, cardShadow }) => (
  <VStack
    align="start"
    spacing={4}
    borderWidth={1}
    borderColor={borderColor}
    borderRadius="xl"
    bg={cardBg}
    p={{ base: 5, md: 6 }}
    boxShadow={cardShadow}
    h="full"
  >
    <Heading size="md" color={sectionTitle}>
      {heading}
    </Heading>
    {audience && (
      <Text fontSize="sm" fontWeight="semibold" color="gray.500">
        Built for: {audience}
      </Text>
    )}
    <List spacing={2} color={textColor}>
      {bullets.map((item, idx) => (
        <ListItem key={idx}>
          <HStack align="start" spacing={3}>
            <Icon as={CheckCircleIcon} mt={1} color={accent} />
            <Text lineHeight="tall">{item}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  </VStack>
);

const SearchAssistant = () => {
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
    <Box bg={pageBg} minH="100vh" pb={{ base: 16, md: 24 }}>
      <Box bgGradient={heroBg} borderBottom="1px solid" borderColor={borderColor}>
        <Container maxW="container.xl" py={{ base: 14, md: 20 }}>
          <Stack direction={{ base: "column", lg: "row" }} spacing={{ base: 10, lg: 16 }} align="stretch">
            <VStack align="start" spacing={6} flex={1.2} maxW="2xl">
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
                Misron Assistant
              </Badge>
              <Heading as="h1" size={{ base: "2xl", md: "3xl" }} lineHeight="shorter" color={heroText}>
                Secure research and retrieval for document-heavy teams
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} lineHeight="tall" color={heroSubtext}>
                A private assistant for firms that need fast answers, traceable evidence, and strong control over
                internal knowledge.
              </Text>
              <HStack spacing={4} flexWrap="wrap">
                <Button as={RouterLink} to="/contact" colorScheme="accent" size="lg" rightIcon={<ArrowForwardIcon />}>
                  Request a Demo
                </Button>
                <Button as={Link} href="#workflow" size="lg" variant="outline" colorScheme="blackAlpha" rightIcon={<AttachmentIcon />}>
                  See How It Works
                </Button>
              </HStack>
            </VStack>

            <Box
              flex={1}
              bg={cardBg}
              borderWidth={1}
              borderColor={borderColor}
              borderRadius="2xl"
              p={{ base: 6, md: 8 }}
              boxShadow={cardShadow}
            >
              <VStack align="start" spacing={5}>
                <Box>
                  <Text fontSize="xs" letterSpacing="0.12em" textTransform="uppercase" color={sectionLabel} mb={2}>
                    Product Snapshot
                  </Text>
                  <Heading size="md" color={sectionTitle}>
                    Built for controlled environments
                  </Heading>
                </Box>
                <List spacing={3}>
                  {[
                    "Document-grounded answers",
                    "Traceable references",
                    "Human review and control",
                  ].map((item) => (
                    <ListItem key={item}>
                      <HStack spacing={3} align="start">
                        <Icon as={CheckCircleIcon} color={accent} mt={1} />
                        <Text color={textColor}>{item}</Text>
                      </HStack>
                    </ListItem>
                  ))}
                </List>
              </VStack>
            </Box>
          </Stack>
        </Container>
      </Box>

      <Container maxW="container.xl" pt={{ base: 16, md: 20 }}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 6, md: 8 }}>
          {differentiators.map((item) => (
            <HighlightCard
              key={item.title}
              {...item}
              accent={accent}
              cardBg={cardBg}
              borderColor={borderColor}
              sectionTitle={sectionTitle}
              textColor={textColor}
              cardShadow={cardShadow}
            />
          ))}
        </SimpleGrid>
      </Container>

      <Container maxW="container.xl" pt={{ base: 16, md: 20 }} id="workflow">
        <VStack spacing={{ base: 6, md: 8 }} align="start">
          <Box>
            <Text fontSize="xs" letterSpacing="0.12em" textTransform="uppercase" color={sectionLabel} mb={2}>
              Workflow
            </Text>
            <Heading size="xl" color={sectionTitle}>
              A clear operating model
            </Heading>
          </Box>
          <Text fontSize="lg" color={textColor} maxW="3xl">
            The product fits into existing research, compliance, and review processes without compromising governance.
          </Text>

          <Stack direction={{ base: "column", lg: "row" }} spacing={{ base: 8, md: 10 }} width="100%">
            <VStack align="stretch" spacing={{ base: 6, md: 8 }} flex={1}>
              {workflowSteps.map((step, index) => (
                <Box key={step.title} borderLeft="3px solid" borderColor={accent} pl={6} py={2}>
                  <Text fontSize="sm" color={sectionLabel} fontWeight="bold">
                    Step {index + 1}
                  </Text>
                  <Heading size="md" color={sectionTitle} mb={2}>
                    {step.title}
                  </Heading>
                  <Text color={textColor} lineHeight="tall">
                    {step.detail}
                  </Text>
                </Box>
              ))}
            </VStack>
            <VStack
              spacing={5}
              align="start"
              flex={1}
              borderWidth={1}
              borderColor={borderColor}
              borderRadius="xl"
              bg={cardBg}
              p={{ base: 6, md: 8 }}
              boxShadow={cardShadow}
            >
              <Heading size="md" color={sectionTitle}>
                Integration Snapshot
              </Heading>
              <List spacing={3} color={textColor}>
                {integrationHighlights.map((item) => (
                  <ListItem key={item}>
                    <HStack align="start" spacing={3}>
                      <Icon as={AttachmentIcon} mt={1} color={accent} />
                      <Text lineHeight="tall">{item}</Text>
                    </HStack>
                  </ListItem>
                ))}
              </List>
              <Divider />
              <Text fontSize="sm" color="gray.500">
                Bespoke deployment and on-premise support are available where required.
              </Text>
            </VStack>
          </Stack>
        </VStack>
      </Container>

      <Container maxW="container.xl" pt={{ base: 16, md: 20 }}>
        <VStack spacing={{ base: 6, md: 8 }} align="start">
          <Box>
            <Text fontSize="xs" letterSpacing="0.12em" textTransform="uppercase" color={sectionLabel} mb={2}>
              Industry Use Cases
            </Text>
            <Heading size="xl" color={sectionTitle}>
              Applied in regulated and knowledge-rich environments
            </Heading>
          </Box>
          <Text fontSize="lg" color={textColor} maxW="3xl">
            Misron Assistant supports teams that work with complex documents, high accountability, and time-sensitive decisions.
          </Text>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 6, md: 8 }}>
            {industryUseCases.map((useCase) => (
              <UseCaseCard
                key={useCase.heading}
                {...useCase}
                accent={accent}
                cardBg={cardBg}
                borderColor={borderColor}
                sectionTitle={sectionTitle}
                textColor={textColor}
                cardShadow={cardShadow}
              />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>

      <Container maxW="container.xl" pt={{ base: 16, md: 20 }}>
        <VStack spacing={{ base: 6, md: 8 }} align="start">
          <Box>
            <Text fontSize="xs" letterSpacing="0.12em" textTransform="uppercase" color={sectionLabel} mb={2}>
              Team Use Cases
            </Text>
            <Heading size="lg" color={sectionTitle}>
              Everyday value for leadership and delivery teams
            </Heading>
          </Box>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 6, md: 8 }}>
            {everydayUseCases.map((useCase) => (
              <UseCaseCard
                key={useCase.heading}
                {...useCase}
                accent={accent}
                cardBg={cardBg}
                borderColor={borderColor}
                sectionTitle={sectionTitle}
                textColor={textColor}
                cardShadow={cardShadow}
              />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>

      <Container maxW="container.xl" pt={{ base: 16, md: 20 }}>
        <Box bg={cardBg} borderRadius="2xl" borderWidth={1} borderColor={borderColor} p={{ base: 8, md: 10 }} boxShadow={cardShadow}>
          <Stack direction={{ base: "column", md: "row" }} spacing={{ base: 6, md: 10 }} align="center">
            <VStack align="start" spacing={4} flex={1}>
              <Text fontSize="xs" letterSpacing="0.12em" textTransform="uppercase" color={sectionLabel}>
                Start a conversation
              </Text>
              <Heading size="lg" color={sectionTitle}>
                Need a secure assistant for internal knowledge?
              </Heading>
              <Text color={textColor} fontSize={{ base: "md", md: "lg" }} lineHeight="tall">
                We can scope the knowledge model, define governance, and plan deployment around your operating needs.
              </Text>
            </VStack>
            <VStack spacing={4}>
              <Button as={RouterLink} to="/contact" colorScheme="accent" size="lg" rightIcon={<ArrowForwardIcon />}>
                Speak with Our Engineers
              </Button>
              <Button as={Link} href="mailto:misron@misron.in" variant="ghost" colorScheme="brand">
                Email misron@misron.in
              </Button>
            </VStack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default SearchAssistant;
