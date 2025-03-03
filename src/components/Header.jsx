import {
  Box,
  Flex,
  Link,
  useDisclosure,
  VStack,
  IconButton,
  Image, // Import the Image component
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";


const Header = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box bg="brand.900" color="white">
      <Flex
        maxW="container.xl"
        mx="auto"
        px={4}
        py={6}
        align="center"
        justify="space-between"
      >
        <Flex align="center">
          <Link as={RouterLink} to="/">
            <Image
              src="./MISRONLOGO.png" // Use the imported logo
              alt="Misron Logo"
              height="50px" // Adjust the height as needed
              mr={2} // Add some right margin for spacing
            />
          </Link>
          <Link
            as={RouterLink}
            to="/"
            fontSize="2xl"
            fontWeight="bold"
            _hover={{ color: "brand.200" }}
          >
            Misron
          </Link>
        </Flex>

        <Flex display={{ base: "none", md: "flex" }} alignItems="center">
          <Link
            as={RouterLink}
            to="/"
            mr={6}
            _hover={{ color: "brand.200" }}
          >
            Home
          </Link>
          <Link
            as={RouterLink}
            to="/about"
            mr={6}
            _hover={{ color: "brand.200" }}
          >
            About
          </Link>
          <Link
            as={RouterLink}
            to="/coinnovationservices"
            mr={6}
            _hover={{ color: "brand.200" }}
          >
            Innovation
          </Link>
          <Link
            as={RouterLink}
            to="/searchassistant"
            mr={6}
            _hover={{ color: "brand.200" }}
          >
            Products
          </Link>
 
          <Link
            as={RouterLink}
            to="/projects"
            mr={6}
            onClick={onToggle}
            _hover={{ color: "brand.200" }}
          >
            Customer Stories
          </Link>
          <Link as={RouterLink} to="/contact" _hover={{ color: "brand.200" }}>
            Contact
          </Link>
        </Flex>
        <IconButton
          display={{ base: "block", md: "none" }}
          onClick={onToggle}
          icon={isOpen ? <CloseIcon color="white" /> : <HamburgerIcon color="white" />}
          variant="ghost"
          aria-label="Toggle menu"
          _hover={{ bg: "brand.800" }}
        />
      </Flex>
      {isOpen && (
        <Box pb={4} display={{ md: "none" }}>
          <VStack spacing={4} align="stretch" px={4}>
            {/* Added px={4} here */}
            <Link as={RouterLink} to="/" onClick={onToggle}>
              Home
            </Link>
            <Link as={RouterLink} to="/about" onClick={onToggle}>
              About
            </Link>
            <Link as={RouterLink} to="/coinnovationservices" onClick={onToggle}>
              Innovation
            </Link>

            <Link as={RouterLink} to="/projects" onClick={onToggle}>
              Customer Stories
            </Link>
            <Link as={RouterLink} to="/contact" onClick={onToggle}>
              Contact
            </Link>
          </VStack>
        </Box>
      )}
    </Box>
  );
};

export default Header;
