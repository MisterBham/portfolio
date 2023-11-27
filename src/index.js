import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import App from './App';
import theme from './utils/theme';
// import brandTheme from './utils/theme';

const root = createRoot(document.getElementById('root'));

if (!localStorage.getItem('chakra-ui-color-mode-default')) {
        localStorage.setItem('chakra-ui-color-mode', 'system')
        localStorage.setItem('chakra-ui-color-mode-default', 'set')
        };

root.render(
        <ChakraProvider theme={theme}>
                {/* theme={brandTheme} */}
                <ColorModeScript initialColorMode={'system'} />
                <App />
        </ChakraProvider>
);




