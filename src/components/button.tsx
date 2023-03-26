import {type Theme} from '@/styles/theme';
import styled from 'styled-components';

export const Button = styled.button`
    margin: 0;
    border: 0;
    padding: ${({theme}: {theme: Theme}) => theme.sizes.buttonPadding};

    background: ${({theme}: {theme: Theme}) => theme.colors.primary};

    color: ${({theme}: {theme: Theme}) => theme.colors.textLight};

    cursor: pointer;
`;
