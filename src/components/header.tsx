import React from 'react';

import {type Theme} from '@/styles/theme';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    grid-area: header;
    margin: ${({theme}: {theme: Theme}) => theme.sizes.headerMargin};
`;

const HeaderTitle = styled.h1`
    color: ${({theme}: {theme: Theme}) => theme.colors.text};
    font-size: ${({theme}: {theme: Theme}) => theme.fontSize.title};
    text-align: center;
`;

export function Header() {
	return (
		<HeaderContainer>
			<HeaderTitle>Signos do Zodíaco</HeaderTitle>
		</HeaderContainer>
	);
}
