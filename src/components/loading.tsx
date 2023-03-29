import React from 'react';
import {type Theme} from '@/styles/theme';
import styled from 'styled-components';

export const LoadingContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
`;

export const Spinner = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 5px solid ${({theme}: {theme: Theme}) => theme.colors.primary};
    border-top-color: ${({theme}: {theme: Theme}) => theme.colors.textLight};
    animation: spin 1s infinite linear;

    @keyframes spin {
        to {
            transform: rotate(360deg);
        }
    }
`;

export function Loading() {
	return (
		<LoadingContainer>
			<Spinner />
		</LoadingContainer>
	);
}
