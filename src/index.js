import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { ColorModeScript } from '@chakra-ui/color-mode'
import App from './App';
import theme from './utils/theme';


const root = createRoot(document.getElementById('root'));

root.render(
        <ChakraProvider theme={theme}>
                <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                <App />
        </ChakraProvider>
);




