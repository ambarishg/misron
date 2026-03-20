import {
  Box,
  Container,
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
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

const capabilityLinks = [
  { label: "Data Platforms", to: "/services" },
  { label: "Applied AI", to: "/searchassistant" },
  { label: "Co-Innovation", to: "/coinnovationservices" },
  { label: "Ask Hank", to: "/ask-hank" },
  { label: "AI Bee Health", to: "/ai-bee-health" },
];

const companyLinks = [{ label: "About Misron", to: "/about" }];

const Footer = () => {
  const bg = useColorModeValue("linear-gradient(180deg, #0f2740 0%, #0b1f34 100%)", "gray.900");
  const muted = useColorModeValue("whiteAlpha.700", "whiteAlpha.700");
  const hover = useColorModeValue("white", "white");
  const borderColor = useColorModeValue("whiteAlpha.200", "whiteAlpha.200");

  return (
    <Box bg={bg} color="white" mt={16} borderTop="1px solid" borderColor={borderColor}>
      <Container maxW="container.xl" py={{ base: 10, md: 14 }}>
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={{ base: 8, md: 12 }}>
          <VStack align="start" spacing={4}>
            <Text fontSize="xs" textTransform="uppercase" letterSpacing="0.16em" color="whiteAlpha.600">
              Misron
            </Text>
            <Heading size="md">Data and AI delivery with operational discipline</Heading>
            <Text color={muted} lineHeight="1.7">
              Boutique partner for data platforms, AI products, and digital delivery.
            </Text>
            <HStack spacing={4}>
              <Link href="mailto:misron@misron.in" color={muted} _hover={{ color: hover }}>
                <Icon as={FaEnvelope} boxSize={5} />
              </Link>
              <Link href="https://www.linkedin.com" isExternal color={muted} _hover={{ color: hover }}>
                <Icon as={FaLinkedin} boxSize={5} />
              </Link>
            </HStack>
          </VStack>

          <VStack align="start" spacing={3}>
            <Heading size="sm" textTransform="uppercase" letterSpacing="0.12em">
              Capabilities
            </Heading>
            {capabilityLinks.map((item) => (
              <Link key={item.label} as={RouterLink} to={item.to} color={muted} _hover={{ color: hover }}>
                {item.label}
              </Link>
            ))}
          </VStack>

          <VStack align="start" spacing={3}>
            <Heading size="sm" textTransform="uppercase" letterSpacing="0.12em">
              Company
            </Heading>
            {companyLinks.map((item) => (
              <Link key={item.label} as={RouterLink} to={item.to} color={muted} _hover={{ color: hover }}>
                {item.label}
              </Link>
            ))}
          </VStack>

          <VStack align="start" spacing={3}>
            <Heading size="sm" textTransform="uppercase" letterSpacing="0.12em">
              Contact
            </Heading>
            <Text color={muted}>Salt Lake, Kolkata, India</Text>
            <Text color={muted}>Phone: +91 94773 98764</Text>
            <Link href="mailto:misron@misron.in" color={muted} _hover={{ color: hover }}>
              misron@misron.in
            </Link>
          </VStack>
        </SimpleGrid>
        <Box mt={{ base: 8, md: 10 }} pt={5} borderTop="1px solid" borderColor="whiteAlpha.200">
          <Text color="whiteAlpha.600" fontSize="sm">
            Misron. Clear strategy, precise execution.
          </Text>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
