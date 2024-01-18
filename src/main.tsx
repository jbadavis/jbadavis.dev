import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/libre-baskerville';
import '@fontsource/poppins';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import theme from './theme';

ReactDOM.createRoot(document.querySelector('#root') as Element).render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<App />
		</ChakraProvider>
	</React.StrictMode>,
);
