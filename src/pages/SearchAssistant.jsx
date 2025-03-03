
import {
  Box,
  Flex,
  Heading,
  Text,
  List,
  ListItem,
  Grid,
  Card,
  Link,
  Container,
} from "@chakra-ui/react";

const theme = {
  colors: {
    brand: {
      50: "#edf2f7",
      100: "#e2e8f0",
      200: "#cbd5e0",
      300: "#a0aec0",
      400: "#718096",
      500: "#4a5568",
      600: "#2d3748",
      700: "#1a202c",
      800: "#171923",
      900: "#3182CE", // A professional blue, similar to Misron Consulting
    },
  },
  fonts: {
    heading: "Arial, sans-serif",
    body: "Arial, sans-serif",
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "semibold",
        borderRadius: "sm",
      },
      variants: {
        primary: {
          bg: "#3182CE",
          color: "white",
          _hover: {
            bg: "#2C5282",
          },
        },
        secondary: {
          border: "1px solid",
          borderColor: "#CBD5E0",
          color: "#4A5568",
          _hover: {
            bg: "#EDF2F7",
          },
        },
      },
    },
    Link: {
      baseStyle: {
        color: "#3182CE",
        _hover: {
          textDecoration: "underline",
        },
      },
    },
  },
};

const pasteTextContent = `
Smart Search, Smarter Decisions: Your
Personal AI Research Assistant
Overview
This AI-powered assistant enables users to extract precise information from uploaded documents such as research papers, legal contracts, and financial statements. Unlike traditional search engines that rely on vast, unverified internet sources, this system focuses exclusively on user-supplied documents, ensuring trustworthiness and relevance. It highlights references for transparency and reveals discrepancies in conflicting data, enabling users to refine their sources.

By limiting the search scope to relevant documents, the system avoids overwhelming users with irrelevant results, delivering meaningful and accurate answers. This approach eliminates misinformation risks, enhances efficiency, and simplifies decision-making by providing actionable insights directly from authentic resources.

How to Use This System
1. Upload Documents – Add research papers, reports, policies, contracts, or any other
relevant files related to your field.
2. Ask Specific Questions – Enter queries such as:
o "What are the key findings of this research?"
o "What are the safety regulations for this machine?"
o "What are the penalties for non-compliance in this contract?"
3. Receive Instant Answers – The system scans your documents, extracts relevant sections,
and highlights the most useful information.
4. Use the Information – Apply the extracted insights for faster decision-making,
compliance checks, reporting, or research work.
Applications: Industry & Professional Use
Academic Research
Who Can Use It? Professors, students, researchers, academic institutions.
Documents to Upload: Research papers, thesis documents, academic journals, literature
reviews.
How It Helps:
• Instantly finds references related to a research topic.
• Compares research papers side by side for literature reviews.
• Summarizes large studies, highlighting key findings.
• Extracts citations and sources automatically.
Healthcare & Medicine
Who Can Use It? Doctors, nurses, pharmacists, medical researchers.
Documents to Upload: Clinical studies, medical guidelines, patient case reports, drug manuals.
How It Helps:
• Retrieves specific treatment protocols for diseases.
• Compares clinical trial results for drug effectiveness.
• Identifies side effects and interactions from drug literature.
• Speeds up case study analysis for evidence-based treatments.
Legal Sector
Who Can Use It? Lawyers, legal researchers, compliance officers, corporate legal teams.
Documents to Upload: Case laws, contracts, legal precedents, regulatory documents.
How It Helps:
• Finds relevant case laws instantly for legal arguments.
• Extracts contract clauses for quick contract analysis.
• Compares different laws for compliance checks.
• Identifies penalties and legal requirements from regulatory documents.
Pharmaceuticals & Drug Development
Who Can Use It? Pharmaceutical researchers, drug regulatory authorities, healthcare
companies.
Documents to Upload: Drug research papers, FDA approvals, clinical trial reports.
How It Helps:
• Finds critical data on new drug testing.
• Summarizes global pharmaceutical compliance rules.
• Compares side effects of similar drugs.
Insurance & Risk Assessment
Who Can Use It? Insurance companies, underwriters, risk analysts.
Documents to Upload: Insurance policies, claim reports, risk assessment documents.
How It Helps:
• Extracts claim eligibility conditions quickly.
• Compares different insurance policy coverage.
• Identifies risk factors from historical reports.
Aerospace & Aviation
Who Can Use It? Airline companies, pilots, air traffic controllers, aircraft engineers.
Documents to Upload: Flight manuals, safety protocols, aviation regulations, maintenance logs.
How It Helps:
• Quickly retrieves emergency procedures for pilots.
• Summarizes aircraft maintenance guidelines.
• Compares aviation safety rules across different countries.
Music & Audio Production
Who Can Use It? Music producers, sound engineers, record labels.
Documents to Upload: Music rights agreements, sound production manuals, royalty contracts.
How It Helps:
• Extracts royalty payment details from contracts.
• Summarizes sound mixing techniques.
• Compares copyright laws for music distribution.
Human Resources & Recruitment
Who Can Use It? HR managers, recruiters, hiring agencies
Documents to Upload: Resumes, job descriptions, employment contracts, company policies
How It Helps:
• Quickly identifies matching resumes based on job descriptions
• Extracts key contract terms related to benefits, salaries, and policies
• Compares employment laws across different regions
Manufacturing & Supply Chain Management
Who Can Use It? Factory managers, logistics professionals, procurement teams
Documents to Upload: Supplier contracts, quality control guidelines, production manuals,
safety regulations
How It Helps:
• Retrieves specific supplier contract terms
• Identifies product safety guidelines and compliance requirements
• Compares supply chain policies across different vendors
Cybersecurity & IT Compliance
Who Can Use It? IT administrators, cybersecurity professionals, compliance officers
Documents to Upload: Security policies, regulatory compliance documents, IT manuals
How It Helps:
• Extracts key cybersecurity regulations for compliance audits
• Summarizes IT security policies for quick reference... Government & Public Policy
Who Can Use It? Policymakers, government agencies, legal analysts
Documents to Upload: Legislative bills, public policies, government reports
How It Helps:
• Identifies key provisions in legislative documents
• Compares policies across different jurisdictions
• Summarizes government reports for quick decision-making
Applications: Everyday Use
Personal Finance & Tax Filing
Who Can Use It? Individuals managing taxes, financial planners.
Documents to Upload: Tax laws, bank statements, investment policies.
How It Helps:
• Finds tax exemptions you qualify for.
• Summarizes financial planning options.
• Extracts key terms from investment plans.
Home & Property Management
Who Can Use It? Homeowners, real estate agents, landlords.
Documents to Upload: Rental agreements, mortgage contracts, maintenance records.
How It Helps:
• Extracts legal clauses on rent, eviction, maintenance.
• Summarizes mortgage repayment terms.
• Compares real estate market reports.
Travel & Visa Applications
Who Can Use It? Frequent travelers, visa applicants, immigration consultants.
Documents to Upload: Visa application forms, travel policies, embassy guidelines.
How It Helps:
• Finds eligibility criteria for different visas.
• Extracts step-by-step visa application procedures.
• Compares travel regulations for different countries.
Parenting & Childcare
Who Can Use It? Parents, educators, childcare providers
Documents to Upload: Parenting guides, educational policies, child development research
How It Helps:
• Finds best practices for child nutrition, sleep, and education
• Summarizes key recommendations from parenting books
• Extracts school admission policies and educational guidelines
Home Automation & Smart Devices
Who Can Use It? Homeowners, tech enthusiasts, smart home users
Documents to Upload: Device manuals, setup guides, troubleshooting documents
How It Helps:
• Quickly finds troubleshooting steps for smart devices
• Extracts automation setup instructions for different ecosystems (Alexa, Google Home)
• Compares different smart home security measures
Cooking & Nutrition
Who Can Use It? Home cooks, dietitians, fitness enthusiasts
Documents to Upload: Recipe books, diet plans, nutrition guides
How It Helps:
• Finds recipes based on dietary restrictions or ingredients available
• Extracts nutritional values from diet guides
• Compares different meal plans for weight management
Conclusion
This AI Assistant revolutionizes document searching by instantly
extracting relevant information from uploaded files. Whether for research, compliance, business,
personal finance, or creative work, this tool saves time, increases accuracy, and enhances
decision-making by providing precise, source-highlighted responses to user queries.
`;

