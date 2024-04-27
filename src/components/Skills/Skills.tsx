import { useEffect, useRef } from "react";
import "./skills.css";
import styled from "styled-components";

export const Skills = () => {
    const skillsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            const progressBarColoredArray = document.querySelectorAll("span");
            if (entry.isIntersecting) {
                for (const item of progressBarColoredArray) {
                    item.classList.add("animate");
                }
            } else {
                for (const item of progressBarColoredArray) {
                    item.classList.remove("animate");
                }
            }
        });
        if (skillsRef.current !== null) {
            observer.observe(skillsRef.current);
        }
    }, []);

    return (
        <>
            <SkillsSection id="skills-section">
                <SkillsBlock ref={skillsRef}>
                    <h1>Skills</h1>
                    <Skill aria-label="React level is 80%">
                        <p aria-hidden="true">React</p>
                        <ProgressLine>
                            <span style={{ width: "80%" }}></span>
                        </ProgressLine>
                    </Skill>
                    <Skill aria-label="Typescript level is 80%">
                        <p aria-hidden="true">Typescript</p>
                        <ProgressLine>
                            <span style={{ width: "60%" }}></span>
                        </ProgressLine>
                    </Skill>
                    <Skill aria-label="HTML level is 85%">
                        <p>HTML</p>
                        <ProgressLine>
                            <span style={{ width: "85%" }}></span>
                        </ProgressLine>
                    </Skill>
                    <Skill aria-label="CSS level is 90%">
                        <p>CSS</p>
                        <ProgressLine>
                            <span style={{ width: "90%" }}></span>
                        </ProgressLine>
                    </Skill>
                    <Skill aria-label="Accessibility level is 70%">
                        <p>Accessibility</p>
                        <ProgressLine>
                            <span style={{ width: "70%" }}></span>
                        </ProgressLine>
                    </Skill>
                    <Skill aria-label="Java level is 55%">
                        <p>Java</p>
                        <ProgressLine>
                            <span style={{ width: "55%" }}></span>
                        </ProgressLine>
                    </Skill>
                    <Skill aria-label="Node level is 30%">
                        <p>Node</p>
                        <ProgressLine>
                            <span style={{ width: "30%" }}></span>
                        </ProgressLine>
                    </Skill>
                    <HiddenLink href="#nav">Go back to nav bar</HiddenLink>
                </SkillsBlock>
            </SkillsSection>
        </>
    );
};

const SkillsSection = styled.section`
    h1 {
        text-align: left;
    }
    grid-area: skills;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: white;
    color: black;
    height: fit-content;
    padding-bottom: 25px;
`;

const HiddenLink = styled.a`
    opacity: 0;
    height: 1;
`;

const SkillsBlock = styled.div`
    display: flex;
    flex-direction: column;
    max-width: var(--main-width);
    width: 100%;
`;

const Skill = styled.div`
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    align-items: center;
    height: 30px;

    p:first-child {
        text-align: right;
        width: 100px;
    }
`;

const ProgressLine = styled.div`
    width: 100%;
    height: 7px;
    background-color: #cdcdcd;
    border-radius: 10px;
    position: relative;
    margin-left: 15px;
    margin-right: 15px;

    span {
        height: 100%;
        transform: scaleX(0);
        position: absolute;
        left: 0;
        border-radius: 10px;
        transform-origin: left;
    }
`;
