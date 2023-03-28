import React from 'react';
import {Card} from './card';
import {KeyValue} from './key-value';
import styled from 'styled-components';
import {type Theme} from '@/styles/theme';

export type CardHoroscopeProperties = {
	sign: {
		symbol: string;
		name: string;
		planet: string;
		element: string;
		dateRange: string;
		characteristics: string[];
		compatibility: string[];
	};
	width: number;
} & React.PropsWithChildren<Record<string, unknown>>;

const Container = styled(Card)`
    border: 1px solid ${({theme}: {theme: Theme}) => theme.colors.primary};

    background-color: ${({theme}: {theme: Theme}) =>
		theme.colors.cardBackground};
`;

const CardKeyValue = styled(KeyValue)`
    color: ${({theme}: {theme: Theme}) => theme.colors.textLight};

    span {
        color: ${({theme}: {theme: Theme}) => theme.colors.key};
    }
`;

export function CardHoroscope({
	sign,
	width,
	className,
}: CardHoroscopeProperties) {
	return (
		<Container
			title={`${sign.symbol} ${sign.name}`}
			width={width}
			className={className}
		>
			<CardKeyValue label="Planeta">{sign.planet}</CardKeyValue>
			<CardKeyValue label="Elemento">{sign.element}</CardKeyValue>
			<CardKeyValue label="Data">{sign.dateRange}</CardKeyValue>
			<CardKeyValue label="Características">
				{sign.characteristics.join(', ')}
			</CardKeyValue>
			<CardKeyValue label="Compatibilidade">
				{sign.compatibility.join(', ')}
			</CardKeyValue>
		</Container>
	);
}
