import React from 'react';
import styled from 'styled-components';

export type BlinkingStarsProperties = {
	numberOfStars: number;
};

const StarsContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
`;

const StarTemplate = styled.div`
    position: absolute;
    width: 1px;
    height: 1px;
    background: #ffffff;
    border-radius: 50%;
`;

function Star() {
	const positionX = Math.random() * 100;
	const positionY = Math.random() * 100;
	const initialOpacity = Math.random();
	const animationDuration = Math.random() * 10 + 5; // eslint-disable-line no-mixed-operators
	const animationDelay = Math.random() * 10;

	return (
		<StarTemplate
			style={{
				top: `${positionY}%`,
				left: `${positionX}%`,
				opacity: initialOpacity,
				animation: `blink ${animationDuration}s ease-in-out infinite ${animationDelay}s`,
			}}
		/>
	);
}

export function BlinkingStars({numberOfStars}: BlinkingStarsProperties) {
	return (
		<StarsContainer>
			{Array.from({length: numberOfStars}).map((_, index) => (
				<Star key={index} />
			))}
		</StarsContainer>
	);
}
