import React, { useEffect, useState } from 'react';
import 'animate.css';
import { Container, Box, Center, Text, List, ListItem, ListIcon, Flex, Image, AspectRatio } from '@chakra-ui/react';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiExpress, SiSequelize, SiMongodb, SiMongoose, SiJavascript, SiJquery } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';

import image1 from '../assets/images/personal/IMG_2734.jpg';
import image2 from '../assets/images/personal/IMG_3966.jpg';
import image3 from '../assets/images/personal/IMG_4558.jpg';
import image4 from '../assets/images/personal/IMG_4679.jpg';
import image5 from '../assets/images/personal/IMG_4777.jpg';
import image6 from '../assets/images/personal/IMG_3082.jpg';

export default function Homepage() {
  const slides = [
    {
      img: image1,
    },
    {
      img: image2,
    },
    {
      img: image3,
    },
    {
      img: image4,
    },
    {
      img: image5,
    },
    {
      img: image6,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = slides.length;

  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };

  const SLIDES_INTERVAL_TIME = 3000;
  const ANIMATION_DIRECTION = "right";

  useEffect(() => {
    const prevSlide = () => {
      setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
    };

    const nextSlide = () => {
      setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
    };

    const automatedSlide = setInterval(() => {
      ANIMATION_DIRECTION.toLowerCase() === "left" ? prevSlide() : nextSlide();
    }, SLIDES_INTERVAL_TIME);
    return () => clearInterval(automatedSlide);
  }, [slidesCount]);

  return (
    <>

    <Container 
    maxW="90%" 
    my="7"
    // To account for fixed footer, 10px above
    pb={{base:'25%', sm:'10%'}}
    >
      <Flex
        bg="#edf3f8"
        _dark={{ bg: "#3e3e3e" }}
        p='2.5%'
        alignItems="center"
        justifyContent="center"
        overflow="hidden"
        h='350px'
        w='auto'
      >
        <Flex 
          overflow="hidden" 
          backgroundSize='cover' 
          w='35%'
          h='full'
          >
          <Flex 
            pos="relative" 
            w="full" 
            h='full'
            {...carouselStyle}
            >
            {slides.map((slide, sid) => (
              <Box key={`slide-${sid}`} flex="none" boxSize="full" shadow="md">
                <Image
                  src={slide.img}
                  alt="carousel of personal images"
                  w="full" 
                  h='full'
                />
              </Box>
            ))}
          </Flex>
        </Flex>
      </Flex>



      <Center>
        <Text className="animate__animated animate__wobble" fontSize='4xl' my='4'>
          A little bit about me...
        </Text>
      </Center>
      <Box mb='3'>
        I describe myself as somewhat of a tech enthusiast. I enjoy most
        everything with regard to technology. I've built many computers over the
        years, setup media rooms for family members, installed and configured
        security systems with camera feeds accessible remotely, and have even
        mined a fair bit of cryptocurrency. I regularly stay up with tech news
        and have worked in technology in some shape or form for over 8 years
        now. I am currently employed as a network infrastructure technician
        where I am actively implementing a project surrounding SDWAN and a spine-leaf architecture being deployed throughout a large enterprise environment for a client out of Houston, TX. I also support the existing infrastructure, scaled at roughly ~15,000 access
        points, ~600 network switches, and ~100 network routers.
      </Box>
      <Box mb='3'>
        I have found that as my career with technology has grown, I have been
        exposed to numerous different types of command line interfaces, which I found a love for. After dabbling and learning at my own pace for many years, I am proud to say that I am now a student of University of Texas at Austin software engineering
        bootcamp, to further my current knowledge and gain entrance into the development
        sector. It is an intensive 12 week program that covers full
        stack development focused on the MERN stack.
      </Box>
      <Box mb='3'>
        In my home life, I am married and have two amazingly wonderful kids who keep me on my toes at all times. Lots of late nights and early mornings nowadays, but any free time I have is spent with family. When time permits, I enjoy a good round of golf, a large macchiato, and some southern tex-mex!
      </Box>
      <Center className='animate__animated animate__fadeInUpBig animate__delay-1s' fontSize='2xl'>
        <List>
          <ListItem>
            <ListIcon as={FaReact} />
            React.js
          </ListItem>
          <ListItem>
            <ListIcon as={FaNodeJs} />
            Node.js
          </ListItem>
          <ListItem>
            <ListIcon as={SiExpress} />
            Express.js
          </ListItem>
          <ListItem>
            <ListIcon as={SiJavascript} />
            JavaScript
          </ListItem>
          <ListItem>
            <ListIcon as={SiJquery} />
            jQuery
          </ListItem>
          <ListItem>
            <ListIcon as={GrMysql} />
            MySQL
          </ListItem>
          <ListItem>
            <ListIcon as={SiSequelize} />
            Sequelize
          </ListItem>
          <ListItem>
            <ListIcon as={SiMongodb} />
            MongoDB
          </ListItem>
          <ListItem>
            <ListIcon as={SiMongoose} />
            Mongoose
          </ListItem>
        </List>
      </Center>
    </Container>
    </>
  );
}
