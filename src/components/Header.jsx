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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
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
  const bg = useColorModeValue("rgba(16, 42, 67, 0.98)", "rgba(13, 32, 52, 0.98)");
  const borderColor = useColorModeValue("whiteAlpha.200", "whiteAlpha.300");
  const linkHover = useColorModeValue("brand.200", "brand.100");
  const menuBg = useColorModeValue("white", "gray.800");
  const menuColor = useColorModeValue("gray.800", "gray.100");
  const menuHoverBg = useColorModeValue("brand.50", "brand.700");
  const menuActiveBg = useColorModeValue("brand.100", "brand.600");
  const menuHoverColor = useColorModeValue("brand.900", "white");
  const isProductActive = productLinks.some((link) => location.pathname === link.to);

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
    <Box
      as="header"
      bg={bg}
      color="white"
      backdropFilter="blur(10px)"
      borderBottom="1px solid"
      borderColor={borderColor}
      position="relative"
      zIndex="popover"
    >
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
          {primaryLinks.map(renderLink)}
          <Menu>
            <MenuButton
              as={Button}
              variant="ghost"
              rightIcon={<ChevronDownIcon />}
              fontSize="sm"
              letterSpacing="wide"
              textTransform="uppercase"
              fontWeight={isProductActive ? "semibold" : "medium"}
              color={isProductActive ? "accent.200" : "whiteAlpha.800"}
              _hover={{ color: linkHover }}
              _active={{ color: linkHover }}
            >
              Products
            </MenuButton>
            <MenuList bg={menuBg} color={menuColor} borderColor={borderColor} zIndex="popover">
              {productLinks.map((link) => (
                <MenuItem
                  key={link.to}
                  as={RouterLink}
                  to={link.to}
                  fontSize="sm"
                  letterSpacing="wide"
                  textTransform="uppercase"
                  fontWeight="medium"
                  _hover={{ bg: menuHoverBg, color: menuHoverColor }}
                  _focus={{ bg: menuHoverBg, color: menuHoverColor }}
                  _active={{ bg: menuActiveBg, color: menuHoverColor }}
                  onClick={onClose}
                >
                  {link.label}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
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
            {primaryLinks.map(renderLink)}
            <Divider borderColor={borderColor} />
            <Box>
              <Text
                fontSize="xs"
                letterSpacing="widest"
                textTransform="uppercase"
                fontWeight={isProductActive ? "semibold" : "medium"}
                color={isProductActive ? "accent.200" : "whiteAlpha.600"}
              >
                Products
              </Text>
              <VStack align="stretch" pl={2} mt={2} spacing={3}>
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
