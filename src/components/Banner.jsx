import { Image } from "@chakra-ui/image";
import { Badge, Box, Container, Heading } from "@chakra-ui/layout";
import {
  Button,
  Grid,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import React from "react";
import brandLogo from "../assets/brand-logo.svg";
import illustration from "../assets/illustration.svg";
import imageOne from "../assets/image-one.jpg";
import imageTwo from "../assets/image-two.jpg";
import imageThree from "../assets/image-three.jpg";
import { useColorMode } from "@chakra-ui/color-mode";
// import { IoLocationSharp } from "react-icons";
import { IoLocationSharp } from "@react-icons/all-files/fa/IoLocationSharp";
import { ArrowForwardIcon, MoonIcon, SearchIcon } from "@chakra-ui/icons";

const Banner = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <>
      <Box>
        <Box
          d="flex"
          alignItems="center"
          justifyContent="space-between"
          ml="10"
          mr="6"
        >
          <Image boxSize="90px" src={brandLogo} alt="brand" />

          <Box>
            <Button
              onClick={toggleColorMode}
              colorScheme="gray.600"
              fontSize="md"
              variant="ghost"
              // border="none"
              // disabled
            >
              <MoonIcon />
            </Button>
            <Button pr="3" colorScheme="gray.600" fontSize="md" variant="link">
              Login
            </Button>
            <Button colorScheme="gray.600" fontSize="md" variant="link">
              SignUp
            </Button>
          </Box>
        </Box>
      </Box>

      <Box>
        <Container maxWidth="1100">
          <Box d="flex" alignItems="center" py="20" flexDirection="row">
            <Box mr="6">
              <Heading as="h1" size="2xl">
                <Box fontWeight="black">
                  Dive in! There are so many things to do on Meetup
                </Box>
              </Heading>
              <Box mt="6" fontWeight="medium">
                Join a group to meet people, make friends, find support, grow a
                business, and explore your interests. Thousands of events are
                happening every day, both online and in person!
              </Box>
            </Box>
            <Box w="100%">
              <Image w="100%" src={illustration} alt="illustration" />
            </Box>
          </Box>
        </Container>
      </Box>

      <Box>
        <Container maxW="1100" mt={10}>
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            <Box>
              <Image
                w="100%"
                borderRadius="lg"
                src={imageOne}
                alt="image three"
              />
              <Button colorScheme="teal" variant="link" mt="5">
                Make new friend
                <ArrowForwardIcon />
              </Button>
            </Box>
            <Box>
              <Image
                w="100%"
                borderRadius="lg"
                src={imageTwo}
                alt="image three"
              />
              <Button colorScheme="teal" variant="link" mt="5">
                Explore the outdoors
                <ArrowForwardIcon />
              </Button>
            </Box>
            <Box>
              <Image
                w="100%"
                borderRadius="lg"
                src={imageThree}
                alt="image three"
              />
              <Button colorScheme="teal" variant="link" mt="5">
                Connect over tech
                <ArrowForwardIcon />
              </Button>
            </Box>
          </Grid>
        </Container>
      </Box>

      <Box mt="50px">
        <Container maxWidth="1100">
          <Box
            d="flex"
            direction="row"
            flexWrap="wrap"
            justifyContent="space-between"
          >
            <Badge
              borderRadius="3xl"
              color="white"
              bg="blue.100"
              px="6"
              py="4"
              mr="4"
              mb="4"
              textTransform="normal"
            >
              Boost your career
            </Badge>
            <Badge
              borderRadius="3xl"
              color="white"
              bg="blue.100"
              px="6"
              py="4"
              mr="4"
              mb="4"
              textTransform="normal"
            >
              Find your zen
            </Badge>
            <Badge
              borderRadius="3xl"
              color="white"
              bg="blue.100"
              px="6"
              py="4"
              mr="4"
              mb="4"
              textTransform="normal"
            >
              Get moving
            </Badge>
            <Badge
              borderRadius="3xl"
              color="white"
              bg="blue.100"
              px="6"
              py="4"
              mr="4"
              mb="4"
              textTransform="normal"
            >
              Share language + culture
            </Badge>
            <Badge
              borderRadius="3xl"
              color="white"
              bg="blue.100"
              px="6"
              py="4"
              mr="4"
              mb="4"
              textTransform="normal"
            >
              Read with friends
            </Badge>
            <Badge
              borderRadius="3xl"
              color="white"
              bg="blue.100"
              px="6"
              py="4"
              mr="4"
              mb="4"
              textTransform="normal"
            >
              Write together
            </Badge>
            <Badge
              borderRadius="3xl"
              color="white"
              bg="blue.100"
              px="6"
              py="4"
              mr="4"
              mb="4"
              textTransform="normal"
            >
              Hone your craft
            </Badge>
          </Box>
        </Container>
      </Box>

      <Box mt="50px">
        <Container maxWidth="1100">
          <Box d="flex" justifyContent="space-between">
            <Box w="50%">
              <Heading as="h5">What do you want to do?</Heading>
              <Box d="flex" justifyContent="space-between" mt="20px" w="45%">
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<SearchIcon color="gray.300" />}
                  />
                  <Input
                    size="lg"
                    type="text"
                    placeholder='Search for "tennis"'
                  />
                </InputGroup>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<IoLocationSharp color="gray.300" />}
                  />
                  <Input
                    size="lg"
                    type="text"
                    placeholder='Search for "tennis"'
                  />
                </InputGroup>
              </Box>
            </Box>
            <Box w="50%">
              <Heading as="h5">See what’s happening</Heading>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Banner;
