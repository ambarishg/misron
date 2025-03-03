import {
    Box,
    Image,
    Text,
    Flex,
    Heading,
    useColorModeValue,
    Stack,
  } from "@chakra-ui/react";
  import ReactPlayer from "react-player";
  import { FaYoutube, FaExternalLinkAlt } from "react-icons/fa";
  import { IconButton } from "@chakra-ui/react";
  
  function Projects() {
    const bg = useColorModeValue("white", "gray.800");
    const textColor = useColorModeValue("gray.700", "gray.300");
    const headingColor = useColorModeValue("blue.600", "blue.400");
    const borderColor = useColorModeValue("gray.200", "gray.700");
  
    return (
      <Box
        bg={bg}
        borderWidth="1px"
        borderRadius="xl"
        overflow="hidden"
        borderColor={borderColor}
        textAlign="center" // Center all content within the box
      >
        <Image
          src="./aibeehealth.png"
          alt="AI Bee Health"
          objectFit="contain"
          height={{ base: "80px", md: "150px" }} // Adjusted height
          width="auto" // Allow width to adjust based on height and aspect ratio
          mx="auto" // Center the image
        />
  
        <Box p={6}>
          <Flex align="center" justify="center" mb={4}>
            {/* Centered Heading */}
            <Heading
              mt={1}
              fontWeight="semibold"
              as="h3"
              lineHeight="tight"
              color={headingColor}
              fontSize={{ base: "xl", md: "2xl" }}
              textAlign="center" // Center heading text
            >
              AI Bee Health
            </Heading>
          </Flex>
  
          {/* Text within the same bounds as the video */}
          <Box width="50%" mx="auto" textAlign="center">
            <Text mt={2} color={textColor} fontSize="md">
              {/* Centered Text */}
              AI Bee Health is an innovative solution leveraging advanced deep
              learning models to detect and predict bee diseases, ensuring
              healthier bee colonies and optimized honey production. This product
              represents our commitment to sustainable agriculture and
              technological innovation.
            </Text>
          </Box>
  
          {/* YouTube Video Player */}
          <Box
            mt={2}
            width="50%"
            mx="auto"
            position="relative"
            paddingTop="calc(50% * 9 / 16)"
          >
            {/* 16:9 aspect ratio */}
            <ReactPlayer
              url="https://www.youtube.com/watch?v=hDdE1aI0mOM"
              width="100%"
              height="100%"
              style={{ position: "absolute", top: 0, left: 0 }}
              controls={true}
            />
          </Box>
          <Stack
            mt={2}
            direction="row"
            spacing={4}
            align="center"
            justify="center"
          >
            <IconButton
              aria-label="Watch on YouTube"
              icon={<FaYoutube />}
              size="lg"
              colorScheme="red"
              onClick={() =>
                window.open(
                  "https://www.youtube.com/watch?v=hDdE1aI0mOM",
                  "_blank"
                )
              }
            />
            <IconButton
              aria-label="Learn More"
              icon={<FaExternalLinkAlt />}
              size="lg"
              colorScheme="blue"
              onClick={() => window.open("https://aibeehealth.ca", "_blank")}
            />
          </Stack>
        </Box>
      </Box>
    );
  }
  
  export default Projects;
  