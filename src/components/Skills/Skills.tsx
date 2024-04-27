import { useEffect, useRef } from "react";
import "./skills.css";
import styled from 'styled-components';
import wave from '../../assets/wave.png';

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
            <Ocean className="ocean">
                <Wave className="wave1"/>
                <Wave className="wave2"/>
                <Wave className="wave3"/>
                <Wave className="wave4"/>
            </Ocean>
            <SkillsBlock ref={skillsRef}>
                <h1>Skills</h1>
                <Skill>
                    <p>React</p>
                    <ProgressLine>
                        <span
                            style={{ width: "80%" }}
                            aria-label="80%"
                        ></span>
                    </ProgressLine>
                    <p>80%</p>
                </Skill>
                <Skill>
                    <p>Typescript</p>
                    <ProgressLine>
                        <span
                            style={{ width: "60%" }}
                            aria-label="60%"
                        ></span>
                    </ProgressLine>
                    <p>60%</p>
                </Skill>
            </SkillsBlock>
        </SkillsSection>
        </>
    );
};

const Ocean = styled.div`
    position: relative;
    width: 100%;
`;

const Wave = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: url(${wave});
    background-size: 1000px 100px;
    &.wave1 {
        animation: wave1 30s linear infinite;
        z-index: 1000;
        opacity: 1;
        animation-delay: 0s;
        bottom: 0;
    }
    @keyframes wave1 {
        0% {
            background-position-x: 0;
        }
        100% {
            background-position-x: 1000px;
        }
    }
    &.wave2 {
        animation: wave2 15s linear infinite;
        z-index: 999;
        animation-delay: -5s;
        bottom: 10px;
        opacity: 0.7;
    }
    @keyframes wave2 {
        0% {
            background-position-x: 0;
        }
        100% {
            background-position-x: -1000px;
        }
    } 
    &.wave3 {
        animation: wave 15s linear infinite;
        z-index: 998;
        animation-delay: -2s;
        bottom: 15px;
        opacity: 0.5;
    }
   
    &.wave4 {
        animation: wave2 15s linear infinite;
        z-index: 997;
        animation-delay: -5s;
        bottom: 20px;
        opacity: 0.2;
    }
`;

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
    width: var(--main-width);
`

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