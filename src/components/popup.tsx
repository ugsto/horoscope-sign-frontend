import {type Theme} from '@/styles/theme';
import React from 'react';
import styled from 'styled-components';
import {Button} from './button';

export type PopupProperties = {
	onClose: () => void;
	title: string;
	width: string;
} & React.PropsWithChildren<Record<string, unknown>>;

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
`;

const Content = styled.div<{theme: Theme; width: string}>`
    display: grid;
    grid-template-columns: 1fr 5rem;
    grid-template-areas:
        'title title'
        'content content'
        'blank button';

    width: ${({width}: {width: string}) => width};
    background: ${({theme}: {theme: Theme}) =>
		theme.colors.popupBackground};
    border: 1px solid ${({theme}: {theme: Theme}) => theme.colors.primary};
    border-radius: ${({theme}: {theme: Theme}) =>
		theme.borderRadius.default};
    box-shadow: ${({theme}: {theme: Theme}) => theme.boxShadow.default};
    padding: ${({theme}: {theme: Theme}) => theme.sizes.popupPadding};
    text-align: center;
    font-size: ${({theme}: {theme: Theme}) => theme.fontSize.default};
    color: ${({theme}: {theme: Theme}) => theme.colors.textLight};
`;

const Title = styled.h2`
    grid-area: title;

    font-size: ${({theme}: {theme: Theme}) => theme.fontSize.title};
    color: ${({theme}: {theme: Theme}) => theme.colors.textLight};
    margin: ${({theme}: {theme: Theme}) => theme.sizes.popupTitleMargin};
`;

const Section = styled.section`
    grid-area: content;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: ${({theme}: {theme: Theme}) => theme.sizes.popupSectionGap};
`;

const PopupButton = styled(Button)`
    grid-area: button;
`;

export function Popup({onClose, title, children, width}: PopupProperties) {
	return (
		<Container>
			<Content width={width}>
				<Title>{title}</Title>
				<Section>{children}</Section>
				<PopupButton onClick={onClose}>Close</PopupButton>
			</Content>
		</Container>
	);
}
