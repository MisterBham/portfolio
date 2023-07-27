import React, { useState, useEffect } from "react";
import { 
  Container, 
  Box, 
  Flex, 
  HStack, 
  Image, 
  Stack, 
  Text, 
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Card, 
  CardHeader, 
  CardBody, 
  CardFooter,
  Heading,
  Divider,
  ButtonGroup,
} from "@chakra-ui/react";

import dude from '../assets/images/dude-wheres-my-show.png';
import fusionfables from '../assets/images/fusion-fables.png';
import schedaddy from '../assets/images/schedaddy.jpg';
import pwa from '../assets/images/progressive-web-app.jpg';
import nosql from '../assets/images/nosql.jpg';
import regex from '../assets/images/regex-gist.jpg';
import techblog from '../assets/images/tech-blog-home.png';
import ecombackend from '../assets/images/ecom-backend.jpg';
import expressnotetaker from '../assets/images/express-noteTaker.jpg';

export default function Project(){
  const slides = [
    {
      img: schedaddy,
      label: "Schedaddy",
      description: "MERN stack",
      href: "https://github.com/cmcnamara15/Schedaddy",
    },
    {
      img: fusionfables,
      label: "Fusion Fables",
      description: "JavaScript / Handlebars",
      href: "https://github.com/HunterHester/fusion-fables",
    },
    {
      img: dude,
      label: "Dude, where's my show?",
      description: "JavaScript / Materialize",
      href: "https://eeast.github.io/Dude-Wheres-My-Show/",
    },
    {
      img: pwa,
      label: "Progressive Web App",
      description: "JavaScript / ExpressJS",
      href: "https://github.com/MisterBham/PWA-texteditor",
    },
    {
      img: nosql,
      label: "Social Network API",
      description: "NodeJS / ExpressJS / MongoDB / Mongoose",
      href: "https://github.com/MisterBham/socialnetwork-api",
    },
    {
      img: regex,
      label: "RegEx Gist",
      description:
        "Gist article covering RegEx",
      href: "https://gist.github.com/MisterBham/5fe51b1d14b839bebd82a1fadb62ee37",
    },
    {
      img: techblog,
      label: "MVC Tech Blog",
      description: "NodeJS / ExpressJS / mySQL / Sequelize",
      href: "https://github.com/MisterBham/tech-blog",
    },
    {
      img: ecombackend,
      label: "E-commerce Backend",
      description: "NodeJS / ExpressJS / mySQL / Sequelize",
      href: "https://github.com/MisterBham/ecom-backend",
    },
    {
      img: expressnotetaker,
      label: "Express Note Taker",
      description: "JavaScript / ExpressJS",
      href: "https://github.com/MisterBham/express-noteTaker",
    },
  ];

  const BlurredBg = () => (
    <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(10px) hue-rotate(90deg)'
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = React.useState(<BlurredBg />)

  return (
    <>
      <Card variant='outline'>
        <CardBody>
        <Box boxSize='sm'>
            <Image 
            src={schedaddy} 
            alt='Schedaddy Project'
            cursor='pointer'
            fit='contain'   
            onClick={() => {
                setOverlay(<BlurredBg />)
                onOpen()
              }} 
              />
        </Box>
        <Divider />

            <Modal isCentered isOpen={isOpen} onClose={onClose}>
              {overlay}
              <ModalContent>
                <ModalHeader>Schedaddy</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text>Custom backdrop filters!</Text>
                </ModalBody>
                <ModalFooter>
                  <Button onClick={onClose}>Close</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
        </CardBody>
        <CardFooter>
          Schedaddy - A full-stack CRM application to manage a companies employees, time schedules, and roles.
        </CardFooter>
      </Card>
  

      </>
  );
};
