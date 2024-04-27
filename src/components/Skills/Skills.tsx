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
                    <Skill>
                        <p>React</p>
                        <ProgressLine>
                            <span
                                style={{ width: "80%" }}
                                aria-label="80%"></span>
                        </ProgressLine>
                        <p>80%</p>
                    </Skill>
                    <Skill>
                        <p>Typescript</p>
                        <ProgressLine>
                            <span
                                style={{ width: "60%" }}
                                aria-label="60%"></span>
                        </ProgressLine>
                        <p>60%</p>
                    </Skill>
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
