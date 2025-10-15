import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Stack,
  VStack,
  HStack,
  Icon,
  List,
  ListItem,
  Divider,
  Button,
  Link,
} from "@chakra-ui/react";
import {
  CheckCircleIcon,
  LockIcon,
  TimeIcon,
  AttachmentIcon,
  ArrowForwardIcon,
} from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";

const differentiators = [
  {
    icon: LockIcon,
    title: "Enterprise-Grade Confidentiality",
    description:
      "Documents stay within your secure environment. Misron Assistant never indexes the open web, delivering trusted answers drawn solely from your approved sources.",
  },
  {
    icon: CheckCircleIcon,
    title: "Evidence-Backed Responses",
    description:
      "Every insight includes citations and document call-outs, so your team can validate the narrative before it reaches stakeholders.",
  },
  {
    icon: TimeIcon,
    title: "Decisions at the Speed of Thought",
    description:
      "Rapid question-and-answer workflows turn hours of research into minutes, freeing specialists to focus on strategy and delivery.",
  },
];

const workflowSteps = [
  {
    title: "Curate Trusted Knowledge",
    detail:
      "Upload contracts, playbooks, research, or policies. Misron Assistant builds a secure knowledge graph tailored to your organization.",
  },
  {
    title: "Ask Natural-Language Questions",
    detail:
      "From compliance clauses to competitive insights, pose questions the way you speak. The assistant understands nuance and context.",
  },
  {
    title: "Review Traceable Answers",
    detail:
      "Receive concise responses with linked references, highlighted passages, and discrepancy alerts when documents conflict.",
  },
  {
    title: "Act With Confidence",
    detail:
      "Export insights, share curated briefings with stakeholders, or feed results into downstream analytics and automation.",
  },
];

const industryUseCases = [
  {
    heading: "Legal & Compliance",
    audience: "General Counsel, Compliance Leads, Policy Analysts",
    bullets: [
      "Surface clauses, obligations, and renewal terms instantly across contract libraries.",
      "Compare regulatory frameworks across jurisdictions for faster advisory memos.",
      "Spot inconsistent language or missing signatures before they become issues.",
    ],
  },
  {
    heading: "Healthcare & Life Sciences",
    audience: "Clinical Researchers, Pharmacovigilance Teams, Medical Affairs",
    bullets: [
      "Consolidate trial protocols, approvals, and adverse event logs into a single research cockpit.",
      "Accelerate evidence reviews with pinpoint answers and automated citation exports.",
      "Maintain audit-ready narratives with verified source tracing.",
    ],
  },
  {
    heading: "Financial Services",
    audience: "Wealth Advisors, Risk Officers, Operations Leaders",
    bullets: [
      "Decode investment policy statements and operational playbooks in seconds.",
      "Highlight control gaps across risk assessments and supervisory procedures.",
      "Create actionable guidance for frontline teams with compliant messaging.",
    ],
  },
  {
    heading: "Industrial Operations",
    audience: "Engineering Leads, Manufacturing Excellence, HSE Directors",
    bullets: [
      "Reference maintenance manuals, safety standards, and field reports on demand.",
      "Validate equipment procedures before maintenance windows close.",
      "Shorten incident investigations with cross-document pattern detection.",
    ],
  },
];

const everydayUseCases = [
  {
    heading: "Executive Briefings",
    bullets: [
      "Prepare board updates backed by original source material.",
      "Summarize market movements with verified analyst perspectives.",
      "Track evolving priorities with highlight reels delivered to stakeholders.",
    ],
  },
  {
    heading: "Revenue Enablement",
    bullets: [
      "Equip sales teams with fast answers sourced from playbooks and win stories.",
      "Create client-ready narratives with embedded references for due diligence.",
      "Identify cross-sell opportunities by linking customer notes with solution catalogs.",
    ],
  },
  {
    heading: "People & Culture",
    bullets: [
      "Clarify policies for managers and employees without waiting on HR queues.",
      "Surface benchmarks from engagement surveys and leadership feedback.",
      "Guide change-management programs with consistent, evidence-led messaging.",
    ],
  },
];

const integrationHighlights = [
  "APIs for knowledge uploads and retrieval plug into existing data pipelines.",
  "Granular access controls respect your document security model.",
  "Audit logs capture every session to support governance and compliance.",
];

