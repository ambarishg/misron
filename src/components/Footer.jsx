import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Icon,
  Link,
  SimpleGrid,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const capabilityLinks = [
  { label: "Data Platforms", to: "/services" },
  { label: "Applied AI", to: "/searchassistant" },
  { label: "Co-Innovation", to: "/coinnovationservices" },
  { label: "Ask Hank", to: "/ask-hank" },
  { label: "AI Bee Health", to: "/ai-bee-health" },
];

const companyLinks = [
  { label: "About Misron", to: "/about" },
];

const Footer = () => {
  const bg = useColorModeValue("brand.900", "gray.900");
  const borderColor = useColorModeValue("whiteAlpha.300", "whiteAlpha.200");
  const muted = useColorModeValue("whiteAlpha.700", "whiteAlpha.700");

  return (
    <Box bg={bg} color="white" mt={12}>
      <Container maxW="container.xl" py={{ base: 10, md: 16 }}>
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={{ base: 8, md: 12 }}>
          <VStack align="start" spacing={4}>
            <Heading size="md">Misron</Heading>
            <Text color={muted} lineHeight="tall">
              Boutique engineering firm advancing data and AI products for regulated industries, ventures, and growth teams.
            </Text>
            <HStack spacing={4}>
              <Link href="mailto:misron@misron.in" color="whiteAlpha.900" _hover={{ color: "accent.200" }}>
                <Icon as={FaEnvelope} boxSize={5} />
              </Link>
              <Link href="https://www.linkedin.com" isExternal color="whiteAlpha.900" _hover={{ color: "accent.200" }}>
                <Icon as={FaLinkedin} boxSize={5} />
              </Link>
            </HStack>
          </VStack>

          <VStack align="start" spacing={3}>
            <Heading size="sm" textTransform="uppercase" letterSpacing="widest">
              Capabilities
            </Heading>
            {capabilityLinks.map((item) => (
              <Link key={item.label} as={RouterLink} to={item.to} color={muted} _hover={{ color: "accent.200" }}>
                {item.label}
              </Link>
            ))}
          </VStack>

          <VStack align="start" spacing={3}>
            <Heading size="sm" textTransform="uppercase" letterSpacing="widest">
              Company
            </Heading>
            {companyLinks.map((item) => (
              <Link key={item.label} as={RouterLink} to={item.to} color={muted} _hover={{ color: "accent.200" }}>
                {item.label}
              </Link>
            ))}
          </VStack>

          <VStack align="start" spacing={3}>
            <Heading size="sm" textTransform="uppercase" letterSpacing="widest">
              Contact
            </Heading>
            <Text color={muted}>Salt Lake, Kolkata, India</Text>
            <Text color={muted}>Phone: +91 94773 98764</Text>
            <Link href="mailto:misron@misron.in" color="whiteAlpha.900" _hover={{ color: "accent.200" }}>
              misron@misron.in
            </Link>
          </VStack>
        </SimpleGrid>

      </Container>
    </Box>
  );
};

export default Footer;
