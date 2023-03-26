import React from 'react';
import {Header} from './components/header';
import {Popup} from './components/popup';
import {KeyValue} from './components/key-value';
import styled from 'styled-components';
import {type Theme} from './styles/theme';
import {Card} from './components/card';
import {Orb} from './components/orb';

const PopupKeyValue = styled(KeyValue)`
    color: ${({theme}: {theme: Theme}) => theme.colors.textLight};

    span {
        color: ${({theme}: {theme: Theme}) => theme.colors.key};
    }
`;

const PopupOrb = styled(Orb)`
    margin: 0 auto 2rem auto;
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
			<Popup title='Fortuna' width='300px' onClose={() => {}}>
				<PopupOrb width={40} color={fortune.colorName} />
				<PopupKeyValue label='Cor'>{fortune.colorName}</PopupKeyValue>
				<PopupKeyValue label='Número'>{fortune.number}</PopupKeyValue>
				<PopupKeyValue label='Evento'>{fortune.event}</PopupKeyValue>
			</Popup>
			<Card title='Fortune' />
		</>
	);
}
