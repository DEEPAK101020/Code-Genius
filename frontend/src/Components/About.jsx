import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Box p={"2rem 4rem"}>
      <Heading as="h3" size="lg" mb={4}>
        About Future Map!
      </Heading>

      <Box bg="gray.100" p={6} borderRadius="md" mb={4}>
        <Heading as="h2" size="xl" mb={4}>
          Our Story:
        </Heading>
        <Text>
          Future Map ! Future Map is your ultimate guide to navigating the
          educational journey ahead. Whether you're a high school student
          exploring career paths, a college graduate planning your next steps,
          or a professional seeking to advance your skills, Future Map empowers
          you to chart your course with confidence
        </Text>
      </Box>

      <Box
        bg="gray.100"
        p={4}
        borderRadius="md"
        mb={4}
        display={"flex"}
        flexDirection={"column"}
        gap={4}
      >
        <Heading as="h2" size="xl" mb={4}>
          Meet the Team:
        </Heading>
        <Text>
          <strong>Vinaygouda Meti:</strong> the architect behind Future Map's
          advanced functionalities. As a Full Stack Developer, I thrive on
          coding challenges and innovation, driving the development of features
          that push the boundaries of what's possible. My goal is to inspire and
          challenge skilled coders while ensuring Future Map remains at the
          forefront of technological innovation.
        </Text>
        <Text>
          <strong>Aishwarya Lohakare:</strong> Full Stack Developer
          extraordinaire, the one responsible for ensuring Future Map's seamless
          performance and scalability. As a Full Stack Developer, I specialize
          in Node.js and database management, laying the foundation for a robust
          platform. My attention to detail ensures that Future Map remains
          responsive and reliable, even under heavy usage.
        </Text>
        <Text>
          <strong>Deepak Kumar:</strong>Backend Developer ,the backbone of
          Future Map's backend infrastructure. As a Backend Developer, I focus
          on AI workflows, deployment technologies, and server management. My
          expertise ensures that Future Map operates efficiently, delivering
          personalized experiences to users seamlessly.
        </Text>
        <Text>
          <strong>Vikas Yadav:</strong> Backend Developer , the creative force
          behind Future Map's intuitive interfaces. As a Backend Designer, I
          combine technical expertise with a passion for user experience design.
          My goal is to make Future Map engaging and user-friendly for all,
          reflecting our commitment to accessibility and inclusivity.
        </Text>
      </Box>

      <Box bg="gray.100" p={4} borderRadius="md" mb={4}>
        <Heading as="h2" size="xl" mb={4}>
          Our Mission:
        </Heading>
        <Text>
          At Future Map, our mission is to empower individuals to navigate their
          educational and career journeys with clarity and confidence. We
          believe that everyone deserves access to the resources and guidance
          needed to make informed decisions about their future
        </Text>
      </Box>

      <Box bg="gray.100" p={4} borderRadius="md" mb={4}>
        <Heading as="h2" size="xl" mb={4}>
          Why Future Map?
        </Heading>
        <Text>
          Future Map is not just a name; it's a promise of guidance and clarity
          for individuals embarking on their educational and career journeys.
          The combination of 'Future' and 'Map' symbolizes our commitment to
          helping users navigate their paths to success with foresight and
          precision
        </Text>
        <Text>
          Join us as we revolutionize the way coders work, learn, and
          collaborate. Welcome to the future of coding—welcome to CodeFlow.
        </Text>
      </Box>
    </Box>
  );
};

export default About;
