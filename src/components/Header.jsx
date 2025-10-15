import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Image,
  VStack,
  useDisclosure,
  Button,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as RouterLink, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Co-Innovation", to: "/coinnovationservices" },
  { label: "Ask Hank", to: "/ask-hank" },
  { label: "AI Bee Health", to: "/ai-bee-health" },
  { label: "Misron Assistant", to: "/searchassistant" },
];

const Header = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const location = useLocation();
  const bg = useColorModeValue("rgba(16, 42, 67, 0.98)", "rgba(13, 32, 52, 0.98)");
  const borderColor = useColorModeValue("whiteAlpha.200", "whiteAlpha.300");
  const linkHover = useColorModeValue("brand.200", "brand.100");

  const renderLink = (link) => {
    const isActive = location.pathname === link.to;
    return (
      <Link
        key={link.to}
        as={RouterLink}
        to={link.to}
        fontSize="sm"
        letterSpacing="wide"
        textTransform="uppercase"
        fontWeight={isActive ? "semibold" : "medium"}
        color={isActive ? "accent.200" : "whiteAlpha.800"}
        _hover={{ color: linkHover }}
        onClick={onClose}
      >
        {link.label}
      </Link>
    );
  };

  return (
    <Box as="header" bg={bg} color="white" backdropFilter="blur(10px)" borderBottom="1px solid" borderColor={borderColor}>
      <Flex
        maxW="container.xl"
        mx="auto"
        px={{ base: 4, md: 6 }}
        py={{ base: 4, md: 5 }}
        align="center"
        justify="space-between"
      >
        <HStack spacing={4} align="center">
          <Link as={RouterLink} to="/" display="flex" alignItems="center">
            <Image src="./MISRONLOGO.png" alt="Misron Logo" height="48px" objectFit="contain" />
          </Link>
          <Link
            as={RouterLink}
            to="/"
            fontSize={{ base: "lg", md: "xl" }}
            fontWeight="bold"
            letterSpacing="wide"
            _hover={{ color: linkHover }}
          >
            Misron
          </Link>
        </HStack>

        <HStack spacing={8} display={{ base: "none", lg: "flex" }} align="center">
          {navLinks.map(renderLink)}
          <Button
            as={RouterLink}
            to="/contact"
            colorScheme="accent"
            size="sm"
            fontWeight="semibold"
          >
            Contact
          </Button>
        </HStack>

        <IconButton
          aria-label="Toggle navigation"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          display={{ base: "flex", lg: "none" }}
          onClick={onToggle}
          variant="ghost"
          color="white"
          _hover={{ bg: "whiteAlpha.200" }}
        />
      </Flex>

      {isOpen && (
        <Box display={{ lg: "none" }} borderTop="1px solid" borderColor={borderColor}>
          <VStack align="stretch" px={6} py={4} spacing={4}>
            {navLinks.map(renderLink)}
            <Divider borderColor={borderColor} />
            <Button as={RouterLink} to="/contact" colorScheme="accent" size="sm" onClick={onClose}>
              Contact
            </Button>
          </VStack>
        </Box>
      )}
    </Box>
  );
};

export default Header;
