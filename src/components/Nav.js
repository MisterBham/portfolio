import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, HStack, Button, useDisclosure, VStack, IconButton, CloseButton, Avatar, useColorMode, Heading } from "@chakra-ui/react";
import { AiOutlineMenu, AiFillHome, AiOutlineMail } from "react-icons/ai";
import { BsFillArchiveFill } from "react-icons/bs";
import { FaCog } from "react-icons/fa";
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

export default function App(){
  const mobileNav = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <React.Fragment>
      <Heading
        bg='brandTheme.600'
        w='full'
        px='2vw'
        display='flex'
        justifyContent='space-between'
        shadow="md"
        height='7.5vh'
        _dark={{
          bg: 'brandTheme.900'
      }}
      >

        {/* Mobile View */}
        <Flex 
          alignContent='center' 
          flexWrap='wrap'
          display={{ base: 'inline-flex', md: 'none' }}
          >
          <IconButton
            display={mobileNav.isOpen ? 'none' : 'flex'}
            aria-label="Open menu"
            fontSize='1.25rem'
            color='brandTheme.900'
            _dark={{ color: 'brandTheme.700' }}
            variant="ghost"
            icon={<AiOutlineMenu />}
            onClick={mobileNav.onOpen}
          />
          <VStack 
            display={mobileNav.isOpen ? "flex" : "none"}
            bg='brandTheme.600'
            _dark={{ bg: 'brandTheme.900' }}
            pos="absolute"
            top={1}
            left={0}
            right={0}
            zIndex={999}
            spacing='0'
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
              onClick={mobileNav.onClose}
              _dark={{
                  color: 'brandTheme.600',
              }}
              >
                Home
              </Button>
            </Link>
            <Link to={'/project'}>
              <Button 
              variant="ghost" 
              leftIcon={<BsFillArchiveFill />}
              onClick={mobileNav.onClose}
              _dark={{
                  color: 'brandTheme.600',
              }}
              >
                Projects
              </Button>
            </Link>
            <Link to={'/skills'}>
              <Button 
              variant="ghost" 
              leftIcon={<FaCog />}
              onClick={mobileNav.onClose}
              _dark={{
                  color: 'brandTheme.600',
              }}
              >
                Skills
              </Button>
            </Link>
          </VStack>
          
        </Flex>
        
        {/* Modular Desktop View */}
        <HStack 
          display={{base: "none", md: "inline-flex"}}>
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
              color: 'brandTheme.700',
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
              color: 'brandTheme.700',
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
              color: 'brandTheme.700',
          }}
          >
              Skills
            </Button>
          </Link>
        </HStack>

        {/* Exists in both views */}
        <HStack>
          <Button
            size='lg'
            onClick={() => toggleColorMode()}
            >
            {colorMode === 'dark' ? <SunIcon color='orange.200'/> : <MoonIcon color='blue.600'/>}
          </Button>
          <Link to={'/contact'}>
              <Button 
                variant="outline" 
                leftIcon={<AiOutlineMail />}
                size="lg"
                bg='brandTheme.700' 
                color={['brandTheme.900']}
                _hover={{
                  bg: 'brandTheme.800',
                  color: 'brandTheme.700',
                  }}
                _dark={{
                    bg: 'brandTheme.600',
                    color: 'brandTheme.900',
                    _hover: { 
                      bg: 'brandTheme.800',
                      color: 'brandTheme.700' },
                }}
                >
                Contact
              </Button>
            </Link>
        </HStack>
        
      </Heading>
    </React.Fragment>
  );
};