const HighlightCard = ({ icon, title, description }) => (
  <VStack
    align="start"
    spacing={3}
    borderWidth={1}
    borderColor="gray.200"
    borderRadius="lg"
    bg="white"
    p={{ base: 5, md: 6 }}
    boxShadow="sm"
  >
    <Icon as={icon} boxSize={7} color="brand.600" />
    <Heading size="md" color="brand.700">
      {title}
    </Heading>
    <Text color="gray.600" lineHeight="tall">
      {description}
    </Text>
  </VStack>
);

const UseCaseCard = ({ heading, audience, bullets }) => (
  <VStack
    align="start"
    spacing={4}
    borderWidth={1}
    borderColor="gray.200"
    borderRadius="lg"
    bg="white"
    p={{ base: 5, md: 6 }}
    boxShadow="sm"
    h="full"
  >
    <Heading size="md" color="brand.700">
      {heading}
    </Heading>
    {audience && (
      <Text fontSize="sm" fontWeight="semibold" color="gray.500">
        Built for: {audience}
      </Text>
    )}
    <List spacing={2} color="gray.600">
      {bullets.map((item, idx) => (
        <ListItem key={idx}>
          <HStack align="start" spacing={3}>
            <Icon as={CheckCircleIcon} mt={1} color="accent.500" />
            <Text lineHeight="tall">{item}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  </VStack>
);

const SearchAssistant = () => {
  return (
    <Box bg="gray.50" minH="100vh" pb={{ base: 16, md: 24 }}>
      <Box
        bgGradient="linear(to-r, brand.900, brand.700)"
        color="white"
        py={{ base: 16, md: 24 }}
      >
        <Container maxW="container.xl">
          <Stack direction={{ base: "column", lg: "row" }} spacing={{ base: 10, lg: 16 }}>
            <VStack align="start" spacing={6} maxW="3xl">
              <Heading as="h1" size={{ base: "2xl", md: "3xl" }} fontWeight="extrabold">
                Misron Assistant
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} lineHeight="tall">
                A private, AI-native research companion engineered for boutique firms and enterprise
                innovators who demand precision. Consolidate knowledge, interrogate critical
                documents, and deliver executive-ready answers without sacrificing control.
              </Text>
              <HStack spacing={4} flexWrap="wrap">
                <Button
                  as={RouterLink}
                  to="/contact"
                  colorScheme="accent"
                  size="lg"
                  rightIcon={<ArrowForwardIcon />}
                >
                  Request a Demo
                </Button>
                <Button
                  as={Link}
                  href="#workflow"
                  size="lg"
                  variant="outline"
                  colorScheme="whiteAlpha"
                  rightIcon={<AttachmentIcon />}
                >
                  See How It Works
                </Button>
              </HStack>
            </VStack>
            <VStack
              align="start"
              spacing={5}
              borderLeft={{ base: "none", lg: "1px solid rgba(255,255,255,0.3)" }}
              pl={{ base: 0, lg: 8 }}
            >
              <Heading size="md" textTransform="uppercase" letterSpacing="wider">
                Built for Boutique Precision
              </Heading>
              <List spacing={3}>
                {["Document-grounded insights", "Traceable recommendations", "Human-in-the-loop control"].map(
                  (item) => (
                    <ListItem key={item}>
                      <HStack spacing={3}>
                        <Icon as={CheckCircleIcon} color="accent.300" />
                        <Text>{item}</Text>
                      </HStack>
                    </ListItem>
                  )
                )}
              </List>
            </VStack>
          </Stack>
        </Container>
      </Box>

      <Container maxW="container.xl" mt={{ base: -12, md: -16 }}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 6, md: 8 }}>
          {differentiators.map((item) => (
            <HighlightCard key={item.title} {...item} />
          ))}
        </SimpleGrid>
      </Container>

      <Container maxW="container.xl" pt={{ base: 16, md: 24 }} id="workflow">
        <VStack spacing={{ base: 6, md: 8 }} align="start">
          <Heading size="xl" color="brand.700">
            A Workflow Crafted for Trusted Intelligence
          </Heading>
          <Text fontSize="lg" color="gray.600" maxW="3xl">
            Misron Assistant integrates smoothly into existing research and compliance processes.
            Each stage reinforces security, transparency, and operational velocity.
          </Text>

          <Stack direction={{ base: "column", md: "row" }} spacing={{ base: 8, md: 12 }}>
            <VStack align="stretch" spacing={{ base: 6, md: 8 }} flex={1}>
              {workflowSteps.map((step, index) => (
                <Box
                  key={step.title}
                  borderLeft="4px solid"
                  borderColor="brand.600"
                  pl={6}
                  py={2}
                >
                  <Text fontSize="sm" color="brand.500" fontWeight="bold">
                    Step {index + 1}
                  </Text>
                  <Heading size="md" color="brand.700" mb={2}>
                    {step.title}
                  </Heading>
                  <Text color="gray.600" lineHeight="tall">
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
              borderColor="gray.200"
              borderRadius="lg"
              bg="white"
              p={{ base: 6, md: 8 }}
              boxShadow="sm"
            >
              <Heading size="md" color="brand.700">
                Integration Snapshot
              </Heading>
              <List spacing={3} color="gray.600">
                {integrationHighlights.map((item) => (
                  <ListItem key={item}>
                    <HStack align="start" spacing={3}>
                      <Icon as={AttachmentIcon} mt={1} color="brand.500" />
                      <Text lineHeight="tall">{item}</Text>
                    </HStack>
                  </ListItem>
                ))}
              </List>
              <Divider />
              <Text fontSize="sm" color="gray.500">
                Need bespoke deployment or on-prem support? Talk to our engineering leads about a
                tailored rollout.
              </Text>
            </VStack>
          </Stack>
        </VStack>
      </Container>

      <Container maxW="container.xl" pt={{ base: 16, md: 24 }}>
        <VStack spacing={{ base: 6, md: 8 }} align="start">
          <Heading size="xl" color="brand.700">
            Proven Across Regulated and Knowledge-Rich Teams
          </Heading>
          <Text fontSize="lg" color="gray.600" maxW="3xl">
            Whether you manage high-stakes client obligations or mission-critical internal programs,
            Misron Assistant keeps institutional knowledge accurate, accessible, and defensible.
          </Text>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 6, md: 8 }}>
            {industryUseCases.map((useCase) => (
              <UseCaseCard key={useCase.heading} {...useCase} />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>

      <Container maxW="container.xl" pt={{ base: 16, md: 24 }}>
        <VStack spacing={{ base: 6, md: 8 }} align="start">
          <Heading size="lg" color="brand.700">
            Everyday Impact for Leadership and Delivery Teams
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 6, md: 8 }}>
            {everydayUseCases.map((useCase) => (
              <UseCaseCard key={useCase.heading} {...useCase} />
            ))}
          </SimpleGrid>
        </VStack>
      </Container>

      <Container maxW="container.xl" pt={{ base: 16, md: 24 }}>
        <Box
          bg="brand.50"
          borderRadius="xl"
          borderWidth={1}
          borderColor="brand.100"
          p={{ base: 8, md: 12 }}
          boxShadow="sm"
        >
          <Stack direction={{ base: "column", md: "row" }} spacing={{ base: 6, md: 10 }} align="center">
            <VStack align="start" spacing={4} flex={1}>
              <Heading size="lg" color="brand.700">
                Ready to empower your experts with AI clarity?
              </Heading>
              <Text color="gray.600" fontSize={{ base: "md", md: "lg" }} lineHeight="tall">
                Partner with Misron’s boutique engineering team to deploy an assistant that mirrors
                your firm’s standards. We’ll help you scope the knowledge base, configure governance,
                and onboard your teams.
              </Text>
            </VStack>
            <VStack spacing={4}>
              <Button
                as={RouterLink}
                to="/contact"
                colorScheme="brand"
                size="lg"
                rightIcon={<ArrowForwardIcon />}
              >
                Speak with Our Engineers
              </Button>
              <Button
                as={Link}
                href="mailto:misron@misronconsulting.com"
                variant="ghost"
                colorScheme="brand"
              >
                Email misron@misronconsulting.com
              </Button>
            </VStack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default SearchAssistant;

