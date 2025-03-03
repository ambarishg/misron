import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  UnorderedList,
  ListItem,
  useColorModeValue,
  Icon,
  Divider
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaChartLine, FaRobot, FaLanguage, FaDatabase, FaLightbulb } from "react-icons/fa";

const MotionBox = motion(Box);

const About = () => {
  const headingColor = useColorModeValue("brand.600", "brand.200");
  const textColor = useColorModeValue("gray.600", "gray.300");
  const iconColor = useColorModeValue("blue.500", "blue.200");
  const langColor = useColorModeValue("orange.500", "orange.200");
  const dividerColor = useColorModeValue("gray.200", "gray.700");
  const containerBg = useColorModeValue("gray.50", "gray.900"); // Very light background for better contrast

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  return (
    <Container maxW="container.xl" py={4}>
      <VStack spacing={4} align="stretch">
        {/* Main Heading */}
        <MotionBox
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          textAlign="center"
        >
          <Heading
            as="h1"
            size="2xl" // Increased size for impact
            fontWeight="bold" // Use extrabold for a strong statement
            color={headingColor}
            mb={2} // Add spacing below the heading
          >
            About Misron
          </Heading>
          <Text fontSize="lg" color={textColor} mt={4}>
            Empowering organizations with innovative data and AI solutions.
          </Text>
        </MotionBox>

        <Divider borderColor={dividerColor} /> {/* Add a divider after the main heading */}

        {/* "The Name" Section */}
        <MotionBox
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          p={8}
          borderRadius="xl"
          boxShadow="lg"
          bg={containerBg} // Consistent background color
          borderWidth="1px"
          borderColor={dividerColor} // Consistent border color
        >
          <Heading as="h2" size="xl" mb={4} color={headingColor} fontWeight="semibold">
            The Name
          </Heading>
          <Text fontSize="lg" color={textColor} lineHeight="tall">
          &quot;Misron&quot; is a Bengali word that signifies a harmonious combination or blend. We
            embrace this concept, firmly believing that the most innovative solutions emerge
            from the fusion of diverse perspectives and specialized expertise. This name
            embodies our dedication to seamlessly integrating state-of-the-art technology with
            profound industry insights, enabling us to deliver transformative and impactful
            solutions for our valued clients.
          </Text>
          <Text fontSize="sm" color={textColor} mt={4}>
            Bengali is a language spoken in the Indian subcontinent, particularly in the region of Bengal,India and Bangladesh.
            Bengali is the fifth most spoken native language and the seventh most spoken language by the total number of speakers in the world.
            It is the fifth most spoken Indo-European language.
          </Text>
        </MotionBox>



        {/* Mission Section */}
        <MotionBox
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          p={8}
          borderRadius="xl"
          boxShadow="lg"
          bg={containerBg} // Consistent background color
          borderWidth="1px"
          borderColor={dividerColor} // Consistent border color
        >
          <Heading as="h2" size="xl" mb={4} color={headingColor} fontWeight="semibold">
            Our Mission
          </Heading>
          <Text fontSize="lg" color={textColor} lineHeight="tall">
            At Misron , we are committed to empowering organizations through
            innovative data and AI-driven solutions. Our mission is to unlock the full
            potential of data, enabling businesses to achieve transformative growth,
            operational excellence, and a sustainable competitive advantage in their respective
            sectors.
          </Text>
        </MotionBox>

 

        {/* Expertise Section */}
        <MotionBox
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          p={8}
          borderRadius="xl"
          boxShadow="lg"
          bg={containerBg} // Consistent background color
          borderWidth="1px"
          borderColor={dividerColor} // Consistent border color
        >
          <Heading as="h2" size="xl" mb={4} color={headingColor} fontWeight="semibold">
            Our Expertise
          </Heading>
          <Text fontSize="lg" color={textColor} mb={6} lineHeight="tall">
            With a proven track record in data science, machine learning, and artificial
            intelligence, our team of experienced professionals specializes in delivering
            tailored solutions to address complex business challenges. Our core competencies
            include:
          </Text>
          <UnorderedList spacing={4} fontSize="lg" pl={6}>
            <ListItem display="flex" alignItems="center">
              <Icon as={FaChartLine} color={iconColor} mr={3} boxSize={6} /> {/* Increased icon size */}
              Advanced data analytics and visualization techniques.
            </ListItem>
            <ListItem display="flex" alignItems="center">
              <Icon as={FaRobot} color={iconColor} mr={3} boxSize={6} /> {/* Increased icon size */}
              Comprehensive machine learning model development and deployment.
            </ListItem>
            <ListItem display="flex" alignItems="center">
              <Icon as={FaLanguage} color={iconColor} mr={3} boxSize={6} /> {/* Increased icon size */}
              Natural Language Processing (NLP) and computer vision applications.
            </ListItem>
            <ListItem display="flex" alignItems="center">
              <Icon as={FaDatabase} color={iconColor} mr={3} boxSize={6} /> {/* Increased icon size */}
              Scalable big data processing and management solutions.
            </ListItem>
            
          </UnorderedList>
        </MotionBox>



        {/* Approach Section */}
        <MotionBox
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          p={8}
          borderRadius="xl"
          boxShadow="lg"
          bg={containerBg} // Consistent background color
          borderWidth="1px"
          borderColor={dividerColor} // Consistent border color
        >
          <Heading as="h2" size="xl" mb={4} color={headingColor} fontWeight="semibold">
            Our Approach
          </Heading>
          <Text fontSize="lg" color={textColor} lineHeight="tall">
            We pride ourselves on a client-centric methodology that fosters close
            collaboration to thoroughly understand your unique challenges and objectives. By
            combining industry expertise with advanced technology, we design and implement
            customized solutions that deliver measurable results and drive sustainable success.
          </Text>
        </MotionBox>

  

        {/* Future Section */}
        <MotionBox
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          p={8}
          borderRadius="xl"
          boxShadow="lg"
          bg={containerBg} // Consistent background color
          borderWidth="1px"
          borderColor={dividerColor} // Consistent border color
        >
          <Heading as="h2" size="xl" mb={4} color={headingColor} fontWeight="semibold">
            Shaping the Future Together
          </Heading>
          <Text fontSize="lg" color={textColor} lineHeight="tall">
            At Misron, we are dedicated to pushing the boundaries of innovation in
            data and AI. We invite you to partner with us as we redefine what is possible in
            your organization. Whether your goal is to optimize operations, uncover actionable
            insights, or pioneer groundbreaking products, our team is here to guide you
            toward achieving your vision in this data-driven era.
          </Text>
        </MotionBox>
      </VStack>
    </Container>
  );
};

export default About;
