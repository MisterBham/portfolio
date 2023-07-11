import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import customTheme from './utils/theme';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(
    <ChakraProvider theme={customTheme}>
        <App />
    </ChakraProvider> 

);
