import styled from "styled-components";

export const Nav = () => {
    return (
        <Navbar id="nav">
            <NavBlock>
                <AnchorBlock>
                    <Anchor href="#about-section" className="active">
                        About
                    </Anchor>
                </AnchorBlock>
                <AnchorBlock>
                    <Anchor href="#skills-section">Skills</Anchor>
                </AnchorBlock>
                <AnchorBlock>
                    <Anchor href="#projects-section">Projects</Anchor>
                </AnchorBlock>
                <div className="bg"></div>
            </NavBlock>
        </Navbar>
    );
};

const Navbar = styled.nav`
    grid-area: nav;
    width: 100%;
    margin: 0 auto;
    z-index: 10000;
    display: flex;
    justify-content: center;
    --anchorwidth: calc(100% / 3);
`;
const NavBlock = styled.div`
    position: relative;
    margin-top: 20px;
    height: 20px;
    padding: 10px 0;
    background-color: #ffffff1c;
    border-radius: 20px;

    .bg {
        position: absolute;
        top: 0;
        bottom: 0;
        width: var(--anchorwidth);
        left: 5px;
        height: 30px;
        top: 5px;
        background-color: #6030ff;
        border-radius: 20px;
        transition: 0.2s all cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
`;

const AnchorBlock = styled.div`
    width: var(--anchorwidth);
    height: 30px;
    display: inline-block;
    border-radius: 20px;
    position: relative;

    &:hover:nth-child(1) ~ .bg {
        left: 5px;
    }

    &:hover:nth-child(2) ~ .bg {
        left: var(--anchorwidth);
    }

    &:hover:nth-child(3) ~ .bg {
        left: calc(var(--anchorwidth) * 2 - 5px);
    }

    /* &::before {
        content: "";
        width: 80%;
        position: absolute;
        left: 10px;
        top: 0px;
        height: 80%;
        border-radius: 20px;
        transition: 0.5s;
    }
    &:nth-child(1):hover::before {
        background: pink;
    } */
`;

const Anchor = styled.a`
    color: inherit;
    text-decoration: none;
    padding: 10px 40px;
    color: white;
    font-weight: bold;
    position: relative;
    z-index: 1;
    text-decoration: none;
`;
