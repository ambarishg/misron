import {
  Box,
  Container,
  Divider,
  HStack,
  Icon,
  Link,
  Stack,
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
  const bg = useColorModeValue("linear-gradient(180deg, #131417 0%, #0d0e11 100%)", "gray.900");
  const muted = useColorModeValue("whiteAlpha.720", "whiteAlpha.720");
  const hover = useColorModeValue("white", "white");
  const subtle = useColorModeValue("whiteAlpha.540", "whiteAlpha.540");
  const borderColor = useColorModeValue("whiteAlpha.140", "whiteAlpha.140");

  return (
    <Box bg={bg} color="white" mt={18} borderTop="1px solid" borderColor={borderColor}>
      <Container maxW="container.xl" py={{ base: 8, md: 10 }}>
        <Stack
          direction={{ base: "column", lg: "row" }}
          spacing={{ base: 8, lg: 10 }}
          justify="space-between"
          align={{ base: "stretch", lg: "start" }}
        >
          <VStack align="start" spacing={4} maxW="sm">
            <Text fontSize="sm" fontWeight="semibold" letterSpacing="0.08em" textTransform="uppercase">
              Misron
            </Text>
            <Text color={muted} lineHeight="1.8">
              Data and AI delivery with clear execution discipline.
            </Text>
            <HStack spacing={3}>
              <Link
                href="mailto:misron@misron.in"
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                w={9}
                h={9}
                borderRadius="full"
                border="1px solid"
                borderColor="whiteAlpha.140"
                color={muted}
                _hover={{ color: hover, borderColor: "whiteAlpha.260", bg: "whiteAlpha.080" }}
              >
                <Icon as={FaEnvelope} boxSize={4} />
              </Link>
              <Link
                href="https://www.linkedin.com"
                isExternal
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                w={9}
                h={9}
                borderRadius="full"
                border="1px solid"
                borderColor="whiteAlpha.140"
                color={muted}
                _hover={{ color: hover, borderColor: "whiteAlpha.260", bg: "whiteAlpha.080" }}
              >
                <Icon as={FaLinkedin} boxSize={4} />
              </Link>
            </HStack>
          </VStack>

          <Stack
            direction={{ base: "column", sm: "row" }}
            spacing={{ base: 8, sm: 12, lg: 14 }}
            flex={1}
            justify={{ lg: "flex-end" }}
          >
            <VStack align="start" spacing={3} minW={{ sm: "170px" }}>
              <Text fontSize="xs" textTransform="uppercase" letterSpacing="0.14em" color={subtle}>
                Capabilities
              </Text>
              {capabilityLinks.map((item) => (
                <Link key={item.label} as={RouterLink} to={item.to} color={muted} _hover={{ color: hover }}>
                  {item.label}
                </Link>
              ))}
            </VStack>

            <VStack align="start" spacing={3} minW={{ sm: "140px" }}>
              <Text fontSize="xs" textTransform="uppercase" letterSpacing="0.14em" color={subtle}>
                Company
              </Text>
              {companyLinks.map((item) => (
                <Link key={item.label} as={RouterLink} to={item.to} color={muted} _hover={{ color: hover }}>
                  {item.label}
                </Link>
              ))}
            </VStack>

            <VStack align="start" spacing={3} minW={{ sm: "190px" }}>
              <Text fontSize="xs" textTransform="uppercase" letterSpacing="0.14em" color={subtle}>
                Contact
              </Text>
              <Text color={muted}>Salt Lake, Kolkata, India</Text>
              <Link href="tel:+919477398764" color={muted} _hover={{ color: hover }}>
                +91 94773 98764
              </Link>
              <Link href="mailto:misron@misron.in" color={muted} _hover={{ color: hover }}>
                misron@misron.in
              </Link>
            </VStack>
          </Stack>
        </Stack>

        <Divider mt={{ base: 7, md: 8 }} borderColor="whiteAlpha.120" />
        <Box pt={4}>
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={{ base: 2, md: 6 }}
            justify="space-between"
            align={{ base: "start", md: "center" }}
          >
            <Text color="whiteAlpha.600" fontSize="sm">
              Misron. Clear strategy, precise execution.
            </Text>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
