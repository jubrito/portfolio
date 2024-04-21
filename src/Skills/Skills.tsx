import "./skills.css";

export const Skills = () => {
    return (
        <section className="skills-section" id="skills-section">
            <div className="skills-container">
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
