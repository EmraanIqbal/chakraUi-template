import { Box, Container, Flex, Heading, Link, Spacer } from "@chakra-ui/layout";
import Upcomingone from "../assets/upcomming-one.png";
import Upcomingtwo from "../assets/upcomming-two.jpg";
import Upcomingthree from "../assets/upcomming-three.jpg";
import Upcomingfour from "../assets/upcomming-four.jpg";
import React from "react";

const Upcoming = () => {
  return (
    <Box>
      <Container maxW="1100" my="20">
        <Flex border="1px solid grey">
          <Heading as="h3" alignItems="center" size="lg">
            Upcoming online events
          </Heading>
          <Spacer />
          <Link fontWeight="semibold" fontSize="20" color="teal.500">
            Explore more events
          </Link>
        </Flex>
      </Container>
    </Box>
  );
};

export default Upcoming;
