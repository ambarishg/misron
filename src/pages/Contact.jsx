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
  useToast,
} from "@chakra-ui/react";
import { ArrowForwardIcon, EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { FiClock, FiMapPin, FiMessageSquare } from "react-icons/fi";

const contactChannels = [
  {
    label: "Email",
    value: "misron@misron.in",
    icon: EmailIcon,
    description: "Direct line to engagement leads. Response within one business day.",
  },
  {
    label: "Phone",
    value: "+91 94773 98764",
    icon: PhoneIcon,
    description: "Speak with a consultant about scope, fit, or partnership needs.",
  },
  {
    label: "Studio",
    value: "Salt Lake, Kolkata, India",
    icon: FiMapPin,
    description: "On-site and hybrid workshops available by appointment.",
  },
];

const engagementMoments = [
  {
    title: "Discovery and Alignment",
    detail: "Clarify goals, success measures, and operating constraints.",
  },
  {
    title: "Architecture Consultation",
    detail: "Evaluate technical pathways from pilot to scaled rollout.",
  },
  {
    title: "Partnership Inquiries",
    detail: "Explore co-innovation, strategic collaboration, and go-to-market work.",
  },
];

const Contact = () => {
  const toast = useToast();
  const pageBg = useColorModeValue("gray.50", "gray.900");
  const heroBg = useColorModeValue(
    "linear(to-br, rgba(248, 250, 252, 0.96), rgba(236, 242, 247, 0.96), rgba(226, 234, 241, 0.96))",
    "linear(to-br, brand.900, brand.800)"
  );
  const cardBg = useColorModeValue("white", "gray.800");
  const cardBorder = useColorModeValue("gray.200", "gray.700");
  const accent = useColorModeValue("brand.700", "brand.200");
  const sectionLabel = useColorModeValue("brand.600", "accent.200");
  const sectionTitle = useColorModeValue("brand.900", "white");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const heroText = useColorModeValue("brand.900", "white");
  const heroSubtext = useColorModeValue("gray.600", "gray.200");
  const cardShadow = useColorModeValue("0 14px 34px rgba(15, 23, 42, 0.07)", "dark-lg");

  const handleCopy = async (value) => {
    try {
      await navigator.clipboard.writeText(value);
      toast({
        title: "Details copied",
        description: `${value} copied to clipboard.`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch {
      toast({
        title: "Copy unavailable",
        description: "Please copy the information manually.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box bg={pageBg} minH="100vh">
      <Box bgGradient={heroBg} borderBottom="1px solid" borderColor={cardBorder}>
        <Container maxW="container.xl" py={{ base: 12, md: 16 }}>
          <Stack spacing={{ base: 6, md: 8 }} direction={{ base: "column", lg: "row" }} align="stretch">
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
                Contact
              </Badge>
              <Heading as="h1" size={{ base: "2xl", md: "3xl" }} lineHeight="shorter" color={heroText}>
                Start a direct conversation with Misron
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} color={heroSubtext} lineHeight="tall">
                Whether you are shaping a new product, modernizing delivery, or exploring a partnership, we can align on the next step quickly.
              </Text>
              <HStack spacing={4} flexWrap="wrap">
                <Button size="lg" colorScheme="accent" rightIcon={<ArrowForwardIcon />} as="a" href="mailto:misron@misron.in">
                  Email Our Team
                </Button>
                <Button size="lg" variant="outline" colorScheme="blackAlpha" as="a" href="tel:+919477398764">
                  Call +91 94773 98764
                </Button>
              </HStack>
            </VStack>
            <Box
              flex={{ lg: "0 0 340px" }}
              maxW={{ lg: "340px" }}
              alignSelf="flex-start"
              bg={cardBg}
              borderRadius="xl"
              borderWidth={1}
              borderColor={cardBorder}
              p={{ base: 4, md: 5 }}
              boxShadow={cardShadow}
            >
              <VStack align="start" spacing={3}>
                <HStack spacing={3}>
                  <Icon as={FiClock} boxSize={5} color={accent} />
                  <Heading size="sm" color={sectionTitle}>
                    Availability
                  </Heading>
                </HStack>
                <Text color={textColor} lineHeight="1.6">
                  Monday to Friday, 9:00 to 18:00 IST.
                  <br />
                  North America and Europe overlap hours available on request.
                </Text>
              </VStack>
            </Box>
          </Stack>
        </Container>
      </Box>

      <Container maxW="container.xl" py={{ base: 12, md: 16 }}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, md: 6 }}>
          {contactChannels.map((channel) => (
            <VStack
              key={channel.label}
              align="start"
              spacing={3}
              bg={cardBg}
              borderRadius="lg"
              borderWidth={1}
              borderColor={cardBorder}
              p={{ base: 5, md: 6 }}
              boxShadow={cardShadow}
            >
              <HStack spacing={3}>
                <Icon as={channel.icon} boxSize={5} color={accent} />
                <Heading size="md" color={sectionTitle}>
                  {channel.label}
                </Heading>
              </HStack>
              <Text fontSize="lg" fontWeight="semibold" color={sectionTitle}>
                {channel.value}
              </Text>
              <Text color={textColor} lineHeight="tall">
                {channel.description}
              </Text>
              <Button variant="ghost" colorScheme="brand" size="sm" alignSelf="flex-start" onClick={() => handleCopy(channel.value)}>
                Copy details
              </Button>
            </VStack>
          ))}
        </SimpleGrid>

        <Stack direction={{ base: "column", md: "row" }} spacing={{ base: 8, md: 10 }} mt={{ base: 12, md: 16 }} align="stretch">
          <VStack
            flex={2}
            align="start"
            spacing={4}
            bg={cardBg}
            borderRadius="xl"
            borderWidth={1}
            borderColor={cardBorder}
            p={{ base: 5, md: 6 }}
            boxShadow={cardShadow}
          >
            <Text fontSize="xs" letterSpacing="0.12em" textTransform="uppercase" color={sectionLabel}>
              Engagement Touchpoints
            </Text>
            <Heading size="lg" color={sectionTitle}>
              Common starting points
            </Heading>
            {engagementMoments.map((moment) => (
              <Box key={moment.title}>
                <Text fontWeight="semibold" color={sectionTitle}>
                  {moment.title}
                </Text>
                <Text color={textColor} lineHeight="tall">
                  {moment.detail}
                </Text>
              </Box>
            ))}
          </VStack>
          <VStack
            flex={1}
            align="stretch"
            spacing={3}
            bg={cardBg}
            borderRadius="xl"
            borderWidth={1}
            borderColor={cardBorder}
            p={{ base: 5, md: 6 }}
            boxShadow={cardShadow}
          >
            <HStack spacing={3}>
              <Icon as={FiMessageSquare} boxSize={5} color={accent} />
              <Heading size="md" color={sectionTitle}>
                Prefer a written brief?
              </Heading>
            </HStack>
            <Text color={textColor} lineHeight="tall">
              Share context, timing, and what good looks like. We will align the right leads before the first session.
            </Text>
            <Button as="a" href="mailto:misron@misron.in?subject=Misron%20Consulting%20Inquiry" colorScheme="accent" rightIcon={<ArrowForwardIcon />}>
              Send a Brief
            </Button>
          </VStack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Contact;
