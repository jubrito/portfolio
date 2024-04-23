import ju from "../../assets/ju.png";
import styled from 'styled-components';

export const Header = () => {
    return (
        <StyledHeader>
            <header>
                <img
                    src={ju}
                    alt="White girl with blue curly medium hair, I have green eyes and I'm wearing black lipstick"
                    className="header"
                />
            </header>

            <Ocean className="ocean">
                <Wave/>
                <Wave/>
            </Ocean>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    grid-area: header;
`;

const Ocean = styled.div`
    position: relative;
`;

const Wave = styled.div`
    background: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/85486/wave.svg") repeat-x;  
    background-color: white;
    width: 100%;
    height: 200px;
    position: absolute;
`;