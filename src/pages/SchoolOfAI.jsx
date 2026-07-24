import {
  Box,
  Badge,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

import {
  FaArrowRight,
  FaBrain,
  FaPython,
  FaRobot,
  FaUserGraduate,
  FaCheckCircle,
} from "react-icons/fa";

const features = [
  {
    icon: FaBrain,
    title: "CBSE AI Curriculum",
    description:
      "Complete coverage of the latest CBSE Artificial Intelligence syllabus for Class IX & X.",
  },
  {
    icon: FaPython,
    title: "Python Programming",
    description:
      "Learn Python from the basics through practical coding exercises and projects.",
  },
  {
    icon: FaRobot,
    title: "Hands-on AI Projects",
    description:
      "Students build real AI applications instead of only learning theory.",
  },
  {
    icon: FaUserGraduate,
    title: "Industry Mentorship",
    description:
      "Courses are designed and delivered by experienced AI professionals.",
  },
];

export default function SchoolOfAI() {
  return (
    <Box bg="#F8FAFC">

      {/* HERO */}

      <Container maxW="container.xl" py={{ base: 10, md: 14 }}>

        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={16}
          alignItems="center"
        >

          {/* Left */}

          <Stack spacing={7}>

            <Badge
              w="fit-content"
              px={4}
              py={2}
              rounded="full"
              colorScheme="blue"
              fontSize="sm"
            >
              SCHOOL OF AI & COMPUTING
            </Badge>

            <Heading
              fontSize={{
                base: "4xl",
                md: "5xl",
                lg: "6xl",
              }}
              lineHeight="1.1"
              fontWeight="800"
            >
              Future-ready AI
              <br />
              Education for
              <br />
              CBSE Class IX & X
            </Heading>

            <Text
              fontSize="lg"
              color="gray.600"
              maxW="550px"
            >
              Equip students with Artificial Intelligence,
              Python Programming and Computational Thinking
              through project-based learning aligned with the
              latest CBSE curriculum.
            </Text>

          </Stack>

          {/* Right */}

          <Box
            bg="white"
            borderRadius="3xl"
            p={10}
            border="1px solid"
            borderColor="gray.200"
            shadow="lg"
          >

            <Badge
              colorScheme="green"
              mb={5}
            >
              WHY PARENTS CHOOSE US
            </Badge>

            <Heading
              size="lg"
              mb={8}
            >
              Preparing students for the AI-driven future
            </Heading>

            <VStack
              align="stretch"
              spacing={5}
            >

              {[
                "CBSE aligned curriculum",
                "Python taught from scratch",
                "Real AI projects",
                "Small interactive batches",
                "Industry expert mentoring",
              ].map((item) => (
                <HStack key={item} align="start">

                  <Icon
                    as={FaCheckCircle}
                    color="green.500"
                    mt={1}
                  />

                  <Text>{item}</Text>

                </HStack>
              ))}

            </VStack>

          </Box>

        </SimpleGrid>

      </Container>

      {/* WHY CHOOSE US */}

      <Container
        maxW="7xl"
        py={24}
      >

        <VStack spacing={4} mb={14}>

          <Badge colorScheme="purple">
            WHY MISRON
          </Badge>

          <Heading
            textAlign="center"
            size="2xl"
          >
            Building the Next Generation
            <br />
            of AI Innovators
          </Heading>

          <Text
            color="gray.600"
            maxW="700px"
            textAlign="center"
          >
            We combine industry expertise, project-based learning
            and the CBSE curriculum to help students build
            future-ready skills.
          </Text>

        </VStack>

        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            xl: 4,
          }}
          spacing={8}
        >

          {features.map((feature) => (

            <Box
              key={feature.title}
              bg="white"
              p={8}
              rounded="3xl"
              border="1px solid"
              borderColor="gray.200"
              transition="all .25s"
              _hover={{
                transform: "translateY(-8px)",
                shadow: "xl",
              }}
            >

              <Flex
                w="60px"
                h="60px"
                rounded="2xl"
                bg="blue.50"
                align="center"
                justify="center"
                mb={6}
              >

                <Icon
                  as={feature.icon}
                  boxSize={7}
                  color="blue.600"
                />

              </Flex>

              <Heading
                size="md"
                mb={4}
              >
                {feature.title}
              </Heading>

              <Text color="gray.600">
                {feature.description}
              </Text>

            </Box>

          ))}

        </SimpleGrid>

      </Container>

    </Box>
  );
}