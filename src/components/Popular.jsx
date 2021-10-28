import { Image } from "@chakra-ui/image";
import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  Link,
  Spacer,
  Text,
} from "@chakra-ui/layout";
import React from "react";
import image1 from "../assets/70x70.jpg";
import image2 from "../assets/70x70 (1).jpg";
import image3 from "../assets/70x70 (2).jpg";

const Popular = () => {
  return (
    <Box mb="100px">
      <Container maxW="1100" mt="80px" mb="40px">
        <Flex>
          <Heading as="h1" alignItems="center" size="xl">
            Popular groups
          </Heading>
          <Spacer />
          <Link fontWeight="semibold" fontSize="20" color="teal.500">
            Explore more event
          </Link>
        </Flex>
      </Container>
      <Container maxW="1100">
        <Box d="flex">
          <Box border="1px solid #d9d9d9" borderRadius="5" m="5px">
            <Box d="flex" w="100%">
              <Image src={image1} borderRadius="5" m="3" />
              <Heading m="2" as="h3" size="lg" fontSize="1.55rem">
                Shorewalkers: Members Only Group
              </Heading>
            </Box>
            <Divider w="95%" ml="2" color="#d9d9d9" />
            <Box m="4">
              <Text color="#aaa79d">Thu, Oct 28 @ 7:30 AM PDT</Text>
              <Text>Walk Shore Road, Brooklyn</Text>
            </Box>
          </Box>
          <Box border="1px solid #d9d9d9" borderRadius="5" m="5px">
            <Box d="flex" w="100%">
              <Image src={image2} borderRadius="5" m="3" />
              <Heading m="2" as="h3" size="lg" fontSize="1.55rem">
                Shorewalkers: Members Only Group
              </Heading>
            </Box>
            <Divider w="95%" ml="2" color="#d9d9d9" />
            <Box m="4">
              <Text color="#aaa79d">Thu, Oct 28 @ 7:30 AM PDT</Text>
              <Text>Walk Shore Road, Brooklyn</Text>
            </Box>
          </Box>
          <Box border="1px solid #d9d9d9" borderRadius="5" m="5px">
            <Box d="flex" w="100%">
              <Image src={image3} borderRadius="5" m="3" />
              <Heading m="2" as="h3" size="lg" fontSize="1.55rem">
                Shorewalkers: Members Only Group
              </Heading>
            </Box>
            <Divider w="95%" ml="2" color="#d9d9d9" />
            <Box m="4">
              <Text color="#aaa79d">Thu, Oct 28 @ 7:30 AM PDT</Text>
              <Text>Walk Shore Road, Brooklyn</Text>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Popular;
