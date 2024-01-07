import * as React from 'react';
import { Card, Link, VStack, Stack, Wrap, WrapItem, Text, Flex, Heading } from '@chakra-ui/react';
import { SiExpress, SiSequelize, SiMongodb, SiMongoose, SiJavascript, SiNetlify, SiPowershell, SiGnubash } from 'react-icons/si';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaSass, FaGitAlt, FaGithub} from 'react-icons/fa';
import { LuFileJson2 } from "react-icons/lu";
import { BsFiletypeXml } from "react-icons/bs";
import { GrMysql, GrHeroku } from 'react-icons/gr';
import { VscTerminalCmd } from "react-icons/vsc";

function Skills() {
  return (
    <Flex 
      width='full'
      justifyContent='center'
      py='1vw'
      px='5vw'
      >
      <Stack textAlign='center'>
        <Heading 
          size='lg'
          textTransform='uppercase'
          as='u'
          color='brandTheme.800'>
            Development
        </Heading>
        <Wrap justify={{base:'center', md:'start'}}>
          <Heading 
            size='md' 
            pr='1'
            color='brandTheme.800'
            width={{ base: '100%', md: 'inherit' }}
            >
              Front-end:
            </Heading>
            <WrapItem>
              <FaReact /><Text px='1'>React</Text>
            </WrapItem>
            <WrapItem>
              <SiJavascript /><Text px='1'>JavaScript</Text>
            </WrapItem>
            <WrapItem>
              <FaHtml5 /><Text px='1'>HTML</Text>
            </WrapItem>
            <WrapItem>
              <FaCss3Alt /><Text px='1'>CSS</Text>
            </WrapItem>
            <WrapItem>
              <FaSass /><Text px='1'>SASS</Text>
            </WrapItem>
        </Wrap>
        <Wrap justify={{base:'center', md:'start'}}>
          <Heading 
            size='md' 
            pr='1'
            color='brandTheme.800'
            width={{ base: '100%', md: 'inherit' }}
            >
              Back-end:
            </Heading>
            <WrapItem>
              <FaNodeJs /><Text px='1'>Node.js</Text>
            </WrapItem>
            <WrapItem>
              <SiExpress /><Text px='1'>Express.js</Text>
            </WrapItem>
        </Wrap>
        <Wrap justify={{base:'center', md:'start'}}>
          <Heading 
            size='md' 
            pr='1'
            color='brandTheme.800'
            width={{ base: '100%', md: 'inherit' }}
            >
              Version Control:
            </Heading>
            <WrapItem>
              <FaGitAlt /><Text px='1'>Git</Text>
            </WrapItem>
        </Wrap>
        <Wrap justify={{base:'center', md:'start'}}>
          <Heading 
            size='md' 
            pr='1'
            color='brandTheme.800'
            width={{ base: '100%', md: 'inherit' }}
            >
              API:
            </Heading>
            <WrapItem>
              <LuFileJson2 /><Text px='1'>REST/JSON</Text>
            </WrapItem>
            <WrapItem>
              <BsFiletypeXml /><Text px='1'>SOAP/XML</Text>
            </WrapItem>
        </Wrap>
        <Wrap justify={{base:'center', md:'start'}}>
          <Heading 
            size='md' 
            pr='1'
            color='brandTheme.800'
            width={{ base: '100%', md: 'inherit' }}
            >
              Database:
            </Heading>
            <WrapItem>
              <GrMysql /><Text px='1'>MySQL</Text>
            </WrapItem>
            <WrapItem>
              <SiMongodb /><Text px='1'>MongoDB</Text>
            </WrapItem>
        </Wrap>
        <Wrap justify={{base:'center', md:'start'}}>
          <Heading 
            size='md' 
            pr='1'
            color='brandTheme.800'
            width={{ base: '100%', md: 'inherit' }}
            >
              ORM:
            </Heading>
            <WrapItem>
              <SiSequelize /><Text px='1'>Sequelize</Text>
            </WrapItem>
            <WrapItem>
              <SiMongoose /><Text px='1'>Mongoose</Text>
            </WrapItem>
        </Wrap>
        <Wrap justify={{base:'center', md:'start'}}>
          <Heading 
            size='md' 
            pr='1'
            color='brandTheme.800'
            width={{ base: '100%', md: 'inherit' }}
            >
              Hosting
            </Heading>
            <WrapItem>
              <GrHeroku /><Text px='1'>Heroku</Text>
            </WrapItem>
            <WrapItem>
              <SiNetlify /><Text px='1'>Netlify</Text>
            </WrapItem>
            <WrapItem>
              <FaGithub /><Text px='1'>GitHub Pages</Text>
            </WrapItem>
        </Wrap>
        <Wrap justify={{base:'center', md:'start'}}>
          <Heading 
            size='md' 
            pr='1'
            color='brandTheme.800'
            width={{ base: '100%', md: 'inherit' }}
            >
              CLI:
            </Heading>
            <WrapItem>
              <SiGnubash /><Text px='1'>Bash</Text>
            </WrapItem>
            <WrapItem>
              <SiPowershell /><Text px='1'>PowerShell</Text>
            </WrapItem>
            <WrapItem>
              <VscTerminalCmd /><Text px='1'>CMD</Text>
            </WrapItem>
        </Wrap>

        <Heading 
          size='lg'
          textTransform='uppercase' 
          as='u'
          color='brandTheme.800'>
            Technical
        </Heading>
        <Wrap justify={{base:'center', md:'start'}}>
          <Heading 
            size='md' 
            pr='1'
            color='brandTheme.800'
            width={{ base: '100%', md: 'inherit' }}
            >
              Operating System:
            </Heading>
            <Text>Windows / MacOS / Linux / iOS</Text>
        </Wrap>
        <Wrap justify={{base:'center', md:'start'}}>
          <Heading 
            size='md' 
            pr='1'
            color='brandTheme.800'
            width={{ base: '100%', md: 'inherit' }}
            >
              Environment Management:
            </Heading>
            <VStack alignItems={{ base:'inherit', md:'flex-start' }}>
              <Text>Active Directory</Text>
              <Text>(SCCM) Microsoft System Center Configuration Manager</Text>
              <Text>(MDM)Mobile Device Management</Text>
            </VStack>
        </Wrap>
        <Wrap justify={{base:'center', md:'start'}}>
          <Heading 
            size='md' 
            pr='1'
            color='brandTheme.800'
            width={{ base: '100%', md: 'inherit' }}
            >
              Application & Server:
            </Heading>
            <VStack alignItems={{ base:'inherit', md:'flex-start' }}>
              <Text>Microsoft Server 2008, 2012 (R2 editions)</Text>
              <Text>Microsoft 365</Text>
              <Text>Citrix XenApp / XenDesktop</Text>
              <Text>Cisco DNA Center / Prime</Text>
              <Text>SharePoint / InfoPath / Nintex</Text>
              <Text>Skype4Business / Zoom</Text>
            </VStack>
        </Wrap>
        <Wrap justify={{base:'center', md:'start'}}>
          <Heading 
            size='md' 
            pr='1'
            color='brandTheme.800'
            width={{ base: '100%', md: 'inherit' }}
            >
              CLI:
            </Heading>
            <Text>Cisco IOS / Junos OS / CMD / PowerShell</Text>
        </Wrap>
        <Wrap justify={{base:'center', md:'start'}}>
          <Heading 
            size='md' 
            pr='1'
            color='brandTheme.800'
            width={{ base: '100%', md: 'inherit' }}
            >
              Certifications:
            </Heading>
            <Text>CompTIA Net+ / A+ / MCP Infrastructure / Dell Warranty Certified</Text>
        </Wrap>
        <Card
          p='3'
          bg='rgba(60, 110, 113, 0.2)' 
          color='brandTheme.800'
          _dark={{ 
            bg:'rgba(85, 85, 85, 0.2)',
            color: 'brandTheme.600'
          }}
        >
          <Text as='b'>Resume available upon request, simply use the embedded <Link href={'#/contact'}>Contact</Link> form to reach me!</Text>
        </Card>
      </Stack>
    </Flex>     
  );
}

export default Skills;