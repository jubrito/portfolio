import styled from "styled-components";

export const Nav = () => {
    return (
        <Navbar id="nav">
            <Anchor href="#about-section" className="active">
                About
            </Anchor>
            <Anchor href="#skills-section">Skills</Anchor>
            <Anchor href="#projects-section">Projects</Anchor>
            <div className="bg"></div>
        </Navbar>
    );
};

const Navbar = styled.nav`
    grid-area: nav;
    margin: 10px 0;
    position: relative;

    .bg {
        position: absolute;
        top: 0;
        left: 0;
        width: calc(100% / 3);
        height: 100%;
        transition: 0.2s all cubic-bezier(0.175, 0.885, 0.32, 1.275);
        background-color: #1500f9;
        color: white;
    }
`;

const Anchor = styled.a`
    color: inherit;
    text-decoration: none;
    padding: 15px;
    /* background: white; */
    color: black;
    font-weight: bold;
    position: relative;
    z-index: 1;
    text-decoration: none;

    &:hover:nth-child(1) ~ .bg {
        left: 0;
    }
    &:hover:nth-child(2) ~ .bg {
        left: calc(100% / 3);
        background: purple;
    }
    &:hover:nth-child(3) ~ .bg {
        left: calc((100% / 3) * 2);
        background: pink;
    }
`;
