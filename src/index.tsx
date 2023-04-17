import React, {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {ThemeProvider} from 'styled-components';
import {App} from './app';
import {theme} from './styles/theme';
import '@public/reset.css';
import '@public/style.css';
import './styles/global.scss';

const rootElement = document.querySelector('#root')!;
const root = createRoot(rootElement);

root.render(
	<ThemeProvider theme={theme}>
		<StrictMode>
			<App />
		</StrictMode>
	</ThemeProvider>,
);
