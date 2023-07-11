import React from "react";
import { Link } from 'react-router-dom';
import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  VisuallyHidden,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
  Avatar,
} from "@chakra-ui/react";
import {
  AiOutlineMenu,
  AiFillHome,
  AiOutlineMail
} from "react-icons/ai";
import { BsFillArchiveFill } from "react-icons/bs";
import { GrDocumentPdf } from "react-icons/gr";

export default function App(){
  // const bg = useColorModeValue("#FFFFFF", "#353535");
  const mobileNav = useDisclosure();

  return (
    <React.Fragment>
      <chakra.header
        // bg={bg}
        bg={['brandTheme.500']}
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          {/* Start of Mobile Hamburger menu */}
          <HStack display="flex" spacing={3} alignItems="center">
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color="gray.800"
                _dark={{ color: "inherit" }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={4}
                m={2}
                bg={['brandTheme.500']}
                spacing={3}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  justifySelf="self-start"
                  onClick={mobileNav.onClose}
                />
                <Button w="full" variant="ghost" leftIcon={<AiFillHome />}>
                  Home
                </Button>
                <Button
                  w="full"
                  variant="ghost"
                  leftIcon={<BsFillArchiveFill />}
                >
                  Videos
                </Button>
              </VStack>
            </Box>
            <chakra.a
              href="/"
              title="Choc Home Page"
              display="flex"
              alignItems="center"
            >
              <VisuallyHidden>Choc</VisuallyHidden>
            </chakra.a>
        {/* End of Mobile Hamburger menu */}

        {/* Start of desktop nav view */}
            <HStack spacing={3} display={{ base: "none", md: "inline-flex" }}>
            <Avatar
              size="md"
              name="Brian Hamlin"
              src="https://avatars.githubusercontent.com/u/40344045?v=4"
            />
            <Link to={'/'}>
            <Button variant="ghost" leftIcon={<AiFillHome />} size="lg">
                Home
              </Button>
            </Link>
            <Link to={'/project'}>
            <Button variant="ghost" leftIcon={<BsFillArchiveFill />} size="lg">
                Projects
              </Button>
            </Link>
            <Link to={'/resume'}>
            <Button variant="ghost" leftIcon={<GrDocumentPdf />} size="lg">
                Resume
              </Button>
            </Link>
            </HStack>
          </HStack>
          <HStack
            spacing={3}
            display={mobileNav.isOpen ? "none" : "flex"}
            alignItems="center"
          >
            <Link to={'/contact'}>
              <Button variant="outline" leftIcon={<AiOutlineMail />}>
                Contact
              </Button>
            </Link>

            <chakra.a
              p={3}
              color="gray.800"
              _dark={{ color: "inherit" }}
              rounded="sm"
              _hover={{ color: "gray.800", _dark: { color: "gray.600" } }}
            >
            </chakra.a>
            {/* End of desktop nav view */}

          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
};
