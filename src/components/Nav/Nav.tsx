import styled from "styled-components";

export const Nav = () => {
    return (
        <Navbar id="nav">
            <Anchor href="#about-section">About</Anchor>
            <Anchor href="#skills-section">Skills</Anchor>
            <Anchor href="#projects-section">Projects</Anchor>
        </Navbar>
    );
};

const Navbar = styled.nav`
    grid-area: nav;
`;

const Anchor = styled.a`
    margin-right: 1em;
    color: inherit;
    text-decoration: none;
    padding: 10px;
    background-color: rgb(21, 18, 242);
    border-radius: 10%;
`;
