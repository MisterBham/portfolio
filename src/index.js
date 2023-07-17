import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import { createRoot } from 'react-dom/client';
import brandTheme from './utils/theme';

const root = createRoot(document.getElementById('root'));
root.render(
        <ChakraProvider theme={brandTheme}>
                <App />
        </ChakraProvider>
);




