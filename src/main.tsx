/* eslint-disable import/no-unassigned-import */
import '@fontsource/poppins';
import '@fontsource/libre-baskerville';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {ChakraProvider} from '@chakra-ui/react';
import theme from './theme';
import App from './app';

ReactDOM.createRoot(document.querySelector('#root')!).render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<App />
		</ChakraProvider>
	</React.StrictMode>,
);
