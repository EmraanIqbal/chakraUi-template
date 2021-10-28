import { Image } from "@chakra-ui/image";
import { Box, Container, Flex, Heading, Spacer } from "@chakra-ui/layout";
import React from "react";
import leftMob from "../assets/device-left.webp";
import rightMob from "../assets/device-right.webp";
import meetuplogo from "../assets/Meetup_Logo.png";

const AppStore = () => {
  return (
    <Box mt="150px" mb="100px">
      <Container maxW="1100">
        <Box d="flex" justifyContent="space-between">
          <Image src={leftMob} />
          <Box>
            <Image
              src={meetuplogo}
              h="80px"
              objectFit="cover"
              border="1px solid #EDF2F7"
              boxShadow="2xl"
              borderRadius="10"
              alignItems="center"
              ml="auto"
              mr="auto"
              mt="30px"
            />
            <Heading mt="60px" fontSize="1.55rem" textAlign="center">
              Stay connected. <br />
              Download the app.
            </Heading>
          </Box>
          <Image src={rightMob} />
        </Box>
      </Container>
    </Box>
  );
};

export default AppStore;
