import styled from "styled-components";
// import githublogo from "../../assets/github-logo.png";
import githublogo from "../../assets/image.png";

export const Projects = () => {
    return (
        <ProjectsSection id="projects-section">
            <h1>Projects</h1>
            <ProjectsBlock>
                <ProjectBorder>
                    <Project>
                        <Technologies>
                            <span>React</span>
                            <span>NextJS</span>
                            <span>Styled Components</span>
                        </Technologies>
                        <ProjHeader>
                            <h2 aria-label="Quiz de sustentabilidade">
                                <a
                                    href="https://sustentabilidade-quiz-jubrito.vercel.app/"
                                    aria-hidden={true}>
                                    Sustainability Quiz
                                </a>
                            </h2>
                            <a
                                href="https://github.com/jubrito/sustentabilidade-quiz"
                                aria-label="Visit quiz's repository on github">
                                <GithubLogo src={githublogo} alt="" />
                            </a>
                        </ProjHeader>
                        <p>
                            Test your accessibility knowledge! (Adapted from
                            Alura's React Imersion)
                        </p>
                    </Project>
                </ProjectBorder>
                <ProjectBorder>
                    <Project>
                        <Technologies>
                            <span>React</span>
                            <span>React Native</span>
                            <span>NodeJS</span>
                        </Technologies>
                        <ProjHeader aria-label="Ecoleta">
                            <h2 aria-hidden={true}>Ecoleta</h2>
                            <a
                                href="https://github.com/jubrito/ecoleta"
                                aria-label="Visit ecoleta's repository on github">
                                <GithubLogo src={githublogo} alt="" />
                            </a>
                        </ProjHeader>
                        <p>
                            Application built during Next Level Week from
                            @Rocketseat
                        </p>
                    </Project>
                </ProjectBorder>
            </ProjectsBlock>
        </ProjectsSection>
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

const Project = styled.div`
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
