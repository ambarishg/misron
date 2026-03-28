import {
  Box,
  Container,
  HStack,
  Icon,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { FaEnvelope } from "react-icons/fa";

const capabilityLinks = [
  { label: "Data Platforms", to: "/services" },
  { label: "Applied AI", to: "/searchassistant" },
  { label: "Ask Hank", to: "/ask-hank" },
  { label: "AI Bee Health", to: "/ai-bee-health" },
];

const companyLinks = [{ label: "About Misron", to: "/about" }];

const Footer = () => {
  const bg = useColorModeValue("linear-gradient(180deg, #131417 0%, #0d0e11 100%)", "gray.900");
  const muted = useColorModeValue("whiteAlpha.720", "whiteAlpha.720");
  const hover = useColorModeValue("white", "white");
  const borderColor = useColorModeValue("whiteAlpha.140", "whiteAlpha.140");
  const allLinks = [...capabilityLinks, ...companyLinks];

  return (
    <Box bg={bg} color="white" mt={14} borderTop="1px solid" borderColor={borderColor}>
      <Container maxW="container.xl" py={{ base: 5, md: 6 }}>
        <Box
          display="flex"
          flexDirection={{ base: "column", lg: "row" }}
          alignItems={{ base: "flex-start", lg: "center" }}
          justifyContent="space-between"
          gap={{ base: 4, lg: 8 }}
        >
          <Box minW={{ lg: "260px" }}>
            <HStack spacing={5} align="center" flexWrap="wrap">
              <Text fontSize="sm" fontWeight="semibold" letterSpacing="0.08em" textTransform="uppercase">
                Misron
              </Text>
              <Text color="whiteAlpha.580" display={{ base: "none", md: "block" }}>
                /
              </Text>
              <Text color={muted} fontSize="sm" lineHeight="1.6">
                Clear strategy, precise execution.
              </Text>
            </HStack>
          </Box>

          <Box
            flex={1}
            display="flex"
            flexDirection={{ base: "column", xl: "row" }}
            alignItems={{ base: "flex-start", xl: "center" }}
            justifyContent="flex-end"
            gap={{ base: 3, xl: 8 }}
          >
            <HStack
              as="nav"
              spacing={{ base: 3, md: 5 }}
              flexWrap="wrap"
              justify={{ xl: "flex-end" }}
              align="center"
            >
              {allLinks.map((item) => (
                <Link
                  key={item.label}
                  as={RouterLink}
                  to={item.to}
                  color={muted}
                  fontSize="sm"
                  _hover={{ color: hover }}
                >
                  {item.label}
                </Link>
              ))}
            </HStack>

            <HStack spacing={4} flexWrap="wrap" align="center">
              <Link href="tel:+919477398764" color={muted} fontSize="sm" _hover={{ color: hover }}>
                +91 94773 98764
              </Link>
              <Link href="mailto:misron@misron.in" color={muted} fontSize="sm" _hover={{ color: hover }}>
                misron@misron.in
              </Link>
              <Link
                href="mailto:misron@misron.in"
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                w={8}
                h={8}
                color={muted}
                _hover={{ color: hover }}
              >
                <Icon as={FaEnvelope} boxSize={4} />
              </Link>
            </HStack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
