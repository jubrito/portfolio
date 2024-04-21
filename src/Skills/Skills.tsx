import { useEffect, useRef } from "react";
import "./skills.css";

export const Skills = () => {
    const skillsSectionRef = useRef(null);

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
        if (skillsSectionRef.current !== null) {
            observer.observe(skillsSectionRef.current);
        }
    }, []);

    return (
        <section className="skills-section" id="skills-section">
            <div className="skills-container" ref={skillsSectionRef}>
                <div className="skills">
                    <h1>Skills</h1>
                    <div className="skill">
                        <p>React</p>
                        <div className="progress-line" data-percent="80%">
                            <span style={{ width: "80%" }}></span>
                        </div>
                        <p>80%</p>
                    </div>
                    <div className="skill">
                        <p>Typescript</p>
                        <div className="progress-line" data-percent="60%">
                            <span style={{ width: "60%" }}></span>
                        </div>
                        <p>60%</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
