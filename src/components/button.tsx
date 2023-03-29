import {type Theme} from '@/styles/theme';
import styled from 'styled-components';

export const Button = styled.button`
    margin: 0;
    border: 0;
    position: relative;
    padding: ${({theme}: {theme: Theme}) => theme.sizes.buttonPadding};

    background: ${({theme}: {theme: Theme}) => theme.colors.primary};

    color: ${({theme}: {theme: Theme}) => theme.colors.textLight};

    cursor: pointer;

    &:hover::after {
        content: '';
        position: absolute;
        display: block;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: black;
        opacity: 0.1;
    }
`;
