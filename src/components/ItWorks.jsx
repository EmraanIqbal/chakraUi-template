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
        <Text textAlign="center" mr="300px" ml="300px">
          Meet new people who share your interests through online and in-person
          events. It’s free to create an account.
        </Text>
        <Box
          my="10"
          d="flex"
          alignItems="center"
          justifyContent="space-between"
          w="100%"
        >
          <Box w="27%">
            <Image src={joinGroup} alt="join" alignItems="center" />
            <Button variant="link" ml="30">
              Join a group
            </Button>
            <Text textAlign="center">
              Do what you love, meet others who love it, find your community.
              The rest is history!
            </Text>
          </Box>
          <Box w="27%">
            <Image src={ticket} alt="join" alignItems="center" mb={3 + 2} />
            <Button variant="link">Find an event</Button>
            <Text textAlign="center">
              Events are happening on just about any topic you can think of,
              from online gaming and photography to yoga and hiking.
            </Text>
          </Box>
          <Box w="27%">
            <Image src={startGroup} alt="join" />
            <Button variant="link">start a group</Button>
            <Text textAlign="center">
              You don’t have to be an expert to gather people together and
              explore shared interests.
            </Text>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ItWorks;
