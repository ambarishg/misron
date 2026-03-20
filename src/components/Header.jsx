import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  IconButton,
  Image,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  VStack,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { Link as RouterLink, useLocation } from "react-router-dom";

const primaryLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Co-Innovation", to: "/coinnovationservices" },
];

const productLinks = [
  { label: "Ask Hank", to: "/ask-hank" },
  { label: "AI Bee Health", to: "/ai-bee-health" },
  { label: "Misron Assistant", to: "/searchassistant" },
];

const Header = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const location = useLocation();
  const bg = useColorModeValue("rgba(248, 250, 252, 0.88)", "rgba(16, 42, 67, 0.92)");
  const borderColor = useColorModeValue("rgba(16, 42, 67, 0.08)", "whiteAlpha.200");
  const linkColor = useColorModeValue("gray.700", "whiteAlpha.800");
  const mutedText = useColorModeValue("gray.500", "whiteAlpha.600");
  const activeColor = useColorModeValue("brand.900", "white");
  const hoverColor = useColorModeValue("brand.700", "white");
  const mobileHoverBg = useColorModeValue("gray.100", "whiteAlpha.200");
  const menuBg = useColorModeValue("white", "gray.800");
  const menuColor = useColorModeValue("gray.800", "gray.100");
  const menuHoverBg = useColorModeValue("gray.50", "brand.700");
  const menuActiveBg = useColorModeValue("gray.100", "brand.600");
  const activeBg = useColorModeValue("rgba(16, 42, 67, 0.06)", "whiteAlpha.200");
  const isProductActive = productLinks.some((link) => location.pathname === link.to);

  const renderLink = (link) => {
    const isActive = location.pathname === link.to;
    return (
      <Link
        key={link.to}
        as={RouterLink}
        to={link.to}
        fontSize="sm"
        letterSpacing="0.08em"
        textTransform="uppercase"
        fontWeight={isActive ? "semibold" : "medium"}
        color={isActive ? activeColor : linkColor}
        px={3}
        py={2}
        borderRadius="md"
        bg={isActive ? activeBg : "transparent"}
        _hover={{ color: hoverColor, bg: activeBg }}
        onClick={onClose}
      >
        {link.label}
      </Link>
    );
  };

  return (
    <Box
      as="header"
      bg={bg}
      backdropFilter="blur(16px)"
      borderBottom="1px solid"
      borderColor={borderColor}
      position="sticky"
      top={0}
      zIndex="popover"
    >
      <Flex
        maxW="container.xl"
        mx="auto"
        px={{ base: 4, md: 6 }}
        py={{ base: 3, md: 4 }}
        align="center"
        justify="space-between"
      >
        <HStack spacing={3} align="center">
          <Link as={RouterLink} to="/" display="flex" alignItems="center" onClick={onClose}>
            <Image src="./MISRONLOGO.png" alt="Misron Logo" height="40px" objectFit="contain" />
          </Link>
          <Box>
            <Link
              as={RouterLink}
              to="/"
              fontSize={{ base: "lg", md: "xl" }}
              fontWeight="bold"
              letterSpacing="0.08em"
              color={activeColor}
              _hover={{ color: hoverColor }}
            >
              Misron
            </Link>
            <Text fontSize="10px" letterSpacing="0.18em" textTransform="uppercase" color={mutedText}>
              Data and AI delivery
            </Text>
          </Box>
        </HStack>

        <HStack spacing={6} display={{ base: "none", lg: "flex" }} align="center">
          {primaryLinks.map(renderLink)}
          <Menu>
            <MenuButton
              as={Button}
              variant="ghost"
              rightIcon={<ChevronDownIcon />}
              fontSize="sm"
              letterSpacing="0.08em"
              textTransform="uppercase"
              fontWeight={isProductActive ? "semibold" : "medium"}
              color={isProductActive ? activeColor : linkColor}
              px={3}
              py={2}
              borderRadius="md"
              bg={isProductActive ? activeBg : "transparent"}
              _hover={{ color: hoverColor, bg: activeBg }}
              _active={{ bg: activeBg }}
            >
              Products
            </MenuButton>
            <MenuList bg={menuBg} color={menuColor} borderColor={borderColor} zIndex="popover" borderRadius="lg" boxShadow="elevated" p={1}>
              {productLinks.map((link) => (
                <MenuItem
                  key={link.to}
                  as={RouterLink}
                  to={link.to}
                  fontSize="sm"
                  letterSpacing="0.06em"
                  textTransform="uppercase"
                  fontWeight="medium"
                  borderRadius="md"
                  _hover={{ bg: menuHoverBg }}
                  _focus={{ bg: menuHoverBg }}
                  _active={{ bg: menuActiveBg }}
                  onClick={onClose}
                >
                  {link.label}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
          <Button as={RouterLink} to="/contact" colorScheme="accent" size="sm">
            Contact
          </Button>
        </HStack>

        <IconButton
          aria-label="Toggle navigation"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          display={{ base: "flex", lg: "none" }}
          onClick={onToggle}
          variant="ghost"
          color={activeColor}
          _hover={{ bg: mobileHoverBg }}
        />
      </Flex>

      {isOpen && (
        <Box display={{ lg: "none" }} borderTop="1px solid" borderColor={borderColor} bg={menuBg}>
          <VStack align="stretch" px={6} py={4} spacing={3}>
            {primaryLinks.map(renderLink)}
            <Divider borderColor={borderColor} />
            <Box>
              <Text
                fontSize="xs"
                letterSpacing="0.14em"
                textTransform="uppercase"
                fontWeight="semibold"
                color={isProductActive ? activeColor : mutedText}
              >
                Products
              </Text>
              <VStack align="stretch" pl={2} mt={2} spacing={2}>
                {productLinks.map(renderLink)}
              </VStack>
            </Box>
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
