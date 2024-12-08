import {
  Container,
  Flex,
  Text,
  HStack,
  Button,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { FaPlusCircle } from "react-icons/fa";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { PlusSquareIcon } from "@chakra-ui/icons";
const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container
      maxW={"1140px"}
      px={4}
      bg={useColorModeValue("gray.100", "gray.900")}
    >
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{ base: "column", sm: "row" }}
      >
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize={{ base: "22", sm: "28" }}
          fontWeight="extrabold"
          textAlign={"center"}
        >
          <Link to={"/"}>
            Product Store
            <FaPlusCircle />
          </Link>
        </Text>
        <HStack spacing={5} alignItems={"center"}>
          <Link to={"/create"}>
            <Button mr={2}>
              <PlusSquareIcon />
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <IoMoon /> : <LuSun size="20" />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default NavBar;
