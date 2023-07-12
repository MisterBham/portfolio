import React, { useState, useEffect } from "react";
import { Container, Box, Flex, HStack, Image, Stack, Text, Link } from "@chakra-ui/react";
import dude from '../images/dude-wheres-my-show.png';
import fusionfables from '../images/fusion-fables.png';
import pwa from '../images/progressive-web-app.jpg';
import nosql from '../images/nosql.jpg';
import regex from '../images/regex-gist.jpg';
import techblog from '../images/tech-blog-home.png';
import ecombackend from '../images/ecom-backend.jpg';

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
      img: dude,
      label: "Dude, where's my show?",
      description: "JavaScript / Materialize",
      href: "https://eeast.github.io/Dude-Wheres-My-Show/",
    },
    {
      img: fusionfables,
      label: "Fusion Fables",
      description: "JavaScript / Handlebars",
      href: "http://www.fusionfables.com/",
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
      href: "#",
    },
    {
      img: regex,
      label: "RegEx Gist",
      description:
        "Gist article covering RegEx",
      href: "#",
    },
    {
      img: techblog,
      label: "MVC Tech Blog",
      description: "NodeJS / ExpressJS / mySQL / Sequelize",
      href: "#",
    },
    {
      img: ecombackend,
      label: "E-commerce Backend",
      description: "NodeJS / ExpressJS / mySQL / Sequelize",
      href: "#",
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
              <Link href={slide.href}>
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
              >
                <Text fontSize="2xl">{slide.label}</Text>
                <Text fontSize="lg">{slide.description}</Text>
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
              bg={currentSlide === slide ? "blackAlpha.800" : "blackAlpha.500"}
              rounded="50%"
              display="inline-block"
              transition="background-color 0.6s ease"
              _hover={{ bg: "blackAlpha.800" }}
              onClick={() => setSlide(slide)}
            ></Box>
          ))}
        </HStack>
      </Flex>
    </Flex>
    </Container>
  );
};
