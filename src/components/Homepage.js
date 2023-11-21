import React from 'react';
import { Container, Box, Center, Text, List, ListItem, ListIcon, Flex } from '@chakra-ui/react';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiExpress, SiSequelize, SiMongodb, SiMongoose, SiJavascript, SiJquery } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'animate.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '../components/Homepage.css';

import image1 from '../assets/images/personal/new/IMG_3135.jpg';
import image2 from '../assets/images/personal/new/IMG_1854.jpg';
import image3 from '../assets/images/personal/new/IMG_0563.jpg';
import image4 from '../assets/images/personal/new/CJNY8798.jpg';
import image5 from '../assets/images/personal/new/UZTD2692.jpg';
import image6 from '../assets/images/personal/new/IMG_0526.jpg';
import image7 from '../assets/images/personal/new/IMG_3610.jpg';

export default function Homepage() {
  return (
    <>
    <Container 
    maxW="90%" 
    my="7"
    pb={{base:'25%', sm:'10%'}}
    >
<Flex 
  w='full'
  h='350px'>
<Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={image1} alt='Brian and Family' />
        </SwiperSlide>
        <SwiperSlide>
        <img src={image2} alt='Brian and Family' />
        </SwiperSlide>
        <SwiperSlide>
        <img src={image3} alt='Brian and Family' />
        </SwiperSlide>
        <SwiperSlide>
        <img src={image4} alt='Brian and Family' />
        </SwiperSlide>
        <SwiperSlide>
        <img src={image5} alt='Brian and Family' />
        </SwiperSlide>
        <SwiperSlide>
        <img src={image6} alt='Brian and Family' />
        </SwiperSlide>
        <SwiperSlide>
        <img src={image7} alt='Brian and Family' />
        </SwiperSlide>
      </Swiper>
</Flex>

      <Center>
        <Text className="animate__animated animate__wobble" fontSize='4xl' my='4'>
          A little bit about me...
        </Text>
      </Center>
      <Box mb='3'>
        I'm a tech enthusiast with a passion for all things technology. I've built several computers, developed web applications, and even mined a fair bit of cryptocurrency. With over 8 years of experience in the tech industry, I've worn many hats, but currently working as a Network Infrastructure Technician. Focusing on implementation of SD-WAN functionality and the transition to a spine-leaf network architecture. Additionally, I provide comprehensive support for the existing campus infrastructure, scaled at roughly ~5,000 access points, ~225 network switches, and ~20 network routers.
      </Box>
      <Box mb='3'> 
        As my career in technology has progressed, I've encountered numerous command line interfaces and discovered a genuine fascination for them, prompting me to delve deeper into the realm of software development. Amplifying multiple years of self-guided learning, I'm excited to share that I have recently graduated the University of Texas at Austin software engineering bootcamp, where I explored the intricacies of the MERN stack and gained comprehensive insights into full-stack development. I am immensely excited to start contributing to enterprise applications and create future technical solutions!
      </Box>
    </Container>
    </>
  );
}
