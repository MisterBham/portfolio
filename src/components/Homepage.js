import React from 'react';
import 'animate.css';
import { Container, Box, Center, Text, List, ListItem, ListIcon } from '@chakra-ui/react';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiExpress, SiSequelize, SiMongodb, SiMongoose, SiJavascript, SiJquery } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';

export default function Homepage() {
  return (
    <Container 
    maxW="90%" 
    my="7"
    // To account for fixed footer, 10px above
    pb={{ base: '116px' }}
    >
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
        where I am actively implementing SDWAN and a spine-leaf architecture for
        a large enterprise client out of Houston, TX. The work also has me
        supporting the current network infrastructure, scaled at roughly ~15,000 access
        points, ~600 network switches, ~100 network routers, as well as
        assisting affiliate teams with firewall and server support.
      </Box>
      <Box mb='3'>
        I have found that as my career with technology has grown, I have been
        exposed to numerous different types of command line interfaces, which I found a love for.
      </Box>
      <Box mb='3'>
        I am
        now a student of University of Texas at Austin software engineering
        bootcamp, to further my knowledge and gain entrance into the development
        sector. It is an intensive 12 week program that covers full
        stack development focused on the MERN stack.
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
  );
}
