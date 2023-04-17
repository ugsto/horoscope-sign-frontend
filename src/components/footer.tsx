import React from 'react';
import styled from 'styled-components';
import {type Theme} from '@/styles/theme';
import {Author} from './author';

const Container = styled.footer`
    grid-area: footer;

    display: grid;
    grid-template-areas: 'authors' 'copyright' 'social';
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    gap: 1rem;
    padding: 1rem;
    background: ${({theme}: {theme: Theme}) => theme.colors.footerBackground};

    @media (min-width: 768px) {
        grid-template-areas: 'authors copyright' 'social social';
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto auto;
    }

    @media (min-width: 1024px) {
        grid-template-areas: 'authors copyright social';
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: auto;
    }
`;

const Authors = styled.div`
    grid-area: authors;

    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    gap: 0.5rem;
`;

const StyledAuthor = styled(Author)`
    color: ${({theme}: {theme: Theme}) => theme.colors.textLight};
    font-size: 0.8rem;

    & > a {
        color: ${({theme}: {theme: Theme}) => theme.colors.textLight};
        font-weight: 600;
    }
`;

const Copyright = styled.p`
    grid-area: copyright;

    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({theme}: {theme: Theme}) => theme.colors.textLight};
    font-size: 0.8rem;
    text-align: center;

    @media (min-width: 768px) {
        text-align: left;
    }
`;

export function Footer() {
	return (
		<Container>
			<Authors>
				<StyledAuthor
					name="André Bortoli"
					email="andre.ugsto@proton.me"
				/>
				<StyledAuthor
					name="João Guesser"
					email="joaopedroguesser902@gmail.com"
				/>
			</Authors>
			<Copyright>🄯 2023 - Todos os direitos reservados</Copyright>
		</Container>
	);
}
