import React from 'react';
import {type Theme} from '@/styles/theme';
import styled from 'styled-components';

export type HeaderProperties = {
	className?: string;
} & React.PropsWithChildren<Record<string, unknown>>;

const HeaderContainer = styled.header`
    grid-area: header;
    margin: ${({theme}: {theme: Theme}) => theme.sizes.headerMargin};
`;

const HeaderTitle = styled.h1`
    color: ${({theme}: {theme: Theme}) => theme.colors.textLight};
    font-size: ${({theme}: {theme: Theme}) => theme.fontSize.title};
    text-align: center;
`;

export function Header({className}: HeaderProperties) {
	return (
		<HeaderContainer className={className}>
			<HeaderTitle>Signos do Zodíaco</HeaderTitle>
		</HeaderContainer>
	);
}
