import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, extendTheme, ColorModeScript } from '@chakra-ui/react'
import  myTheme  from './theme/index';
import { Provider } from 'react-redux';
import { store } from './authRedux/store'
import { refStore } from './RefrechRedux/store.js'

const config = {
	initialColorMode: 'light',
	useSystemColorMode: false,
}

const theme = extendTheme({ config })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ChakraProvider theme={myTheme}>
			<Provider store={store}>
				<Provider store={refStore}>
					<ColorModeScript initialColorMode={theme.config.initialColorMode} />

					<App />
				</Provider>
			</Provider>
		</ChakraProvider>
	</React.StrictMode>
);

reportWebVitals();