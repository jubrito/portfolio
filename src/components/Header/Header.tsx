// import ju from "../../assets/ju.png";
import styled from "styled-components";
import wave from "../../assets/waves2.png";

export const Header = () => {
    return (
        <StyledHeader>
            <Wave className="wave1" id="skills-section" />
            <Wave className="wave2" />
            <Wave className="wave3" />
            <Wave className="wave4" />
            {/* <header>
                <img
                    src={ju}
                    alt="White girl with blue curly medium hair, I have green eyes and I'm wearing black lipstick"
                    className="header"
                />
            </header> */}
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
    animation-delay: -5s;
    animation: wave 25s linear infinite;

    &.wave1 {
        z-index: 1000;
        opacity: 1;
        bottom: -15px;
    }
    &.wave2 {
        z-index: 995;
        bottom: 0px;
        opacity: 0.7;
    }
    &.wave3 {
        z-index: 998;
        bottom: 10px;
        opacity: 0.5;
    }
    &.wave4 {
        z-index: 999;
        bottom: 10px;
        opacity: 0.2;
    }
    @keyframes wave {
        0% {
            background-position-x: 0;
        }
        100% {
            background-position-x: 1000px;
        }
    }
`;
