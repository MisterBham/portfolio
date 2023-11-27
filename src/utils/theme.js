import { extendTheme } from "@chakra-ui/react";

// const config = {
//     initialColorMode: 'system',
//     useSystemColorMode: true,
// }

const brandTheme = {       
    // colors: {
        900: "#353535",
        800: "#3C6E71",
        700: "#FFFFFF",
        600: "#D9D9D9",
        500: "#284B63",
    // },
};

const theme = extendTheme({ brandTheme });

export default theme;



// const brandTheme = extendTheme({ colors });

// export default brandTheme;
