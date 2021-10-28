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
      <Container maxW="1100" mt="100px">
        <Flex>
          <Heading as="h1" alignItems="center" size="xl">
            Upcoming online events
          </Heading>
          <Spacer />
          <Link fontWeight="semibold" fontSize="20" color="teal.500">
            Explore more event
          </Link>
        </Flex>
      </Container>
      <Container maxW="1100">
        <Box mt="10" d="flex" justifyContent="space-between">
          <Box position="relative" w="22%">
            <Image
              position="relative"
              src={Upcomingone}
              alt="brand"
              borderRadius="5"
            />
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
            <Box color="#aaa79d" m="10px 10px 2px 10px">
              THU, OCT 28 @ 3:30 PM PDT
            </Box>
            <Heading as="h6" size="xs" w="300px" m="5px 10px 2px 10px">
              Personal Growth Book Club:
              <br /> Atomic Habits
            </Heading>
            <Text m="15px 10px 10px 10px">NYC Voyagers</Text>
            <Box d="flex" alignItems="center" justifyContent="space-between">
              <Box d="flex" alignItems="center">
                <Image
                  borderRadius="full"
                  border="1px"
                  borderColor="gray.200"
                  boxSize="35px"
                  mr="-8px"
                  src="https://bit.ly/sage-adebayo"
                  alt="Segun Adebayo"
                />
                <Image
                  borderRadius="full"
                  boxSize="35px"
                  border="1px"
                  borderColor="gray.200"
                  mr="-8px"
                  src="https://bit.ly/sage-adebayo"
                  alt="Segun Adebayo"
                />
                <Image
                  borderRadius="full"
                  boxSize="35px"
                  border="1px"
                  borderColor="gray.200"
                  mr="-8px"
                  src="https://bit.ly/sage-adebayo"
                  alt="Segun Adebayo"
                />
                <Box ml="16px" color="#757575">
                  134
                </Box>
              </Box>
              <Box>
                <svg
                  data-swarm-icon="true"
                  height="18"
                  width="18"
                  viewBox="0 0 18 18"
                >
                  <path d="M8 3.415L6.707 4.707a1 1 0 01-1.414-1.414l3.003-3a1 1 0 011.414 0l2.997 3a1 1 0 11-1.414 1.414L10 3.413V9a1 1 0 11-2 0V3.415zM13.5 9a1 1 0 010-2H15a1 1 0 011 1v7.5a1 1 0 01-1 1H3a1 1 0 01-1-.989l-.085-7.5a1 1 0 011-1.011H4.55a1 1 0 110 2h-.624l.063 5.5H14V9h-.5z"></path>
                </svg>
              </Box>
            </Box>
          </Box>
          <Box position="relative" w="22%">
            <Image
              position="relative"
              src={Upcomingtwo}
              alt="brand"
              borderRadius="5"
            />
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
            <Box color="#aaa79d" m="10px 10px 2px 10px">
              THU, OCT 28 @ 3:30 PM PDT
            </Box>
            <Heading as="h6" size="xs" w="300px" m="5px 10px 2px 10px">
              Personal Growth Book Club:
              <br /> Atomic Habits
            </Heading>
            <Text m="15px 10px 10px 10px">NYC Voyagers</Text>
            <Box d="flex" alignItems="center" justifyContent="space-between">
              <Box d="flex" alignItems="center">
                <Image
                  borderRadius="full"
                  border="1px"
                  borderColor="gray.200"
                  boxSize="35px"
                  mr="-8px"
                  src="https://bit.ly/sage-adebayo"
                  alt="Segun Adebayo"
                />
                <Image
                  borderRadius="full"
                  boxSize="35px"
                  border="1px"
                  borderColor="gray.200"
                  mr="-8px"
                  src="https://bit.ly/sage-adebayo"
                  alt="Segun Adebayo"
                />
                <Image
                  borderRadius="full"
                  boxSize="35px"
                  border="1px"
                  borderColor="gray.200"
                  mr="-8px"
                  src="https://bit.ly/sage-adebayo"
                  alt="Segun Adebayo"
                />
                <Box ml="16px" color="#757575">
                  134
                </Box>
              </Box>
              <Box>
                <svg
                  data-swarm-icon="true"
                  height="18"
                  width="18"
                  viewBox="0 0 18 18"
                >
                  <path d="M8 3.415L6.707 4.707a1 1 0 01-1.414-1.414l3.003-3a1 1 0 011.414 0l2.997 3a1 1 0 11-1.414 1.414L10 3.413V9a1 1 0 11-2 0V3.415zM13.5 9a1 1 0 010-2H15a1 1 0 011 1v7.5a1 1 0 01-1 1H3a1 1 0 01-1-.989l-.085-7.5a1 1 0 011-1.011H4.55a1 1 0 110 2h-.624l.063 5.5H14V9h-.5z"></path>
                </svg>
              </Box>
            </Box>
          </Box>
          <Box position="relative" w="22%">
            <Image
              position="relative"
              src={Upcomingthree}
              alt="brand"
              borderRadius="5"
            />
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
                Online Even
              </Box>
            </Box>
            <Box color="#aaa79d" m="10px 10px 2px 10px">
              THU, OCT 28 @ 3:30 PM PDT
            </Box>
            <Heading as="h6" size="xs" w="300px" m="5px 10px 2px 10px">
              Personal Growth Book Club:
              <br /> Atomic Habits
            </Heading>
            <Text m="15px 10px 10px 10px">NYC Voyagers</Text>
            <Box d="flex" alignItems="center" justifyContent="space-between">
              <Box d="flex" alignItems="center">
                <Image
                  borderRadius="full"
                  border="1px"
                  borderColor="gray.200"
                  boxSize="35px"
                  mr="-8px"
                  src="https://bit.ly/sage-adebayo"
                  alt="Segun Adebayo"
                />
                <Image
                  borderRadius="full"
                  boxSize="35px"
                  border="1px"
                  borderColor="gray.200"
                  mr="-8px"
                  src="https://bit.ly/sage-adebayo"
                  alt="Segun Adebayo"
                />
                <Image
                  borderRadius="full"
                  boxSize="35px"
                  border="1px"
                  borderColor="gray.200"
                  mr="-8px"
                  src="https://bit.ly/sage-adebayo"
                  alt="Segun Adebayo"
                />
                <Box ml="16px" color="#757575">
                  134
                </Box>
              </Box>
              <Box>
                <svg
                  data-swarm-icon="true"
                  height="18"
                  width="18"
                  viewBox="0 0 18 18"
                >
                  <path d="M8 3.415L6.707 4.707a1 1 0 01-1.414-1.414l3.003-3a1 1 0 011.414 0l2.997 3a1 1 0 11-1.414 1.414L10 3.413V9a1 1 0 11-2 0V3.415zM13.5 9a1 1 0 010-2H15a1 1 0 011 1v7.5a1 1 0 01-1 1H3a1 1 0 01-1-.989l-.085-7.5a1 1 0 011-1.011H4.55a1 1 0 110 2h-.624l.063 5.5H14V9h-.5z"></path>
                </svg>
              </Box>
            </Box>
          </Box>
          <Box position="relative" w="22%">
            <Image
              position="relative"
              src={Upcomingfour}
              alt="brand"
              borderRadius="5"
            />
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
            <Box color="#aaa79d" m="10px 10px 2px 10px">
              THU, OCT 28 @ 3:30 PM PDT
            </Box>
            <Heading as="h6" size="xs" w="300px" m="5px 10px 2px 10px">
              Personal Growth Book Club:
              <br /> Atomic Habits
            </Heading>
            <Text m="15px 10px 10px 10px">NYC Voyagers</Text>
            <Box d="flex" alignItems="center" justifyContent="space-between">
              <Box d="flex" alignItems="center">
                <Image
                  borderRadius="full"
                  border="1px"
                  borderColor="gray.200"
                  boxSize="35px"
                  mr="-8px"
                  src="https://bit.ly/sage-adebayo"
                  alt="Segun Adebayo"
                />
                <Image
                  borderRadius="full"
                  boxSize="35px"
                  border="1px"
                  borderColor="gray.200"
                  mr="-8px"
                  src="https://bit.ly/sage-adebayo"
                  alt="Segun Adebayo"
                />
                <Image
                  borderRadius="full"
                  boxSize="35px"
                  border="1px"
                  borderColor="gray.200"
                  mr="-8px"
                  src="https://bit.ly/sage-adebayo"
                  alt="Segun Adebayo"
                />
                <Box ml="16px" color="#757575">
                  134
                </Box>
              </Box>
              <Box>
                <svg
                  data-swarm-icon="true"
                  height="18"
                  width="18"
                  viewBox="0 0 18 18"
                >
                  <path d="M8 3.415L6.707 4.707a1 1 0 01-1.414-1.414l3.003-3a1 1 0 011.414 0l2.997 3a1 1 0 11-1.414 1.414L10 3.413V9a1 1 0 11-2 0V3.415zM13.5 9a1 1 0 010-2H15a1 1 0 011 1v7.5a1 1 0 01-1 1H3a1 1 0 01-1-.989l-.085-7.5a1 1 0 011-1.011H4.55a1 1 0 110 2h-.624l.063 5.5H14V9h-.5z"></path>
                </svg>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Upcoming;
