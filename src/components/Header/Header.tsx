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
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    grid-area: header;
`;