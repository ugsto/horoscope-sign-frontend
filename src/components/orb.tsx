import styled from 'styled-components';

export const Orb = styled.div<{width: number; color: string}>`
    position: relative;
    display: block;
    border-radius: 50%;
    width: ${({width}: {width: number}) => width}px;
    height: ${({width}: {width: number}) => width}px;
    filter: ${({width}: {width: number}) => `blur(${width * 0.025}px)`};

    background: linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.8),
        ${({color}: {color: string}) => color}
    );
    box-shadow: 0 0 ${({width}: {width: number}) => width * 0.125}px
            ${({color}: {color: string}) => color},
        0 0 ${({width}: {width: number}) => width * 2}px
            ${({color}: {color: string}) => color},
        0 0 ${({width}: {width: number}) => width * 3}px
            ${({color}: {color: string}) => color},
        0 0 ${({width}: {width: number}) => width * 4}px
            ${({color}: {color: string}) => color};
    animation: glowing 1s ease-in-out infinite alternate;

    @keyframes glowing {
        from {
            box-shadow: 0 0 ${({width}: {width: number}) => width * 0.125}px
                    ${({color}: {color: string}) => color},
                0 0 ${({width}: {width: number}) => width}px
                    ${({color}: {color: string}) => color},
                0 0 ${({width}: {width: number}) => width * 0.5}px
                    ${({color}: {color: string}) => color},
                0 0 ${({width}: {width: number}) => width * 0.75}px
                    ${({color}: {color: string}) => color};
        }
        to {
            box-shadow: 0 0 ${({width}: {width: number}) => width * 0.25}px
                    ${({color}: {color: string}) => color},
                0 0 ${({width}: {width: number}) => width * 0.5}px
                    ${({color}: {color: string}) => color},
                0 0 ${({width}: {width: number}) => width * 0.75}px
                    ${({color}: {color: string}) => color},
                0 0 ${({width}: {width: number}) => width}px
                    ${({color}: {color: string}) => color};
        }
    }
`;
