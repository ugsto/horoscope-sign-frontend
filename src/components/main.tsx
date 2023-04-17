import React, {useState} from 'react';
import {CardHoroscope} from './card-horoscope';
import styled from 'styled-components';
import {Carousel} from './carousel';
import {type Fortune} from '@/services/fortune';
import {Popup} from './popup';
import {KeyValue} from './key-value';
import {Orb} from './orb';
import {Loading} from './loading';
import {type Theme} from '@/styles/theme';
import {BlinkingStars} from './blinking-stars';

export const signs = [
	{
		name: 'Áries',
		planet: 'Marte',
		element: 'Fogo',
		dateRange: '21 de março a 20 de abril',
		characteristics: ['Corajoso', 'Impulsivo', 'Entusiasta', 'Competitivo'],
		compatibility: ['Leão', 'Sagitário', 'Aquário'],
		symbol: '♈',
	},
	{
		name: 'Touro',
		planet: 'Vênus',
		element: 'Terra',
		dateRange: '21 de abril a 20 de maio',
		characteristics: ['Persistente', 'Amável', 'Estável', 'Prático'],
		compatibility: ['Virgem', 'Capricórnio', 'Câncer'],
		symbol: '♉',
	},
	{
		name: 'Gêmeos',
		planet: 'Mercúrio',
		element: 'Ar',
		dateRange: '21 de maio a 20 de junho',
		characteristics: ['Inteligente', 'Versátil', 'Espontâneo', 'Adaptação'],
		compatibility: ['Libra', 'Aquário', 'Virgem'],
		symbol: '♊',
	},
	{
		name: 'Câncer',
		planet: 'Lua',
		element: 'Água',
		dateRange: '21 de junho a 22 de julho',
		characteristics: ['Sensível', 'Emocional', 'Intuitivo', 'Mãe'],
		compatibility: ['Peixes', 'Escorpião', 'Touro'],
		symbol: '♋',
	},
	{
		name: 'Leão',
		planet: 'Sol',
		element: 'Fogo',
		dateRange: '23 de julho a 22 de agosto',
		characteristics: ['Generoso', 'Corajoso', 'Amável', 'Criativo'],
		compatibility: ['Áries', 'Sagitário', 'Libra'],
		symbol: '♌',
	},
	{
		name: 'Virgem',
		planet: 'Mercúrio',
		element: 'Terra',
		dateRange: '23 de agosto a 22 de setembro',
		characteristics: [
			'Inteligente',
			'Prático',
			'Perfeccionista',
			'Analítico',
		],
		compatibility: ['Touro', 'Capricórnio', 'Gêmeos'],
		symbol: '♍',
	},
	{
		name: 'Libra',
		planet: 'Vênus',
		element: 'Ar',
		dateRange: '23 de setembro a 22 de outubro',
		characteristics: ['Equilibrado', 'Justo', 'Benévolo', 'Diplomático'],
		compatibility: ['Gêmeos', 'Aquário', 'Leão'],
		symbol: '♎',
	},
	{
		name: 'Escorpião',
		planet: 'Marte e Plutão',
		element: 'Água',
		dateRange: '23 de outubro a 21 de novembro',
		characteristics: ['Misterioso', 'Intenso', 'Forte', 'Persistente'],
		compatibility: ['Peixes', 'Câncer', 'Sagitário'],
		symbol: '♏',
	},
	{
		name: 'Sagitário',
		planet: 'Júpiter',
		element: 'Fogo',
		dateRange: '22 de novembro a 21 de dezembro',
		characteristics: ['Inteligente', 'Espontâneo', 'Generoso', 'Corajoso'],
		compatibility: ['Áries', 'Leão', 'Escorpião'],
		symbol: '♐',
	},
	{
		name: 'Capricórnio',
		planet: 'Saturno',
		element: 'Terra',
		dateRange: '22 de dezembro a 19 de janeiro',
		characteristics: [
			'Responsável',
			'Persistente',
			'Disciplinado',
			'Ambicioso',
		],
		compatibility: ['Touro', 'Virgem', 'Peixes'],
		symbol: '♑',
	},
	{
		name: 'Aquário',
		planet: 'Urano',
		element: 'Ar',
		dateRange: '20 de janeiro a 18 de fevereiro',
		characteristics: [
			'Independente',
			'Intelectual',
			'Humanitário',
			'Idealista',
		],
		compatibility: ['Gêmeos', 'Libra', 'Áries'],
		symbol: '♒',
	},
	{
		name: 'Peixes',
		planet: 'Netuno',
		element: 'Água',
		dateRange: '19 de fevereiro a 20 de março',
		characteristics: ['Sensível', 'Imaginativo', 'Romântico', 'Sonhador'],
		compatibility: ['Câncer', 'Escorpião', 'Capricórnio'],
		symbol: '♓',
	},
];

const Container = styled.main`
    grid-area: main;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
    height: 100%;
`;

const PopupKeyValue = styled(KeyValue)`
    color: ${({theme}: {theme: Theme}) => theme.colors.textLight};

    & > span {
        color: ${({theme}: {theme: Theme}) => theme.colors.key};
    }
`;

export function Main() {
	const [fortune, setFortune] = useState<Fortune | Error | undefined>();
	const [isLoading, setIsLoading] = useState<boolean>(false);

	let popup;
	if (fortune instanceof Error) {
		popup = (
			<Popup
				title="Error"
				isError={true}
				width={300}
				onClose={() => {
					setFortune(undefined); // eslint-disable-line unicorn/no-useless-undefined
				}}
			>
				<KeyValue label="Motivo">{fortune.message}</KeyValue>
			</Popup>
		);
	} else if (fortune !== undefined) {
		popup = (
			<Popup
				title="Horóscopo"
				isError={false}
				width={300}
				onClose={() => {
					setFortune(undefined); // eslint-disable-line unicorn/no-useless-undefined
				}}
			>
				<Orb
					color={fortune.colorHex}
					width={20}
					style={{margin: '0 auto 1rem auto'}}
				/>

				<PopupKeyValue label="Cor">{fortune.colorName}</PopupKeyValue>
				<PopupKeyValue label="Número">{fortune.number}</PopupKeyValue>
				<PopupKeyValue label="Evento">{fortune.event}</PopupKeyValue>
			</Popup>
		);
	}

	return (
		<>
			{popup}
			{isLoading && <Loading />}
			<Container>
				<Carousel maxVisibility={3} transitionTime={5000}>
					{signs.map(sign => (
						<CardHoroscope
							key={sign.name}
							sign={sign}
							width={300}
							setFortune={setFortune}
							setIsLoading={setIsLoading}
						/>
					))}
				</Carousel>
				<BlinkingStars numberOfStars={100} />
			</Container>
		</>
	);
}
