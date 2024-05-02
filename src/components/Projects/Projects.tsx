import styled from "styled-components";
// import githublogo from "../../assets/github-logo.png";
import githublogo from "../../assets/image.png";

export const Projects = () => {
    return (
        <ProjectsSection>
            <h1>Projects</h1>
            <ProjectsBlock>
                <ProjectBorder>
                    <Project>
                        <ProjHeader>
                            <h2>
                                <a
                                    href="https://sustentabilidade-quiz-jubrito.vercel.app/"
                                    style={{ color: "white" }}>
                                    Quiz de sustentabilidade
                                </a>
                            </h2>
                            <a
                                href="https://github.com/jubrito/sustentabilidade-quiz"
                                aria-label="Visit quiz's repository on github">
                                <GithubLogo src={githublogo} alt="" />
                            </a>
                        </ProjHeader>
                        <hr />
                        <p>
                            Teste em React utilizando SPA, Next.JS e Styled
                            Components. (Adaptação da Imersão React feita pela
                            Alura)
                        </p>
                    </Project>
                </ProjectBorder>
                <ProjectBorder>
                    <Project>
                        <ProjHeader>
                            <h2>Ecoleta</h2>
                            <a
                                href="https://github.com/jubrito/ecoleta"
                                aria-label="Visit ecoleta's repository on github">
                                <GithubLogo src={githublogo} alt="" />
                            </a>
                        </ProjHeader>
                        <hr />
                        <p>
                            Aplicação construida com React, React Native e Node
                            - Next Level Week @Rocketseat
                        </p>
                    </Project>
                </ProjectBorder>
            </ProjectsBlock>
        </ProjectsSection>
    );
};

const GithubLogo = styled.img`
    width: 25px;
`;

const ProjHeader = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
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
    background: linear-gradient(
        60deg,
        hsl(0, 0%, 0%),
        hsl(224, 100%, 50%),
        hsl(272, 100%, 50%),
        hsl(179, 85%, 66%),
        hsl(0, 0%, 100%)
    );
    background-size: 300% 300%;
    background-position: 0 50%;
    border-radius: var(--border-radius);
    animation: moveGradient 6s alternate infinite;
    padding: 2px;
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
    padding: 20px;
    h2 {
        margin-top: 0;
        background-color: 10px;
        border-radius: 2% 2% 2% 2%;
        color: white;
    }
    p {
        margin-bottom: 0;
    }
    @keyframes moveGradient {
        50% {
            background-position: 100% 50%;
        }
    }
`;
