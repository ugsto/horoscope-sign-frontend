import React from 'react';
import {type Theme} from '@/styles/theme';
import styled from 'styled-components';

export type CardProperties = {
	title: string;
	width: number;
	className?: string;
} & React.PropsWithChildren<Record<string, unknown>>;

const Container = styled.div<{theme: Theme; width: number}>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: ${({theme}: {theme: Theme}) => theme.sizes.cardGap};

    padding: ${({theme}: {theme: Theme}) => theme.sizes.cardPadding};

    width: ${({width}: {width: number}) => width}px;

    color: ${({theme}: {theme: Theme}) => theme.colors.textLight};
`;

const Title = styled.h2`
    margin-bottom: 1rem;

    font-size: ${({theme}: {theme: Theme}) => theme.fontSize.cardTitle};
    font-weight: bold;
`;

export function Card({title, width, children, className}: CardProperties) {
	return (
		<Container className={className} width={width}>
			<Title>{title}</Title>
			{children}
		</Container>
	);
}
