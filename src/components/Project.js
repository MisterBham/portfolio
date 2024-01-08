import React from "react";
import { Box, Center, Image, Text, Link, Button, Card, CardBody, Heading } from "@chakra-ui/react";
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
  const projects = [
    {
      img: schedaddy,
      label: "Schedaddy",
      alt: "Schedaddy screenshot",
      description: "CRM style application for streamlining company scheduling.",
      stack: "MERN",
      source: "https://github.com/cmcnamara15/Schedaddy",
      app: "https://schedaddy-0dffdc6ab2cd.herokuapp.com/",
    },
    {
      img: fusionfables,
      label: "Fusion Fables",
      alt: "Fusion Fables screenshot",
      description: 'Application styled as a writing enthusiast blog. "To harness the fusion of collaboration and community"',
      stack: "JavaScript / Handlebars",
      source: "https://github.com/HunterHester/fusion-fables",
      app: "http://www.fusionfables.com/",
    },
    {
      img: dude,
      label: "Dude, where's my show?",
      alt: "Dude, where's my show screenshot",
      description: 'Client-side web application for searching streaming availability and information of movies and tv shows.',
      stack: "JavaScript / Materialize",
      source: "https://github.com/MisterBham/Dude-Wheres-My-Show",
      app: "https://eeast.github.io/Dude-Wheres-My-Show/",
    },
    {
      img: pwa,
      label: "Progressive Web App",
      alt: "JATE text editor screenshot",
      description: 'PWA concept expressed as an offline text editor',
      stack: "JavaScript / ExpressJS",
      source: "https://github.com/MisterBham/PWA-texteditor",
      app: "https://jate-texteditor-8463ed25bde3.herokuapp.com/",
    },
    {
      img: techblog,
      label: "MVC Tech Blog",
      alt: "MVC Tech Blog screenshot",
      description: 'Blogging application paired with MySQL back-end',
      stack: "Handlebars / NodeJS / ExpressJS / MySQL / Sequelize",
      source: "https://github.com/MisterBham/tech-blog",
      app: "https://technologyblog.herokuapp.com/",
    },
    {
      img: nosql,
      label: "Social Network API",
      alt: "Social network API screenshot",
      description: 'Back-end MongoDB API setup for a social network type front-end',
      stack: "NodeJS / ExpressJS / MongoDB / Mongoose",
      source: "https://github.com/MisterBham/socialnetwork-api",
    },
    {
      img: ecombackend,
      label: "E-commerce Backend",
      alt: "Ecom backend screenshot",
      description: 'Back-end MySQL API setup for an e-commerce type front-end',
      stack: "NodeJS / ExpressJS / MySQL / Sequelize",
      source: "https://github.com/MisterBham/ecom-backend",
    },
    {
      img: regex,
      label: "RegEx Gist",
      alt: "RegEx Gist article screenshot",
      description:
        "Gist article covering RegEx",
        stack: "RegEx",
      source: "https://gist.github.com/MisterBham/5fe51b1d14b839bebd82a1fadb62ee37",
    },
    {
      img: expressnotetaker,
      label: "Express Note Taker",
      alt: "Express note taker screenshot",
      description: 'Note taking application',
      stack: "JavaScript / ExpressJS",
      source: "https://github.com/MisterBham/express-noteTaker",
      app: "https://xpress-notetaker.herokuapp.com/",
    },
  ];

  return (
    <Box 
      fontSize={{base:'md', md:'lg'}}
      width='full'
      px='5%'
      pb='1%'
    >
      {projects.map((project, index) => (
        <Card
          key={project.label}
          direction={{ base: 'column', md: 'row' }}
          overflow='hidden'
          variant='outline'
          bg='rgba(60, 110, 113, 0.15)'
          mt='2rem'
        >

        <Image
          objectFit='cover'
          width={{ base: '100%', md: '35%' }}
          src={project.img}
          alt={project.alt}
        />

        <Center width={{ base: '100%', md: '65%' }} textAlign='center'>
          <CardBody paddingBottom='1' verticalAlign='center'>
            <Heading 
              size='md' 
              color='brandTheme.500' 
              as='u'
              _dark={{
                color: 'brandTheme.700',
              }}>
              {project.label}
            </Heading>
            <Text pt='1rem'>
              {project.description}
            </Text>
            <Text>
            {project.stack}
            </Text>
            <Link href={project.source} target='_blank' isExternal>
              <Button variant='outline' color='brandTheme.700' bg='brandTheme.500' _hover={{bg: 'brandTheme.800', color: 'brandTheme.700'}} margin='1'>
                {`<Source />`}
              </Button>
            </Link>
            {project.app ? (        
              <Link href={project.app} target='_blank' isExternal>
              <Button variant='outline' color='brandTheme.700' bg='brandTheme.500' _hover={{bg: 'brandTheme.800', color: 'brandTheme.700'}} margin='1'>
                Application
              </Button>
              </Link>
              ) : ('')
            }
          </CardBody>
        </Center>
    </Card>
    ))}
    </Box>
  );
};
