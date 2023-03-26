import React from 'react';
import {type Theme} from '@/styles/theme';
import styled from 'styled-components';

export type CardProperties = {
	title: string;
	className?: string;
} & React.PropsWithChildren<Record<string, unknown>>;

const Container = styled.div`
    padding: ${({theme}: {theme: Theme}) => theme.sizes.cardPadding};

    width: min-content;

    background-color: ${({theme}: {theme: Theme}) =>
		theme.colors.cardBackground};
`;

const Title = styled.h2`
    color: ${({theme}: {theme: Theme}) => theme.colors.textLight};
    font-size: ${({theme}: {theme: Theme}) => theme.fontSize.cardTitle};
    font-weight: bold;
`;

export function Card({title, children, className}: CardProperties) {
	return (
		<Container className={className}>
			<Title>{title}</Title>
			{children}
		</Container>
	);
}
