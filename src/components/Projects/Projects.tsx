import styled from "styled-components";

export const Projects = () => {
    return (
        <ProjectsSection>
            <h1>Projects</h1>
            <ProjectsBlock>
                <ProjectBorder>
                    <Project>
                        <h2>Suas ações são sustentáveis?</h2>
                        <p>
                            Teste em React utilizando SPA, o framework Next.JS e
                            Styled Components. (Adaptação da Imersão React feita
                            pela Alura)
                        </p>
                    </Project>
                </ProjectBorder>
                <ProjectBorder>
                    <Project>
                        <h2>Suas ações são sustentáveis?</h2>
                        <p>
                            Teste em React utilizando SPA, o framework Next.JS e
                            Styled Components. (Adaptação da Imersão React feita
                            pela Alura)
                        </p>
                    </Project>
                </ProjectBorder>
            </ProjectsBlock>
        </ProjectsSection>
    );
};

const ProjectsSection = styled.section`
    width: 100%;
    grid-area: proj;
    max-width: var(--main-width);
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
    position: relative;
`;

const ProjectBorder = styled.div`
    background: linear-gradient(
        60deg,
        hsl(224, 100%, 50%),
        hsl(272, 100%, 50%),
        hsl(179, 85%, 66%)
    );
    background-size: 300% 300%;
    background-position: 0 50%;
    border-radius: 4px;
    animation: moveGradient 4s alternate infinite;
    padding: 2px;
    &:nth-child(odd) {
        margin-right: 40px;
    }
`;

const Project = styled.div`
    background: black;
    border-radius: 4px;
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
// const Project = styled.div`
//     background: white;
//     border-radius: 3%;
//     color: black;
//     width: 49%;
//     position: absolute;
//     animation: updown 1s linear forwards;
//     animation-delay: 0s;
//     transform: translateY(-200px);
//     &:nth-child(odd) {
//         margin-right: 30px;
//         left: 0;
//     }
//     &:nth-child(even) {
//         right: 0;
//     }
//     h2 {
//         margin-top: 0;
//         background-color: 10px;
//         background: #000097;
//         border-radius: 2% 2% 2% 2%;
//         color: white;
//     }
//     p {
//         margin-bottom: 0;
//     }

//     @keyframes updown {
//         0% {
//             transform: translateY(-100px);
//         }
//         25% {
//             transform: translateY(-50px);
//         }
//         100% {
//             transform: translateY(60px);
//         }
//     }
// `;
