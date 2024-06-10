import { Container, VStack, Heading, Text, Button, Box, Image, HStack } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6} textAlign="center">
        <Image
          borderRadius="full"
          boxSize="150px"
          src="https://via.placeholder.com/150"
          alt="Profile Picture"
        />
        <Heading as="h1" size="2xl">John Doe</Heading>
        <Text fontSize="lg" color="gray.500">Full Stack Developer</Text>
        <Text fontSize="md" color="gray.600" maxW="lg">
          Passionate about building scalable web applications and always eager to learn new technologies.
        </Text>
        <HStack spacing={4}>
          <Button as="a" href="https://github.com" target="_blank" leftIcon={<FaGithub />} colorScheme="teal" variant="outline">
            GitHub
          </Button>
          <Button as="a" href="https://linkedin.com" target="_blank" leftIcon={<FaLinkedin />} colorScheme="teal" variant="outline">
            LinkedIn
          </Button>
          <Button as="a" href="mailto:email@example.com" leftIcon={<FaEnvelope />} colorScheme="teal" variant="outline">
            Email
          </Button>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;