import { extendTheme } from "@chakra-ui/react";

const theme = {
        config: {
                initialColorMode: 'system',
                useSystemColorMode: true
        },
        colors: {
                brandTheme: {
                        900: "#353535",
                        800: "#3C6E71",
                        700: "#FFFFFF",
                        600: "#D9D9D9",
                        500: "#284B63",
                }
        }
}

export default extendTheme(theme);