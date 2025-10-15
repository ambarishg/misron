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
  useToast,
} from "@chakra-ui/react";
import { ArrowForwardIcon, EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { FiClock, FiMapPin, FiMessageSquare } from "react-icons/fi";

const contactChannels = [
  {
    label: "Email",
    value: "misron@misronconsulting.com",
    icon: EmailIcon,
    description: "Direct line to our engagement leads. Expect a response within one business day.",
  },
  {
    label: "Phone",
    value: "+91 62893 290271",
    icon: PhoneIcon,
    description: "Speak with a consultant to explore fit, scope, or partnership opportunities.",
  },
  {
    label: "Studio",
    value: "Salt Lake, Kolkata, India",
    icon: FiMapPin,
    description: "Schedule an on-site strategy session or hybrid workshop with our delivery team.",
  },
];

const engagementMoments = [
  {
    title: "Discovery & Alignment",
    detail: "Clarify goals, success measures, and data estate readiness for AI-backed programs.",
  },
  {
    title: "Architecture Consultation",
    detail: "Evaluate technical pathways from rapid prototypes to enterprise rollouts.",
  },
  {
    title: "Partnership Inquiries",
    detail: "Explore co-innovation, investment partnerships, or go-to-market collaborations.",
  },
];

const Contact = () => {
  const toast = useToast();
  const cardBg = useColorModeValue("white", "gray.800");
  const cardBorder = useColorModeValue("gray.200", "gray.700");

  const handleCopy = async (value) => {
    try {
      await navigator.clipboard.writeText(value);
      toast({
        title: "Details copied",
        description: `${value} ready to share.`,
        status: "success",
        duration: 4000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Copy unavailable",
        description: "Please copy the information manually.",
        status: "warning",
        duration: 4000,
        isClosable: true,
      });
    }
  };

  return (
    <Box bg={useColorModeValue("gray.50", "gray.900")} py={{ base: 12, md: 20 }}>
      <Container maxW="container.xl">
        <Stack
          spacing={{ base: 8, md: 12 }}
          direction={{ base: "column", md: "row" }}
          align={{ base: "flex-start", md: "center" }}
        >
          <VStack align="start" spacing={6} flex={2}>
            <Text textTransform="uppercase" letterSpacing="wider" color="brand.600" fontWeight="semibold">
              Connect With Misron
            </Text>
            <Heading as="h1" size={{ base: "2xl", md: "3xl" }} fontWeight="extrabold">
              Let's design your next intelligent product
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }} color={useColorModeValue("gray.600", "gray.300")} lineHeight="tall">
              Whether you are validating a concept, modernizing a data estate, or launching a bespoke AI initiative,
              our boutique engineering team is ready to partner from discovery through scale.
            </Text>
            <HStack spacing={4} flexWrap="wrap">
              <Button
                size="lg"
                colorScheme="brand"
                rightIcon={<ArrowForwardIcon />}
                as="a"
                href="mailto:misron@misronconsulting.com"
              >
                Email Our Team
              </Button>
              <Button
                size="lg"
                variant="outline"
                colorScheme="brand"
                as="a"
                href="tel:+9162893290271"
              >
                Call +91 62893 290271
              </Button>
            </HStack>
          </VStack>
          <Box
            flex={1}
            bg={cardBg}
            borderRadius="xl"
            borderWidth={1}
            borderColor={cardBorder}
            p={{ base: 6, md: 8 }}
            boxShadow="lg"
          >
            <VStack align="start" spacing={4}>
              <HStack spacing={3}>
                <Icon as={FiClock} boxSize={6} color="brand.600" />
                <Heading size="md" color={useColorModeValue("brand.700", "brand.200")}>
                  Availability
                </Heading>
              </HStack>
              <Text color={useColorModeValue("gray.600", "gray.300")} lineHeight="tall">
                Monday - Friday | 9:00 - 18:00 IST
                <br />
                For clients across North America and Europe, we support aligned working hours on request.
              </Text>
            </VStack>
          </Box>
        </Stack>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 6, md: 8 }} mt={{ base: 12, md: 16 }}>
          {contactChannels.map((channel) => (
            <VStack
              key={channel.label}
              align="start"
              spacing={4}
              bg={cardBg}
              borderRadius="xl"
              borderWidth={1}
              borderColor={cardBorder}
              p={{ base: 6, md: 8 }}
              boxShadow="md"
              transition="transform 0.2s ease, box-shadow 0.2s ease"
              _hover={{ transform: "translateY(-6px)", boxShadow: "xl" }}
            >
              <HStack spacing={3}>
                <Icon as={channel.icon} boxSize={6} color="brand.600" />
                <Heading size="md" color={useColorModeValue("brand.700", "brand.200")}>
                  {channel.label}
                </Heading>
              </HStack>
              <Text fontSize="lg" fontWeight="semibold" color={useColorModeValue("gray.700", "gray.100")}>
                {channel.value}
              </Text>
              <Text color={useColorModeValue("gray.600", "gray.300")} lineHeight="tall">
                {channel.description}
              </Text>
              <Button
                variant="ghost"
                colorScheme="brand"
                size="sm"
                alignSelf="flex-start"
                onClick={() => handleCopy(channel.value)}
              >
                Copy details
              </Button>
            </VStack>
          ))}
        </SimpleGrid>

        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 16 }}
          mt={{ base: 12, md: 16 }}
          align="stretch"
        >
          <VStack
            flex={2}
            align="start"
            spacing={5}
            bg={cardBg}
            borderRadius="xl"
            borderWidth={1}
            borderColor={cardBorder}
            p={{ base: 6, md: 8 }}
            boxShadow="lg"
          >
            <Heading size="lg" color={useColorModeValue("brand.700", "brand.200")}>
              Engagement Touchpoints
            </Heading>
            {engagementMoments.map((moment) => (
              <Box key={moment.title}>
                <Text fontWeight="semibold" color={useColorModeValue("gray.700", "gray.100")}>
                  {moment.title}
                </Text>
                <Text color={useColorModeValue("gray.600", "gray.300")} lineHeight="tall">
                  {moment.detail}
                </Text>
              </Box>
            ))}
          </VStack>
          <VStack
            flex={1}
            align="stretch"
            spacing={4}
            bg={cardBg}
            borderRadius="xl"
            borderWidth={1}
            borderColor={cardBorder}
            p={{ base: 6, md: 8 }}
            boxShadow="lg"
          >
            <HStack spacing={3}>
              <Icon as={FiMessageSquare} boxSize={6} color="brand.600" />
              <Heading size="md" color={useColorModeValue("brand.700", "brand.200")}>
                Prefer a curated intro?
              </Heading>
            </HStack>
            <Text color={useColorModeValue("gray.600", "gray.300")} lineHeight="tall">
              Share context, desired timelines, and how you would like to collaborate. We will align the
              right engineering and strategy leads before our first session.
            </Text>
            <Divider />
            <Button
              as="a"
              href="mailto:misron@misronconsulting.com?subject=Misron%20Consulting%20Inquiry"
              colorScheme="brand"
              variant="solid"
              rightIcon={<ArrowForwardIcon />}
            >
              Send a Brief
            </Button>
          </VStack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Contact;
