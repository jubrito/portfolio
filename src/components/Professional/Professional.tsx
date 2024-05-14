import { ReactNode } from "react";
import styled from "styled-components";
import chevronUp from "../../assets/chevron-up-solid.svg";
export const Professional = () => {
    return (
        <ProfessionalSection>
            <div className="container">
                <h1>Professional Experience</h1>
                <ProfessionalItem
                    id={0}
                    title="Thoughtworks"
                    duration="2021 – present">
                    <p>
                        <strong>
                            Trainee & Software Developer consultant.{" "}
                        </strong>
                        Graduate at Thoughtworks University (TWU-73), a trainee
                        program that brought together technologists from around
                        the world promoting cultural exchange and focusing on
                        software development, agile culture, TDD, pair
                        programming, Clean Code, CI/CD and Social
                        Transformation.
                    </p>
                    <p>
                        Relevant projects: Client engagement simulations through
                        the development of an e-commerce web application;
                        Vertical implementations of user stories; Unit and
                        Functional tests; Continuoues Integration ppeline
                        resolutions; Facilitation of Agile ceremonies, Feature
                        Toggls to allow Trunk Based Development; Cultivation of
                        a strong team clulture through collaboration and candid
                        feedback.
                    </p>
                    <span>React</span>
                    <span>Java</span>
                    <span>Spring Boot</span>
                    <span>PostgresSQL</span>
                    <span>Jest</span>
                    <span>jUnit</span>
                    <span>Taiko</span>
                </ProfessionalItem>
                <ProfessionalItem
                    id={2}
                    title="GreenPlat"
                    duration="2020 – 2021">
                    <p>
                        <strong>Web Developer. </strong>
                        Created applications for waste management enabing
                        blockchain technology to accelerate sustainable
                        production.
                    </p>
                    <p>
                        Relevant projects: Development of software integration
                        with public agencies in compliance with the decree
                        published by the Brazilian Ministry of the Environment;
                        Organization of project structures, creation of reusable
                        components and themes, code and style standardization
                        focusing on scalability and maintainability.
                    </p>
                    <span>Javascript</span>
                    <span>jQuery</span>
                    <span>Bootstrap</span>
                    <span>HTML</span>
                    <span>CSS</span>
                    <span>Ajax</span>
                    <span>Docker</span>
                </ProfessionalItem>
            </div>
        </ProfessionalSection>
    );
};

type ProfessionalItemProps = {
    id: number;
    title: string;
    duration: string;
    children: ReactNode;
};

const ProfessionalItem = ({
    id,
    title,
    duration,
    children,
}: ProfessionalItemProps) => {
    const toggleAccordion = (button: HTMLElement) => {
        const panelId = button.getAttribute("aria-controls")!;
        const panelElement = document.getElementById(panelId)!;
        const isHidden = panelElement?.hidden;
        panelElement.hidden = !isHidden;
        button.ariaExpanded = isHidden.toString();
        button.classList.toggle("expanded");
        panelElement.classList.toggle("expanded");
    };
    return (
        <Experience>
            <button
                aria-controls={`panel${id}`}
                aria-expanded={false}
                id={`header${id}`}
                onClick={(e) => toggleAccordion(e.currentTarget)}
                aria-label={title}>
                <h2 aria-hidden="true">{title}</h2>
                <h3>({duration})</h3>
                <img src={chevronUp} />
            </button>
            <div
                aria-labelledby={`header${id}`}
                hidden={true}
                id={`panel${id}`}
                className="panel">
                {children}
            </div>
        </Experience>
    );
};

const Experience = styled.div`
    margin-bottom: 20px;
`;

const ProfessionalSection = styled.section`
    grid-area: professional;
    width: 100%;
    text-align: left;
    background: var(--primary-color-light);
    display: flex;
    justify-content: center;
    .container {
        max-width: var(--main-width);
        width: 100%;
    }

    h1 {
        color: black;
    }

    h2 {
        text-transform: uppercase;
    }

    h3 {
        margin-left: 7px;
    }

    p {
        font-size: 19px;
        margin-top: 0;
    }

    span {
        background: var(--main-bg);
        border-radius: 15px;
        padding: 7px 15px;
        color: white;
        margin-right: 10px;
        display: inline-block;
    }

    button {
        display: flex;
        align-items: center;
        margin: 0;
        padding: 0;
        background: var(--main-bg);
        border: 0;
        padding: 0 20px;
        border-radius: 10px;

        &.expanded {
            border-radius: 10px 10px 0 0;
            width: 100%;
            transition: 1s;

            img {
                transform: rotate(180deg);
            }
        }

        img {
            width: 20px;
            margin-left: 20px;
            transform: rotate(90deg);
            transition: 1s;
        }
    }

    .panel {
        background: #9ca4b6;
        color: black;
        padding: 20px;
        width: fit-content;

        &.expanded {
            border-radius: 0px 0px 10px 10px;
        }
    }
`;
