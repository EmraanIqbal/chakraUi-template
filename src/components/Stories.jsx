import { Image } from "@chakra-ui/image";
import { Box, Container, Heading, Link, Text } from "@chakra-ui/layout";
import React from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

const Stories = () => {
  return (
    <Box>
      <Container maxW="1100" my="40">
        <Heading textAlign="center"> Stories from Meetup</Heading>
        <Text
          textAlign="center"
          fontSize="1.20rem"
          w="800px"
          ml="auto"
          mr="auto"
        >
          People on Meetup have fostered community, learned new skills, started
          businesses, and made life-long friends. Learn how.
        </Text>
        <Box d="flex" justifyContent="space-between" mt="30">
          <Box w="32%">
            <Image src={img1} />
            <Heading as="h4" size="md" mt="4" fontWeight="600">
              Three Ways To Make Coworker Friendships While Working From Home
            </Heading>
            <Text color="#87807e" mt="4" fontSize="18px">
              Social interaction is a key part of any healthy lifestyle.
              Discover all different kinds of events that’ll help you maintain a
              fun and fulfilling social life.
            </Text>
          </Box>
          <Box w="32%">
            <Image src={img2} />
            <Link as="h4" size="md" mt="4" fontWeight="1000" fontSize="1.25rem">
              Five Ways to Feel More Connected
            </Link>
            <Text color="#87807e" mt="4" fontSize="18px">
              Since Meetup began nearly 20 years ago, we’ve fostered connections
              between more than 50 million people in 190 countries worldwide.
              Here are five simple strategies to help you feel more connected
              and improve your wellbeing.
            </Text>
          </Box>
          <Box w="32%">
            <Image src={img3} />
            <Link as="h4" size="md" mt="4" fontWeight="1000" fontSize="1.25rem">
              Five Ways to Feel More Connected
            </Link>
            <Text color="#87807e" mt="4" fontSize="18px">
              Social interaction is a key part of any healthy lifestyle.
              Discover all different kinds of events that’ll help you maintain a
              fun and fulfilling social life.
            </Text>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Stories;
