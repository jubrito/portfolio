import styled from "styled-components";
// import githublogo from "../../assets/github-logo.png";
import githublogo from "../../assets/image.png";

export const Projects = () => {
    return (
        <ProjectsSection id="projects-section">
            <h1>Projects</h1>
            <ProjectsBlock>
                <Project
                    technologies={["React", "NextJS", "Styled Components"]}
                    title="Sustainability Quiz"
                    description="Test your accessibility knowledge! (Adapted from
                            Alura's React Imersion)"
                    repository="https://github.com/jubrito/sustentabilidade-quiz"
                    link="https://sustentabilidade-quiz-jubrito.vercel.app/"
                />
                <Project
                    technologies={["React", "React Native", "NodeJS"]}
                    title="Ecoleta"
                    description="Application built during Next Level Week from @Rocketseat"
                    repository="https://github.com/jubrito/ecoleta"
                />
            </ProjectsBlock>
        </ProjectsSection>
    );
};

type ProjectProps = {
    technologies: string[];
    title: string;
    repository: string;
    description: string;
    link?: string;
};

const Project = ({
    technologies,
    title,
    repository,
    description,
    link,
}: ProjectProps) => {
    return (
        <ProjectBorder>
            <Proj>
                <Technologies aria-label="Technologies used in this project">
                    {technologies.map((tech: string) => (
                        <span>{tech}</span>
                    ))}
                </Technologies>
                <ProjHeader aria-label={title}>
                    <h2 aria-hidden={true}>
                        {link && (
                            <a
                                href="https://sustentabilidade-quiz-jubrito.vercel.app/"
                                aria-hidden={true}>
                                Sustainability Quiz
                            </a>
                        )}
                        {!link && title}
                    </h2>
                    <a
                        href={repository}
                        aria-label="Visit this project's repository on github">
                        <GithubLogo src={githublogo} alt="" />
                    </a>
                </ProjHeader>
                <p>{description}</p>
            </Proj>
        </ProjectBorder>
    );
};

const Technologies = styled.div`
    width: 100%;

    span {
        color: white;
        border: 1px solid white;
        padding: 5px 10px;
        margin-right: 10px;
        border-radius: 13px;
        font-size: 18px;
    }
`;

const GithubLogo = styled.img`
    width: 25px;
    margin-left: 15px;
`;

const ProjHeader = styled.div`
    display: flex;
    align-items: flex-start;
`;

const ProjectsSection = styled.section`
    width: 100%;
    grid-area: proj;
    max-width: var(--main-width);
    h1 {
        text-align: left;
    }
    h2 {
        font-size: 22px;
        margin-bottom: 10px;
    }
    --border-radius: 14px;
`;

const ProjectsBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const ProjectBorder = styled.div`
    background: linear-gradient(60deg, var(--primary-color), hsl(0, 0%, 100%));
    /* background: linear-gradient(60deg, hsl(0, 0%, 100%), hsl(0, 0%, 100%)); */
    background-size: 300% 300%;
    background-position: 0 50%;
    border-radius: var(--border-radius);
    animation: moveGradient 6s alternate infinite;
    padding: 3px;
    width: 100%;
    margin-bottom: 30px;
    &:nth-child(odd) {
        margin-right: 30px;
    }
`;

const Proj = styled.div`
    background: #131313;
    border-radius: var(--border-radius);
    text-align: left;
    color: white;
    position: relative;
    overflow: hidden;
    padding: 30px;
    h2,
    a {
        margin: 20px 0 10px;
        background-color: 10px;
        border-radius: 2% 2% 2% 2%;
        color: white;
        font-size: 1.5rem;
        text-transform: uppercase;
    }
    p {
        margin: 0;
    }
    @keyframes moveGradient {
        50% {
            background-position: 100% 50%;
        }
    }
`;
