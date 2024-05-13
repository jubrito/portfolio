import { useEffect } from "react";
import styled from "styled-components";

export const Nav = () => {
    useEffect(() => {
        const nav = document.getElementById("nav");
        const anchors = nav?.querySelectorAll("a");
        if (anchors) {
            for (let i = 0; i < anchors?.length; i++) {
                // console.log("anchors", anchors[i]);
                anchors[i]?.addEventListener("click", () => {
                    const current = nav?.getElementsByClassName("active")[0];
                    current?.classList.remove("active");
                    anchors[i].classList.add("active");
                });
            }
        }
    }, []);

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
    z-index: 10000;
    display: flex;
    position: fixed;
    justify-content: center;
    --anchorwidth: calc(100% / 3);
    background: #131313;
    opacity: 0.85;
    padding-bottom: 10px;
`;
const NavBlock = styled.div`
    position: relative;
    height: 20px;
    padding: 10px 0;
    border-radius: 20px;
`;

const AnchorBlock = styled.div`
    width: var(--anchorwidth);
    height: 30px;
    display: inline-block;
    position: relative;

    .active {
        bordom-bottom: 1px solid white;
        transition: transform 2s;
        &::after {
            position: absolute;
            content: "";
            top: 100%;
            left: 0;
            width: 100%;
            height: 3px;
            background: #00ddff;
            transform: scaleX(0);
            transition: transform 0.5s;
            animation: activeanchor 2s normal forwards;
        }
    }

    &:hover::after {
    }

    @keyframes activeanchor {
        to {
            transform: scaleX(1);
            transform-origin: center;
        }
    }
`;

const Anchor = styled.a`
    color: inherit;
    text-decoration: none;
    padding: 10px 40px 5px;
    color: white;
    font-weight: bold;
    position: relative;
    z-index: 1;
    text-decoration: none;
`;
