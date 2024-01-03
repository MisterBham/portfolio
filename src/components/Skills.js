import * as React from 'react';
import { Box, Card, Container, Center, Link, VStack, Stack, Wrap, WrapItem, Text } from '@chakra-ui/react';
import { SiExpress, SiSequelize, SiMongodb, SiMongoose, SiJavascript, SiNetlify, SiPowershell, SiGnubash } from 'react-icons/si';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaSass, FaGitAlt, FaGithub} from 'react-icons/fa';
import { LuFileJson2 } from "react-icons/lu";
import { BsFiletypeXml } from "react-icons/bs";
import { GrMysql, GrHeroku } from 'react-icons/gr';
import { VscTerminalCmd } from "react-icons/vsc";

function Skills() {
  return (
    <>
    <Container maxW="95%" pb={{ base: '20%', md: '0' }} overflow='auto'>
      <Center className='animate__animated animate__fadeInUpBig' fontSize={{ base: 'md', md: 'lg' }}>
        <VStack spacing={3}>
          {/* Dev Skills Section */}
          <Stack spacing={0} align='stretch' textAlign={{ base: 'center', md: 'start' }}>
          <Center fontSize='1.50rem' mt='2' mb='1' as='b' textTransform='uppercase' color='brandTheme.800'>Development:</Center>
              <Wrap justify={{base:'center', md:'start'}} spacing='0'>
                <Text as='b' color='brandTheme.800' w={{base:'100%', md:'auto'}} mt={{base:'1', md:'0'}}>Front-end:</Text>
                <WrapItem>
                  <Box ml='3' mr='1'><FaReact /></Box>
                  <Box mr='1'>React</Box>
                </WrapItem>
                <WrapItem>
                  <Box ml='3' mr='1'><SiJavascript /></Box>
                  <Box mr='1'>JavaScript</Box>
                </WrapItem>
                <WrapItem>
                  <Box ml='3' mr='1'><FaHtml5 /></Box>
                  <Box mr='1'>HTML</Box>
                </WrapItem>
                <WrapItem>
                  <Box ml='3' mr='1'><FaCss3Alt /></Box>
                  <Box mr='1'>CSS</Box>
                </WrapItem>
                <WrapItem>
                  <Box ml='3' mr='1'><FaSass /></Box>
                  <Box mr='1'>SASS</Box>
                </WrapItem>
              </Wrap>
            <Wrap justify={{base:'center', md:'start'}} spacing='0'>
              <Text as='b' color='brandTheme.800' w={{base:'100%', md:'auto'}} textAlign={{base:'center', md:'auto'}} mt={{base:'1', md:'0'}}>Back-end:</Text>
              <WrapItem>
                <Box ml='3' mr='1'><FaNodeJs /></Box>
                <Box mr='1'>Node.js</Box>
              </WrapItem>
              <WrapItem>
                <Box ml='3' mr='1'><SiExpress /></Box>
                <Box mr='1'>Express.js</Box>
              </WrapItem>
            </Wrap>
            <Wrap justify={{base:'center', md:'start'}} spacing='0'>
              <Text as='b' color='brandTheme.800' w={{base:'100%', md:'auto'}} textAlign={{base:'center', md:'auto'}} mt={{base:'1', md:'0'}}>Version Control:</Text>
              <WrapItem>
                <Box ml='3' mr='1'><FaGitAlt /></Box>
                <Box mr='1'>Git</Box>
              </WrapItem>
            </Wrap>
            <Wrap justify={{base:'center', md:'start'}} spacing='0'>
              <Text as='b' color='brandTheme.800' w={{base:'100%', md:'auto'}} textAlign={{base:'center', md:'auto'}} mt={{base:'1', md:'0'}}>API:</Text>
              <WrapItem>
                <Box ml='3' mr='1'><LuFileJson2 /></Box>
                <Box mr='1'>REST/JSON</Box>
              </WrapItem>
              <WrapItem>
                <Box ml='3' mr='1'><BsFiletypeXml /></Box>
                <Box mr='1'>SOAP/XML</Box>
              </WrapItem>
            </Wrap>
            <Wrap justify={{base:'center', md:'start'}} spacing='0'>
              <Text as='b' color='brandTheme.800' w={{base:'100%', md:'auto'}} textAlign={{base:'center', md:'auto'}} mt={{base:'1', md:'0'}}>Database:</Text>
              <WrapItem>
                <Box ml='3' mr='1'><GrMysql /></Box>
                <Box mr='1'>MySQL</Box>
              </WrapItem>
              <WrapItem>
                <Box ml='3' mr='1'><SiMongodb /></Box>
                <Box mr='1'>MongoDB</Box>
              </WrapItem>
            </Wrap>
            <Wrap justify={{base:'center', md:'start'}} spacing='0'>
              <Text as='b' color='brandTheme.800' w={{base:'100%', md:'auto'}} textAlign={{base:'center', md:'auto'}} mt={{base:'1', md:'0'}}>ORM:</Text>
              <WrapItem>
                <Box ml='3' mr='1'><SiSequelize /></Box>
                <Box mr='1'>Sequelize</Box>
              </WrapItem>
              <WrapItem>
                <Box ml='3' mr='1'><SiMongoose /></Box>
                <Box mr='1'>Mongoose</Box>
              </WrapItem>
            </Wrap>
            <Wrap justify={{base:'center', md:'start'}} spacing='0'>
              <Text as='b' color='brandTheme.800' w={{base:'100%', md:'auto'}} textAlign={{base:'center', md:'auto'}} mt={{base:'1', md:'0'}}>Deployment:</Text>
              <WrapItem>
                <Box ml='3' mr='1'><GrHeroku /></Box>
                <Box mr='1'>Heroku</Box>
              </WrapItem>
              <WrapItem>
                <Box ml='3' mr='1'><SiNetlify /></Box>
                <Box mr='1'>Netlify</Box>
              </WrapItem>
              <WrapItem>
                <Box ml='3' mr='1'><FaGithub /></Box>
                <Box mr='1'>GitHub Pages</Box>
              </WrapItem>
            </Wrap>
            <Wrap justify={{base:'center', md:'start'}} spacing='0'>
              <Text as='b' color='brandTheme.800' w={{base:'100%', md:'auto'}} textAlign={{base:'center', md:'auto'}} mt={{base:'1', md:'0'}}>CLI:</Text>
              <WrapItem>
                <Box ml='3' mr='1'><SiGnubash /></Box>
                <Box mr='1'>Bash</Box>
              </WrapItem>
              <WrapItem>
                <Box ml='3' mr='1'><SiPowershell /></Box>
                <Box mr='1'>PowerShell</Box>
              </WrapItem>
              <WrapItem>
                <Box ml='3' mr='1'><VscTerminalCmd /></Box>
                <Box mr='1'>CMD</Box>
              </WrapItem>
            </Wrap>
          </Stack>
          {/* Tech Skills Section */}
          <Stack spacing={0} align='stretch' textAlign={{base:'center', md:'start'}}>
          <Center fontSize='1.50rem' mt='2' mb='1' as='b' textTransform='uppercase' color='brandTheme.800'>Technical:</Center>
          <Wrap justify={{base:'center', md:'start'}} spacing='0'>
            <Text as='b' color='brandTheme.800' w={{base:'100%', md:'auto'}} textAlign={{base:'center', md:'start'}} mt={{base:'1', md:'0'}}>Operating System:</Text>
            <Box ml={{base:'0', md:'3'}} mr='1'>Windows / MacOS / Linux / iOS</Box>
          </Wrap>
          <Wrap justify={{base:'center', md:'start'}} spacing='0'>
            <Text as='b' color='brandTheme.800' w={{base:'100%', md:'auto'}} textAlign={{base:'center', md:'start'}} mt={{base:'1', md:'0'}}>Environment:</Text>
            <VStack align='left' spacing={0}>
              <Box ml={{base:'0', md:'3'}} mr='1'>Active Directory</Box>
              <Box ml={{base:'0', md:'3'}} mr='1'>(SCCM) Microsoft System Center Configuration Manager</Box>
              <Box ml={{base:'0', md:'3'}} mr='1'>(MDM) Mobile Device Management</Box>
            </VStack>
          </Wrap>
          <Wrap justify={{base:'center', md:'start'}} spacing='0'>
            <Text as='b' color='brandTheme.800' w={{base:'100%', md:'auto'}} textAlign={{base:'center', md:'start'}} mt={{base:'1', md:'0'}}>Application & Server:</Text>
            <VStack align='left' spacing={0}>
              <Box ml={{base:'0', md:'3'}} mr='1'>Microsoft Server 2008 / 2012 (R2 editions)</Box>
              <Box ml={{base:'0', md:'3'}} mr='1'>Microsoft 365</Box>
              <Box ml={{base:'0', md:'3'}} mr='1'>Citrix XenApp / XenDesktop</Box>
              <Box ml={{base:'0', md:'3'}} mr='1'>Cisco DNA Center / Prime</Box>
              <Box ml={{base:'0', md:'3'}} mr='1'>SharePoint / InfoPath / Nintex</Box>
              <Box ml={{base:'0', md:'3'}} mr='1'>Skype4Business / Zoom</Box>
            </VStack>
          </Wrap>
          <Wrap justify={{base:'center', md:'start'}} spacing='0'>
            <Text as='b' color='brandTheme.800' w={{base:'100%', md:'auto'}} textAlign={{base:'center', md:'start'}} mt={{base:'1', md:'0'}}>CLI:</Text>
              <Box ml={{base:'0', md:'3'}} mr='1'>CMD / PowerShell / Cisco IOS / Junos OS</Box>
          </Wrap>
          <Wrap justify={{base:'center', md:'start'}} spacing='0'>
            <Text as='b' color='brandTheme.800' w={{base:'100%', md:'auto'}} textAlign={{base:'center', md:'start'}} mt={{base:'1', md:'0'}}>Certifications:</Text>
              <Box ml={{base:'0', md:'3'}} mr='1'>Net+ / A+ / MCP Infrastructure / Dell Warranty Certified</Box>
          </Wrap>
          </Stack>
          <Card 
          textAlign='center' 
          variant='outline' 
          p='3' 
          m='2' 
          bg='rgba(60, 110, 113, 0.2)' 
          color='brandTheme.800'
          _dark={{ 
            bg:'rgba(85, 85, 85, 0.2)',
            color: 'brandTheme.600'
          }}
          >
            <Text as='b'>Resume available upon request, simply use the embedded <Link href={'#/contact'}>Contact</Link> form to reach me!</Text>
          </Card>
        </VStack>
      </Center>
    </Container>     
    </>
  );
}

export default Skills;