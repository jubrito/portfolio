import { useEffect, useRef } from "react";
import styled from "styled-components";

export const Skills = () => {
    const skillsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            const progressBarColoredArray =
                document.getElementsByClassName("line");
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
            <SkillsSection>
                <SkillsBlock ref={skillsRef}>
                    <h1>Skills</h1>
                    <Skill aria-label="React level is 80%">
                        <p aria-hidden="true">React</p>
                        <ProgressLine>
                            <span
                                className="line"
                                style={{ width: "80%" }}></span>
                        </ProgressLine>
                    </Skill>
                    <Skill aria-label="Typescript level is 80%">
                        <p aria-hidden="true">Typescript</p>
                        <ProgressLine>
                            <span
                                className="line"
                                style={{ width: "60%" }}></span>
                        </ProgressLine>
                    </Skill>
                    <Skill aria-label="HTML level is 85%">
                        <p aria-hidden="true">HTML</p>
                        <ProgressLine>
                            <span
                                className="line"
                                style={{ width: "85%" }}></span>
                        </ProgressLine>
                    </Skill>
                    <Skill aria-label="CSS level is 90%">
                        <p aria-hidden="true">CSS</p>
                        <ProgressLine>
                            <span
                                className="line"
                                style={{ width: "90%" }}></span>
                        </ProgressLine>
                    </Skill>
                    <Skill aria-label="Accessibility level is 70%">
                        <p aria-hidden="true">Accessibility</p>
                        <ProgressLine>
                            <span
                                className="line"
                                style={{ width: "70%" }}></span>
                        </ProgressLine>
                    </Skill>
                    <Skill aria-label="Java level is 55%">
                        <p aria-hidden="true">Java</p>
                        <ProgressLine>
                            <span
                                className="line"
                                style={{ width: "55%" }}></span>
                        </ProgressLine>
                    </Skill>
                    <Skill aria-label="Node level is 30%">
                        <p aria-hidden="true">Node</p>
                        <ProgressLine>
                            <span
                                className="line"
                                style={{ width: "30%" }}></span>
                        </ProgressLine>
                    </Skill>
                    <HiddenLink href="#nav">Go back to nav bar</HiddenLink>
                </SkillsBlock>
            </SkillsSection>
        </>
    );
};

const SkillsSection = styled.section`
    grid-area: skills;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--primary-color);
    color: white;
    height: fit-content;
    padding-bottom: 25px;
`;

const HiddenLink = styled.a`
    opacity: 0;
    height: 0;
`;

const SkillsBlock = styled.div`
    display: flex;
    flex-direction: column;
    max-width: var(--main-width);
    width: 100%;

    .animate {
        animation: animate 2s forwards;
        transition: 1s all;
    }

    @keyframes animate {
        0% {
            background-color: var(--primary-color-light);
        }

        100% {
            transform: scaleX(1);
            background-color: white;
        }
    }
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
    height: 40px;

    p:first-child {
        text-align: right;
        width: 160px;
    }
`;

const ProgressLine = styled.div`
    width: 100%;
    height: 7px;
    background-color: #5a5a5a;
    border-radius: 10px;
    position: relative;
    margin-left: 15px;

    .line {
        height: 100%;
        transform: scaleX(0);
        position: absolute;
        left: 0;
        border-radius: 10px;
        transform-origin: left;
    }
`;
