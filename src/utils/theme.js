import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

const colors = {       
    brandTheme: {
        900: "#353535",
        800: "#3C6E71",
        700: "#FFFFFF",
        600: "#D9D9D9",
        500: "#284B63",
    },
};

// export const customTheme = extendTheme(
//     withDefaultColorScheme({
//         colorScheme: '#FFFFFF',
//         components: ['Button'],
//     }),
// )

// const config = {
//     initialColorMode: 'dark',
//     useSystemColorMode: false,
// }

const brandTheme = extendTheme({ colors });

export default brandTheme;