// Function to extract sections from the text content
const extractSections = (text) => {
  const sections = {};

  // Extract Overview
  let overviewStart = text.indexOf("Overview");
  let howToUseStart = text.indexOf("How to Use This System");
  sections.overview = text.substring(
    overviewStart + "Overview".length,
    howToUseStart
  ).trim();

  // Extract How to Use This System
  let applicationsStart = text.indexOf("Applications: Industry & Professional Use");
  sections.howToUse = text.substring(
    howToUseStart + "How to Use This System".length,
    applicationsStart
  ).trim();

  // Extract Industry & Professional Use Applications
  let everydayUseStart = text.indexOf("Applications: Everyday Use");
  sections.industryApplications = text.substring(
    applicationsStart + "Applications: Industry & Professional Use".length,
    everydayUseStart
  ).trim();

  // Extract Everyday Use Applications
  let conclusionStart = text.indexOf("Conclusion");
  sections.everydayApplications = text.substring(
    everydayUseStart + "Applications: Everyday Use".length,
    conclusionStart
  ).trim();

  // Extract Conclusion
  sections.conclusion = text.substring(conclusionStart + "Conclusion".length).trim();

  return sections;
};

// Function to parse applications data
const parseApplications = (text) => {
  const applications = [];
  const appRegex = /(.*?)\nWho Can Use It\? (.*?)\nDocuments to Upload: (.*?)\nHow It Helps:\n(.*?)(?=\n\w+)/gs;

  let match;
  while ((match = appRegex.exec(text)) !== null) {
    const title = match[1].trim();
    const who = match[2].trim();
    const documents = match[3].trim();
    const how = match[4]
      .split("•")
      .map((item) => item.trim())
      .filter(Boolean); // Remove empty strings
    applications.push({ title, who, documents, how });
  }
  return applications;
};

