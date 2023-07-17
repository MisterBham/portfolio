import React, { useState, useEffect } from "react";
import { Container, Box, Flex, HStack, Image, Stack, Text, Link } from "@chakra-ui/react";
import dude from '../assets/images/dude-wheres-my-show.png';
import fusionfables from '../assets/images/fusion-fables.png';
import pwa from '../assets/images/progressive-web-app.jpg';
import nosql from '../assets/images/nosql.jpg';
import regex from '../assets/images/regex-gist.jpg';
import techblog from '../assets/images/tech-blog-home.png';
import ecombackend from '../assets/images/ecom-backend.jpg';
import expressnotetaker from '../assets/images/express-noteTaker.jpg';

export default function Project(){
  const arrowStyles = {
    cursor: "pointer",
    pos: "absolute",
    top: "50%",
    w: "auto",
    mt: "-22px",
    p: "16px",
    color: 'brandTheme.700',
    fontWeight: "bold",
    fontSize: "18px",
    transition: "0.6s ease",
    borderRadius: "0 3px 3px 0",
    userSelect: "none",
    _hover: {
      opacity: 0.8,
      bg: 'brandTheme.500',
    },
  };

  const slides = [
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

  const [currentSlide, setCurrentSlide] = useState(0);

  const slidesCount = slides.length;

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };
  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };
  const setSlide = (slide: number) => {
    setCurrentSlide(slide);
  };
  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };
  const SLIDES_INTERVAL_TIME = 3500;
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
    <Container maxW={{ base: "100%", md: '85%' }} my="10">
      <Flex
      w={'full'}
      alignItems="center"
      justifyContent="center"
    >
      <Flex w="full" pos="relative" overflow="hidden">
        <Flex h="xl" w="full" {...carouselStyle}>
          {slides.map((slide, sid) => (
            <Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
              <Text
                color="white"
                fontSize="md"
                p="8px 12px"
                pos="absolute"
                top="0"
              >
                {sid + 1} / {slidesCount}
              </Text>
              <Link href={slide.href} target="_blank" rel="noreferrer">
              <Image
                  src={slide.img}
                  alt="carousel image of development projects"
                  boxSize="full"
                  backgroundSize="cover"
                />
              </Link>
              <Stack
                p="8px 12px"
                pos="absolute"
                bottom="24px"
                textAlign="center"
                w="full"
                mb="8"
                color="white"
                alignItems="center"
                justifyContent="center"
              >
                <Box 
                bg='brandTheme.800'
                maxW='max-content'
                p={3}
                borderRadius='20px'
                >
                  <Text color="brandTheme.700" fontSize="2xl">{slide.label}</Text>
                  <Text color="brandTheme.700" fontSize="lg">{slide.description}</Text>
                </Box>
                
              </Stack>
            </Box>
          ))}
        </Flex>
        <Text {...arrowStyles} left="0" onClick={prevSlide}>
          &#10094;
        </Text>
        <Text {...arrowStyles} right="0" onClick={nextSlide}>
          &#10095;
        </Text>
        <HStack justify="center" pos="absolute" bottom="8px" w="full">
          {Array.from({ length: slidesCount }).map((_, slide) => (
            <Box
              key={`dots-${slide}`}
              cursor="pointer"
              boxSize={["7px", null, "15px"]}
              m="0 2px"
              bg={currentSlide === slide ? "brandTheme.800" : "brandTheme.600"}
              rounded="50%"
              display="inline-block"
              transition="background-color 0.6s ease"
              _hover={{ bg: "brandTheme.500" }}
              onClick={() => setSlide(slide)}
            ></Box>
          ))}
        </HStack>
      </Flex>
    </Flex>
    </Container>
  );
};
