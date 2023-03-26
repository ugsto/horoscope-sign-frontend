import React from 'react';
import styled from 'styled-components';

export type KeyValueProperties = {
	children: any;
	label: string;
	className?: string;
} & React.PropsWithChildren<Record<string, unknown>>;

const Container = styled.p`
    width: 100%;
    text-align: left;
`;

export function KeyValue({children, label, className}: KeyValueProperties) {
	return (
		<Container className={className}>
			<span>{label}</span>: {children}
		</Container>
	);
}