const sections = extractSections(pasteTextContent);

// Parse the extracted application sections
const industryApplicationsData = parseApplications(sections.industryApplications);
const everydayApplicationsData = parseApplications(sections.everydayApplications);


function HeroSection() {
  return (
    <Box bg={theme.colors.brand[50]} py={8}>
      <Container maxW="container.xl">
        <Flex
          direction="column"
          px={6}
        >
          <Heading
            as="h1"
            fontWeight="bold"
            mb={3}
            color={theme.colors.brand[900]}
            align="center"
            justify="center"
            textAlign="center"
          >
           Misron Assistant
          </Heading>
          <Text fontSize="lg" color={theme.colors.brand[700]} mb={5}>
            {/* Overview section extracted from the text */}
            {sections.overview}
          </Text>
  
        </Flex>
      </Container>
    </Box>
  );
}

function HowToUseSection() {
  return (
    <Box py={8}>
      <Container maxW="container.xl">
        <Heading
          as="h2"
          size="xl"
          mb={4}
          textAlign="center"
          color={theme.colors.brand[700]}
        >
          How to Use This System
        </Heading>
        <List spacing={4} maxW="xl" mx="auto">
          <ListItem color={theme.colors.brand[700]}>
            <Text fontWeight="bold">1. Upload Documents</Text>
            <Text>
              Add research papers, reports, policies, contracts, or any other
              relevant files related to your field.
            </Text>
          </ListItem>
          <ListItem color={theme.colors.brand[700]}>
            <Text fontWeight="bold">2. Ask Specific Questions</Text>
            <Text>Enter queries such as:</Text>
            <List styleType="disc" ml={5}>
              <ListItem>
                <em>"What are the key findings of this research?"</em>
              </ListItem>
              <ListItem>
                <em>"What are the safety regulations for this machine?"</em>
              </ListItem>
              <ListItem>
                <em>
                  "What are the penalties for non-compliance in this contract?"
                </em>
              </ListItem>
            </List>
          </ListItem>
          <ListItem color={theme.colors.brand[700]}>
            <Text fontWeight="bold">3. Receive Instant Answers</Text>
            <Text>
              The system scans your documents, extracts relevant sections, and
              highlights the most useful information.
            </Text>
          </ListItem>
          <ListItem color={theme.colors.brand[700]}>
            <Text fontWeight="bold">4. Use the Information</Text>
            <Text>
              Apply the extracted insights for faster decision-making,
              compliance checks, reporting, or research work.
            </Text>
          </ListItem>
        </List>
      </Container>
    </Box>
  );
}

