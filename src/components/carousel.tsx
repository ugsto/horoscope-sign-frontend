import React, {type PropsWithChildren} from 'react';
import styled from 'styled-components';
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';

export type CarouselProperties = Record<string, unknown> & PropsWithChildren;

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    perspective: 100px;
    transform-style: preserve-3d;
`;

const CardContainer = styled.div<{
	isActive: boolean;
	absDiff: number;
	diff: number;
}>`
    display: ${({absDiff}: {absDiff: number}) =>
		absDiff > 1 ? 'none' : 'flex'};
    position: ${({isActive}: {isActive: boolean}) =>
		isActive ? 'initial' : 'absolute'};
    filter: blur(${({absDiff}: {absDiff: number}) => absDiff}rem);
    transition: all 0.3s ease-out;
    transform: translateX(calc(${({diff}: {diff: number}) => diff} * -5rem))
        translateZ(calc(${({absDiff}: {absDiff: number}) => absDiff} * -30rem));
`;

const LeftButton = styled(FaChevronLeft)`
    opacity: ${({isActive}: {isActive: boolean}) => (isActive ? 0 : 1)};
    font-size: 2rem;
    color: #fff;
    cursor: ${({isActive}: {isActive: boolean}) =>
		isActive ? 'inherit' : 'pointer'};
`;

const RightButton = styled(FaChevronRight)`
    opacity: ${({isActive}: {isActive: boolean}) => (isActive ? 0 : 1)};
    font-size: 2rem;
    color: #fff;
    cursor: ${({isActive}: {isActive: boolean}) =>
		isActive ? 'inherit' : 'pointer'};
`;

export function Carousel({children}: CarouselProperties) {
	const [active, setActive] = React.useState(0);

	return (
		<Container>
			{
				<LeftButton
					onClick={() => {
						setActive(oldValue => Math.max(oldValue - 1, 0));
					}}
					isActive={active === 0}
				/>
			}
			{React.Children.map(children, (child, index) => (
				<CardContainer
					isActive={active === index}
					absDiff={Math.abs(active - index)}
					diff={active - index}
				>
					{child}
				</CardContainer>
			))}
			{
				<RightButton
					onClick={() => {
						setActive(oldValue =>
							Math.min(
								oldValue + 1,
								React.Children.count(children) - 1,
							),
						);
					}}
					isActive={active === React.Children.count(children) - 1}
				/>
			}
		</Container>
	);
}
