import ju from "../../assets/ju.png";
import styled from "styled-components";
import wave from "../../assets/wave.png";

export const Header = () => {
    return (
        <StyledHeader>
            <Wave className="wave1" />
            <Wave className="wave2" />
            <Wave className="wave3" />
            <Wave className="wave4" />
            <header>
                <img
                    src={ju}
                    alt="White girl with blue curly medium hair, I have green eyes and I'm wearing black lipstick"
                    className="header"
                />
            </header>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    grid-area: header;
    position: relative;
`;

const Wave = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: url(${wave});
    background-size: 1000px 100px;
    &.wave1 {
        animation: wave1 15s linear infinite;
        z-index: 1000;
        opacity: 1;
        animation-delay: 0s;
        bottom: -15px;
    }
    &.wave2 {
        animation: wave 15s linear infinite;
        z-index: 999;
        animation-delay: -5s;
        bottom: 0px;
        opacity: 0.7;
    }
    &.wave3 {
        animation: wave2 8s linear infinite;
        z-index: 998;
        animation-delay: -2s;
        bottom: 10px;
        opacity: 0.5;
    }
    &.wave4 {
        animation: wave2 10s linear infinite;
        z-index: 997;
        animation-delay: -5s;
        bottom: 10px;
        opacity: 0.2;
    }
    @keyframes wave1 {
        0% {
            background-position-x: 0;
        }
        100% {
            background-position-x: 1000px;
        }
    }
    @keyframes wave2 {
        0% {
            background-position-x: 0;
        }
        100% {
            background-position-x: 1000px;
        }
    }
`;
