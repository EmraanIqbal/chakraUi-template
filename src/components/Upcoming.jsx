import {
  Box,
  Container,
  Flex,
  Heading,
  Link,
  Spacer,
  Text,
} from "@chakra-ui/layout";
import Upcomingone from "../assets/upcomming-one.png";
import Upcomingtwo from "../assets/upcomming-two.jpg";
import Upcomingthree from "../assets/upcomming-three.jpg";
import Upcomingfour from "../assets/upcomming-four.jpg";
import React from "react";
import { Image } from "@chakra-ui/image";

const Upcoming = () => {
  return (
    <Box>
      <Container maxW="1100" my="20">
        <Flex>
          <Heading as="h3" alignItems="center" size="lg">
            Upcoming online events
          </Heading>
          <Spacer />
          <Link fontWeight="semibold" fontSize="20" color="teal.500">
            Explore more event
          </Link>
        </Flex>
        <Box mt="10">
          <Box position="relative">
            <Image position="relative" src={Upcomingone} alt="brand" />
            <Box
              position="absolute"
              d="flex"
              alignItems="center"
              borderRadius="5px"
              top="0"
              background="#ffffff"
              fontSize="sm"
              m="2"
              px="3"
              py="1"
            >
              <svg
                data-swarm-icon="true"
                width="18"
                height="18"
                fill="#757575"
                ml="4"
                d="block"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.5 4.5A1.5 1.5 0 0113 6v1.4L16 5v8l-3-2.4V12a1.5 1.5 0 01-1.5 1.5h-8A1.5 1.5 0 012 12V6a1.5 1.5 0 011.5-1.5h8z"></path>
              </svg>
              <Box ml="2" color="#757575" fontWeight="semibold">
                Online Event
              </Box>
            </Box>
            <Box m="10px 10px 2px 10px">THU, OCT 28 @ 3:30 PM PDT</Box>
            <Heading as="h4" size="md" w="300px" m="5px 10px 2px 10px">
              Personal Growth Book Club: Atomic Habits
            </Heading>
            <Text m="15px 10px 2px 10px">NYC Voyagers</Text>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Upcoming;
