import { Image } from "@chakra-ui/image";
import { Box, Container, Heading, Text } from "@chakra-ui/layout";
import React from "react";
import { Button } from "@chakra-ui/react";

import joinGroup from "../assets/joinagroup.svg";
import ticket from "../assets/ticket.svg";
import startGroup from "../assets/start-group.svg";

const ItWorks = () => {
  return (
    <Box>
      <Container maxW="1100" my="20">
        <Heading textAlign="center">How Meetup works</Heading>
        <Box align="center" maxW="500px" mx="auto" pb="10">
          <Text>
            Meet new people who share your interests through online and
            in-person events. It’s free to create an account
          </Text>
        </Box>
        <Box
          my="10"
          d="flex"
          justifyContent="space-between"
          w="100%"
          align="center"
        >
          <Box w="27%">
            <Image src={joinGroup} alt="join" />
            <Button variant="link" color="blue.100">
              Join a group
            </Button>
            <Text>
              Do what you love, meet others who love it, find your community.
              The rest is history!
            </Text>
          </Box>
          <Box w="27%">
            <Image src={ticket} alt="join" mb={2} />
            <Button variant="link" color="blue.100">
              Find an event
            </Button>
            <Text>
              Events are happening on just about any topic you can think of,
              from online gaming and photography to yoga and hiking.
            </Text>
          </Box>
          <Box w="27%">
            <Image src={startGroup} alt="join" />
            <Button variant="link" color="blue.100">
              Start a group
            </Button>
            <Text>
              You don’t have to be an expert to gather people together and
              explore shared interests.
            </Text>
          </Box>
        </Box>
        <Box align="center">
          <Button bg="blue.100">Join Meetup</Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ItWorks;
