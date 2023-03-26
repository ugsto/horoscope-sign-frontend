import React from 'react';
import {Header} from './components/header';
import {Popup} from './components/popup';
import {KeyValue} from './components/key-value';
import styled from 'styled-components';
import {type Theme} from './styles/theme';
import {Card} from './components/card';

const PopupKeyValue = styled(KeyValue)`
    color: ${({theme}: {theme: Theme}) => theme.colors.textLight};

    span {
        color: ${({theme}: {theme: Theme}) => theme.colors.key};
    }
`;

export function App() {
	const [fortune, setFortune] = React.useState({
		colorName: 'red',
		number: 1,
		event: 'event',
	});

	return (
		<>
			<Header />
			<Card title='Fortune' />
		</>
	);
}
