import React from "react";
import { chakra, Flex, Icon, Text } from "@chakra-ui/react";

export default function Footer() {
    return (
        <Flex
        w="full"
        as="footer"
        alignItems="center"
        justify="space-between"
        px={{ base:'5vw', md:'2vw' }}
        height='7.5vh'
        left={0}
        bottom={0}
        position={"fixed"}
        bg='brandTheme.600'
        _dark={{
            bg: 'brandTheme.900'
        }}
        >
            <Text
                fontSize="xl"
                fontWeight="bold"
                color='brandTheme.900'
                _dark={{
                    color: 'brandTheme.600',
                }}
            >
                Brian Hamlin
            </Text>

            <Flex gap={{ base: '1rem', sm: '2rem' }}>
            {/* GitHub Logo */}
            <chakra.a
                href="https://github.com/MisterBham"
                target="_blank"
                aria-label="Github"
                color='brandTheme.900'
                _hover={{
                    color: 'brandTheme.800',
                }}
                _dark={{ 
                    color: 'brandTheme.600', 
                    _hover: { color: 'brandTheme.800' } 
                }}
                >
                <Icon boxSize="7" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                </Icon>
            </chakra.a>

            {/* LinkedIn Logo */}
            <chakra.a
            href="https://www.linkedin.com/in/brianhamlin"
            target="_blank"
            aria-label="LinkedIn"
            color='brandTheme.900'
            _hover={{
                color: 'brandTheme.800',
            }}
            _dark={{ 
                color: 'brandTheme.600', 
                _hover: { color: 'brandTheme.800' } }}
            >
            <Icon boxSize="7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"></path>
            </Icon>
            </chakra.a>

            {/* Twitter Logo */}
            <chakra.a
            href="https://twitter.com/misterbham"
            target="_blank"
            aria-label="Twitter"
            color='brandTheme.900'
            _hover={{
                color: 'brandTheme.800',
            }}
            _dark={{ 
                color: 'brandTheme.600', 
                _hover: { color: 'brandTheme.800' } 
            }}
            >
            <Icon boxSize="7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path>
            </Icon>
            </chakra.a>

            </Flex>
        </Flex>
    );
}
