import styled from "styled-components";

export const Projects = () => {
    return (
        <ProjectsSection>
            <h1>Projects</h1>
            <ProjectsBlock>
                <Project>
                    <h2>Suas ações são sustentáveis?</h2>
                    <p>
                        Teste em React utilizando SPA, o framework Next.JS e
                        Styled Components. (Adaptação da Imersão React feita
                        pela Alura)
                    </p>
                </Project>
                <Project>
                    <h2>Suas ações são sustentáveis?</h2>
                    <p>
                        Teste em React utilizando SPA, o framework Next.JS e
                        Styled Components. (Adaptação da Imersão React feita
                        pela Alura)
                    </p>
                </Project>
            </ProjectsBlock>
        </ProjectsSection>
    );
};

const ProjectsSection = styled.section`
    max-width: var(--main-width);
    width: 100%;
    grid-area: proj;
    h1 {
        text-align: left;
        width: 100%;
        display: block;
    }
`;

const ProjectsBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Project = styled.div`
    background: white;
    border-radius: 2%;
    color: black;
    &:nth-child(odd) {
        margin-right: 30px;
    }
    h2 {
        margin-top: 0;
        background-color: 10px;
        background: #000097;
        border-radius: 2% 2% 2% 2%;
        color: white;
    }
    p {
        margin-bottom: 0;
    }
`;