function ApplicationsSection() {
  return (
    <Box py={8} bg={theme.colors.brand[100]}>
      <Container maxW="container.xl">
        <Heading
          as="h2"
          size="xl"
          mb={6}
          textAlign="center"
          color={theme.colors.brand[700]}
        >
          Applications: Industry & Professional Use
        </Heading>
        <Grid templateColumns={{ sm: "1fr", md: "repeat(3, 1fr)" }} gap={6} mb={12}>
          {industryApplicationsData.map((app, index) => (
            <Card key={index} p={4} boxShadow="md" bg="white">
              <Heading size="md" mb={2} color={theme.colors.brand[900]}>
                {app.title}
              </Heading>
              <Text fontWeight="bold" color={theme.colors.brand[700]}>
                Who Can Use It?
              </Text>
              <Text mb={2} color={theme.colors.brand[500]}>
                {app.who}
              </Text>
              <Text fontWeight="bold" color={theme.colors.brand[700]}>
                Documents to Upload:
              </Text>
              <Text mb={2} color={theme.colors.brand[500]}>
                {app.documents}
              </Text>
              <Text fontWeight="bold" color={theme.colors.brand[700]}>
                How It Helps:
              </Text>
              <List spacing={1}>
                {app.how.map((item, i) => (
                  <ListItem key={i} color={theme.colors.brand[500]}>
                    {item}
                  </ListItem>
                ))}
              </List>
            </Card>
          ))}
        </Grid>

        <Heading
          as="h2"
          size="xl"
          mb={6}
          textAlign="center"
          color={theme.colors.brand[700]}
        >
          Applications: Everyday Use
        </Heading>
        <Grid templateColumns={{ sm: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
          {everydayApplicationsData.map((app, index) => (
            <Card key={index} p={4} boxShadow="md" bg="white">
              <Heading size="md" mb={2} color={theme.colors.brand[900]}>
                {app.title}
              </Heading>
              <Text fontWeight="bold" color={theme.colors.brand[700]}>
                Who Can Use It?
              </Text>
              <Text mb={2} color={theme.colors.brand[500]}>
                {app.who}
              </Text>
              <Text fontWeight="bold" color={theme.colors.brand[700]}>
                Documents to Upload:
              </Text>
              <Text mb={2} color={theme.colors.brand[500]}>
                {app.documents}
              </Text>
              <Text fontWeight="bold" color={theme.colors.brand[700]}>
                How It Helps:
              </Text>
              <List spacing={1}>
                {app.how.map((item, i) => (
                  <ListItem key={i} color={theme.colors.brand[500]}>
                    {item}
                  </ListItem>
                ))}
              </List>
            </Card>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

function ConclusionSection() {
  return (
    <Box py={12}>
      <Container maxW="container.xl">
        <Heading
          as="h2"
          size="xl"
          mb={4}
          textAlign="center"
          color={theme.colors.brand[700]}
        >
          Conclusion
        </Heading>
        <Text fontSize="lg" color={theme.colors.brand[700]} textAlign="center">
          {sections.conclusion}
        </Text>
      </Container>
    </Box>
  );
}

function Footer() {
  return (
    <Box bg={theme.colors.brand[800]} color="white" py={4}>
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center">
          <Text>&copy; {new Date().getFullYear()} Misron Consulting</Text>
          <Flex>
            <Link href="#" mr={4}>
              Privacy Policy
            </Link>
            <Link href="#">Terms of Service</Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

function SearchAssistant() {
  return (
    <Box>
     
      <HeroSection />
      <HowToUseSection />
      <ApplicationsSection />
      <ConclusionSection />
    </Box>
  );
}



export default SearchAssistant;
