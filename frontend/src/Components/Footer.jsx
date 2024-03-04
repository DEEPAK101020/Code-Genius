import React from "react";
import { Grid, Box, GridItem, Heading, Text, Flex } from "@chakra-ui/react";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      className="n-footer px-6 flex flex-col bg-blue-400 text-black items-center justify-center "

      //   border={"1px solid #92C7CF"}
      //   _hover={{ color: "#854CE6" }}
    >
      <Grid
        // border={"1px solid #854CE6"}
        templateColumns={{
          base: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
        }}
        gap={{ base: 2, md: 8 }}
        w={{ base: "100%", md: "80%" }}
        // mt={{ base: 6, md: 0 }}
      >
        <GridItem
          //   border={"1px solid #854CE6"}
          className="flex flex-col justify-start mt-8 "
          gap={{ base: 0, md: 1 }}
          m={{ base: 2, md: "50px auto" }}
          //   w="100%"
          //   h={{ base: "auto", lg: "auto" }}
        >
          <Heading fontSize={{ base: "1.2rem", md: "2rem" }}>Menu</Heading>
          <Flex
            flexDirection={"column"}
            fontSize={{ base: ".8rem", md: "1rem" }}
          >
            <Link to="/">
              <Text mt={2}>Home</Text>
            </Link>
            <Link to="/about">
              <Text>About</Text>
            </Link>
            <Link to="/roadmap">
              <Text> RoadMap</Text>
            </Link>
          </Flex>
        </GridItem>
        <GridItem
          m={{ base: 2, md: "50px auto" }}
          className=" flex flex-col justify-start  mt-8"
          w="100%"
          //   border={"1px solid #92C7CF"}
          gap={1}
          //   h={{ base: "40", lg: "60" }}
        >
          <Heading>Need Help ?</Heading>
          <Flex
            flexDirection={"column"}
            fontSize={{ base: ".8rem", md: "1rem" }}
          >
            <Link to="#">
              <Text mt={2}>Code Q&A's</Text>
            </Link>
            <Link to="https://www.termsfeed.com/blog/terms-conditions-url/">
              <Text> Terms of use</Text>
            </Link>
            <Link to="https://www.termsfeed.com/blog/terms-conditions-url/">
              <Text> Privacy Policy</Text>
            </Link>
          </Flex>
        </GridItem>
        <GridItem
          m={{ base: 2, md: "50px auto" }}
          className="flex flex-col justify-start mt-8"
          w="100%"
          //   border={"1px solid #92C7CF"}
          gap={1}
          //   h={{ base: "40", sm: "60", md: "40", lg: "60" }}
        >
          <Heading fontSize={{ base: "1.2rem", md: "2rem" }}>Contacts</Heading>
          <Flex
            flexDirection={"column"}
            fontSize={{ base: ".8rem", md: "1rem" }}
          >
            <Text mt={2}>+91 828*74345*</Text>
            <Text>49 Greenpark New Delhi</Text>
            <Text>futureMap@gmail.com</Text>
          </Flex>
        </GridItem>
      </Grid>
      <Box
        className="flex items-center justify-end "
        w={{ base: "100%", md: "80%" }}
        // border={"1px solid white"}
        mt={2}
      >
        <Text p={"1rem 0"} fontSize={{ base: ".8rem", md: "1rem" }}>
          © Copy right 2023 FutureMap
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
