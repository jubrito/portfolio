import styled from "styled-components";
export const About = () => {
    return (
        <AboutSection id="about-section">
            <h1>I'm Juliana Witzke de Brito</h1>
            <p>
                I'm a web developer with a 4 year experience as a front-end
                developer. I'm based in São Paulo, Brazil. As a technologist, I
                aim to identify opportunities to impact society and the
                environment positively
            </p>
        </AboutSection>
    );
};

const AboutSection = styled.section`
    grid-area: about;
    max-width: var(--main-width);
    padding-top: 40px;
`;
