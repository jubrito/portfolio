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
    --anchorwidth: 110px;
    background: var(--main-bg);
    opacity: 0.9;
    padding-top: 20px;
`;
const NavBlock = styled.div`
    position: relative;
    height: 30px;
    padding: 10px 0;
    width: var(--main-width);
`;

const AnchorBlock = styled.div`
    width: var(--anchorwidth);
    display: inline-block;
    position: relative;
    float: left;

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
            background: var(--primary-color);
            transform: scaleX(0);
            transition: transform 0.5s;
            animation: activeanchor 2s normal forwards;
            transform-origin: left;
        }
    }

    @keyframes activeanchor {
        to {
            transform: scaleX(1);
            background: white;
        }
    }
`;

const Anchor = styled.a`
    color: inherit;
    text-decoration: none;
    padding: 10px 10px 5px;
    color: white;
    font-weight: bold;
    position: relative;
    z-index: 1;
    text-decoration: none;
`;
