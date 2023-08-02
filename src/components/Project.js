import React from "react";
import { 
  Box,
  Center,
  Image, 
  Text, 
  Link,
  Button,
  Card, 
  CardBody, 
  Heading,
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
      alt: "Schedaddy screenshot",
      description: "CRM style application for streamlining company scheduling.",
      source: "https://github.com/cmcnamara15/Schedaddy",
      app: "https://schedaddy-0dffdc6ab2cd.herokuapp.com/",
    },
    {
      img: fusionfables,
      label: "Fusion Fables",
      alt: "Fusion Fables screenshot",
      description: "JavaScript / Handlebars",
      source: "https://github.com/HunterHester/fusion-fables",
      app: "http://www.fusionfables.com/",
    },
    {
      img: dude,
      label: "Dude, where's my show?",
      alt: "Dude, where's my show screenshot",
      description: "JavaScript / Materialize",
      source: "https://github.com/MisterBham/Dude-Wheres-My-Show",
      app: "https://eeast.github.io/Dude-Wheres-My-Show/",
    },
    {
      img: pwa,
      label: "Progressive Web App",
      alt: "JATE text editor screenshot",
      description: "JavaScript / ExpressJS",
      source: "https://github.com/MisterBham/PWA-texteditor",
      app: "https://jate-texteditor-8463ed25bde3.herokuapp.com/",
    },
    {
      img: nosql,
      label: "Social Network API",
      alt: "Social network API screenshot",
      description: "NodeJS / ExpressJS / MongoDB / Mongoose",
      source: "https://github.com/MisterBham/socialnetwork-api",
    },
    {
      img: regex,
      label: "RegEx Gist",
      alt: "RegEx Gist article screenshot",
      description:
        "Gist article covering RegEx",
      source: "https://gist.github.com/MisterBham/5fe51b1d14b839bebd82a1fadb62ee37",
    },
    {
      img: techblog,
      label: "MVC Tech Blog",
      alt: "MVC Tech Blog screenshot",
      description: "NodeJS / ExpressJS / mySQL / Sequelize",
      source: "https://github.com/MisterBham/tech-blog",
      app: "https://technologyblog.herokuapp.com/",
    },
    {
      img: ecombackend,
      label: "E-commerce Backend",
      alt: "Ecom backend screenshot",
      description: "NodeJS / ExpressJS / mySQL / Sequelize",
      source: "https://github.com/MisterBham/ecom-backend",
    },
    {
      img: expressnotetaker,
      label: "Express Note Taker",
      alt: "Express note taker screenshot",
      description: "JavaScript / ExpressJS",
      source: "https://github.com/MisterBham/express-noteTaker",
      app: "https://xpress-notetaker.herokuapp.com/",
    },
  ];

  return (
    <>
    <Box pb={{ base: '30%', md: '9%' }}>
    {slides.map((slide) => (
      <Card
      direction={{ base: 'column', md: 'row' }}
      overflow='hidden'
      variant='outline'
      pt={{ base: '2rem', md: '5rem' }}
      px={{ base: '1rem', md: '4rem' }}
      width='full'
    >
      <Image
        objectFit='cover'
        width={{ base: '100%', md: '35%' }}
        src={slide.img}
        alt='Schedaddy website screenshot' 
      />

      <Center 
        width={{ base: '100%', md: '65%' }}
        textAlign='center'
        >
        <CardBody paddingBottom='1' verticalAlign='center'>
          <Heading size='md'>{slide.label}</Heading>

          <Text py='2'>
            {slide.description}
          </Text>
          <Link 
          href={slide.source} 
          target='_blank' 
          isExternal
          >
            <Button 
              variant='outline' 
              color='brandTheme.700' 
              bg='brandTheme.500' 
              _hover={{
                bg: 'brandTheme.800',
                color: 'brandTheme.700',
                }}
              margin='1'
            >
              {`\<Source /\>`}
            </Button>
          </Link>
          <Link
            href={slide.app}
            target='_blank' 
            isExternal
          >
            <Button 
              variant='outline' 
              color='brandTheme.700' 
              bg='brandTheme.500' 
              _hover={{
                bg: 'brandTheme.800',
                color: 'brandTheme.700',
                }}
              margin='1'
            >
              Application
            </Button>
          </Link>
        </CardBody>
      </Center>
    </Card>
   ))}

   </Box>
      </>
  );
};
