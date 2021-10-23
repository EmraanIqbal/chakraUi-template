import { Box, Container, Heading, Text } from "@chakra-ui/layout";
import React from "react";

const ItWorks = () => {
  return (
    <Box>
      <Container maxW="1100" mt="50">
        <Heading textAlign="center">How Meetup works</Heading>
        <Text textAlign="center">
          Meet new people who share your interests through online and in-person
          events. It’s free to create an account.
        </Text>
      </Container>
    </Box>
  );
};

export default ItWorks;
