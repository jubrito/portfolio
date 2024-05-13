import styled from "styled-components";
import ju from "../../assets/ju.png";

export const About = () => {
    return (
        <AboutSection id="about-section">
            <img
                src={ju}
                alt="White girl with blue curly medium hair, I have green eyes and I'm wearing black lipstick"
                className="header"
            />
            <h1>I'm Juliana Witzke de Brito</h1>
            <p>
                I'm a web developer with a 4 year experience as a front-end
                developer. I'm based in São Paulo, Brazil. As a technologist, I
                aim to identify opportunities to impact society and the
                environment positively. My interests includes the impacts of
                technology in society, accessibility, and social transformation.
            </p>
        </AboutSection>
    );
};

const AboutSection = styled.section`
    grid-area: about;
    max-width: var(--main-width);
    padding: 80px 0;
    text-align: left;
    position: relative;
    img {
        float: right;
    }
`;
