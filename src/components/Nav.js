import React from 'react';
import { Link } from 'react-router-dom';
import { chakra, Box, Flex, HStack, Button, useDisclosure, VStack, IconButton, CloseButton, Avatar } from "@chakra-ui/react";
import { AiOutlineMenu, AiFillHome, AiOutlineMail } from "react-icons/ai";
import { BsFillArchiveFill } from "react-icons/bs";
import { GrDocumentPdf } from "react-icons/gr";
import { FaCog } from "react-icons/fa";

export default function App(){
  const mobileNav = useDisclosure();

  return (
    <React.Fragment>
      <chakra.header
        bg='brandTheme.600'
        w="full"
        px={{ base: 2, sm: 4 }}
        py={4}
        shadow="md"
      >
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <HStack display="flex" spacing={2} alignItems="center">
            {/* Start of Mobile Hamburger menu */}
            <Box display={{ base: "inline-flex", md: "none" }}>
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color='brandTheme.900'
                _dark={{ color: 'brandTheme.700' }}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                zIndex={999}
                display={mobileNav.isOpen ? "flex" : "none"}
                flexDirection="column"
                p={2}
                pb={2}
                m={2}
                bg='brandTheme.600'
                spacing={1}
                rounded="sm"
                shadow="sm"
              >
                <CloseButton
                  aria-label="Close menu"
                  justifySelf="self-start"
                  onClick={mobileNav.onClose}
                />
                <Link to={'/'}>
                  <Button 
                  variant="ghost" 
                  leftIcon={<AiFillHome />}
                  _hover={{
                    bg: 'brandTheme.800',
                    color: 'brandTheme.700',
                    }}
                  _dark={{
                      color: 'brandTheme.600',
                      _hover: { color: 'brandTheme.700' },
                  }}
                  >
                    Home
                  </Button>
                </Link>
                <Link to={'/project'}>
                  <Button 
                  variant="ghost" 
                  leftIcon={<BsFillArchiveFill />}
                  _hover={{
                    bg: 'brandTheme.800',
                    color: 'brandTheme.700',
                    }}
                  _dark={{
                      color: 'brandTheme.600',
                      _hover: { color: 'brandTheme.700' },
                  }}
                  >
                    Projects
                  </Button>
                </Link>
                <Link to={'/skills'}>
                  <Button 
                  variant="ghost" 
                  leftIcon={<FaCog />}
                  _hover={{
                    bg: 'brandTheme.800',
                    color: 'brandTheme.700',
                    }}
                  _dark={{
                      color: 'brandTheme.600',
                      _hover: { color: 'brandTheme.700' },
                  }}
                  >
                    Skills
                  </Button>
                </Link>
              </VStack>
            </Box>
        {/* End of Mobile Hamburger menu */}

        {/* Start of desktop nav view */}
            <HStack spacing={3} display={{ base: "none", md: "inline-flex" }}>
            <Avatar
              size="md"
              name="Brian Hamlin"
              src="https://avatars.githubusercontent.com/u/40344045?v=4"
            />
            <Link to={'/'}>
            <Button 
              variant="ghost" 
              leftIcon={<AiFillHome />} 
              size="lg"
              _hover={{
                bg: 'brandTheme.800',
                color: 'brandTheme.700',
                }}
              _dark={{
                  color: 'brandTheme.600',
                  _hover: { color: 'brandTheme.700' },
              }}
              >
                Home
              </Button>
            </Link>
            <Link to={'/project'}>
            <Button 
            variant="ghost" 
            leftIcon={<BsFillArchiveFill />} 
            size="lg"
            _hover={{
              bg: 'brandTheme.800',
              color: 'brandTheme.700',
              }}
            _dark={{
                color: 'brandTheme.600',
                _hover: { color: 'brandTheme.700' },
            }}
            >
                Projects
              </Button>
            </Link>
            <Link to={'/skills'}>
            <Button 
            variant="ghost" 
            leftIcon={<FaCog />} 
            size="lg"
            _hover={{
              bg: 'brandTheme.800',
              color: 'brandTheme.700',
              }}
            _dark={{
                color: 'brandTheme.600',
                _hover: { color: 'brandTheme.700' },
            }}
            >
                Skills
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
              <Button 
                variant="outline" 
                leftIcon={<AiOutlineMail />}
                size="lg"
                mr={4} 
                bg={['brandTheme.700']} 
                color={['brandTheme.900']}
                _hover={{
                  bg: 'brandTheme.800',
                  color: 'brandTheme.700',
                  }}
                _dark={{
                    color: 'brandTheme.600',
                    _hover: { color: 'brandTheme.700' },
                }}
                >
                Contact
              </Button>
            </Link>
            {/* End of desktop nav view */}

          </HStack>
        </Flex>
      </chakra.header>
    </React.Fragment>
  );
};
