import * as React from 'react';
import { Box, Container, Center, Flex, VStack, Text } from '@chakra-ui/react';
import { SiExpress, SiSequelize, SiMongodb, SiMongoose, SiJavascript, SiJquery, SiNetlify, SiPowershell, SiGnubash } from 'react-icons/si';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaSass, FaGitAlt, FaGithub} from 'react-icons/fa';
import { LuFileJson2 } from "react-icons/lu";
import { BsFiletypeXml } from "react-icons/bs";
import { GrMysql, GrHeroku } from 'react-icons/gr';
import { VscTerminalCmd } from "react-icons/vsc";

function Skills() {
  return (
    <>
    <Container maxW="90%" my="7">
      <Center className='animate__animated animate__fadeInUpBig' fontSize='xl'>
        <VStack spacing={3}>
          {/* Dev Skills Section */}
          <VStack spacing={0} align='stretch'>
          <Center fontSize='1.50rem' my='2' as='u'>Development Skills:</Center>
            <Flex>
              Front-end:
              <Box ml='3' mr='1'><FaReact /></Box>
              <Box mr='1'>React.js</Box>
              <Box ml='3' mr='1'><SiJavascript /></Box>
              <Box mr='1'>JavaScript</Box>
              <Box ml='3' mr='1'><FaHtml5 /></Box>
              <Box mr='1'>HTML</Box>
              <Box ml='3' mr='1'><FaCss3Alt /></Box>
              <Box mr='1'>CSS</Box>
              <Box ml='3' mr='1'><FaSass /></Box>
              <Box mr='1'>SASS</Box>
            </Flex>
            <Flex>
              Back-end:
              <Box ml='3' mr='1'><FaNodeJs /></Box>
              <Box mr='1'>Node.js</Box>
              <Box ml='3' mr='1'><SiExpress /></Box>
              <Box mr='1'>Express.js</Box>
            </Flex>
            <Flex>
              Version Control:
              <Box ml='3' mr='1'><FaGitAlt /></Box>
              <Box mr='1'>Git</Box>
            </Flex>
            <Flex>
              API:
              <Box ml='3' mr='1'><LuFileJson2 /></Box>
              <Box mr='1'>REST/JSON</Box>
              <Box ml='3' mr='1'><BsFiletypeXml /></Box>
              <Box mr='1'>SOAP/XML</Box>
            </Flex>
            <Flex>
              Database:
              <Box ml='3' mr='1'><GrMysql /></Box>
              <Box mr='1'>MySQL</Box>
              <Box ml='3' mr='1'><SiMongodb /></Box>
              <Box mr='1'>MongoDB</Box>
            </Flex>
            <Flex>
              ORM:
              <Box ml='3' mr='1'><SiSequelize /></Box>
              <Box mr='1'>Sequelize</Box>
              <Box ml='3' mr='1'><SiMongoose /></Box>
              <Box mr='1'>Mongoose</Box>
            </Flex>
            <Flex>
              Deployment:
              <Box ml='3' mr='1'><GrHeroku /></Box>
              <Box mr='1'>Heroku</Box>
              <Box ml='3' mr='1'><SiNetlify /></Box>
              <Box mr='1'>Netlify</Box>
              <Box ml='3' mr='1'><FaGithub /></Box>
              <Box mr='1'>GitHub Pages</Box>
            </Flex>
            <Flex>
              CLI:
              <Box ml='3' mr='1'><SiGnubash /></Box>
              <Box mr='1'>Bash</Box>
              <Box ml='3' mr='1'><SiPowershell /></Box>
              <Box mr='1'>PowerShell</Box>
              <Box ml='3' mr='1'><VscTerminalCmd /></Box>
              <Box mr='1'>CMD</Box>
            </Flex>
          </VStack>
          {/* Tech Skills Section */}
          <VStack spacing={0} align='stretch'>
          <Center fontSize='1.50rem' my='2' as='u'>Technical Skills:</Center>
          <Flex>
            Operating System:
            <Box ml='3' mr='1'>Windows / MacOS / Linux / iOS</Box>
          </Flex>
          <Flex>
            Environment:
            <VStack align='left' spacing={0}>
              <Box ml='3' mr='1'>Active Directory</Box>
              <Box ml='3' mr='1'>(SCCM) System Center Configuration Manager</Box>
              <Box ml='3' mr='1'>(MDM) Mobile Device Management</Box>
            </VStack>
          </Flex>
          <Flex>
            Application & Server:
            <VStack align='left' spacing={0}>
              <Box ml='3' mr='1'>Microsoft Server 2008 / 2012 (R2 editions)</Box>
              <Box ml='3' mr='1'>Microsoft 365</Box>
              <Box ml='3' mr='1'>Citrix XenApp / XenDesktop</Box>
              <Box ml='3' mr='1'>Cisco DNA Center / Prime</Box>
              <Box ml='3' mr='1'>SharePoint / InfoPath / Nintex</Box>
              <Box ml='3' mr='1'>Skype4Business / Zoom</Box>
            </VStack>
          </Flex>
          <Flex>
            CLI:
              <Box ml='3' mr='1'>CMD / PowerShell / Cisco IOS / Junos OS</Box>
          </Flex>
          <Flex>
            Certifications:
              <Box ml='3' mr='1'>Net+ / A+ / MCP Infrastructure / Dell Warranty Certified</Box>
          </Flex>
          </VStack>
        </VStack>
      </Center>
    </Container>     
    </>
  );
}

export default Skills;