import styled from "styled-components";
export const Education = () => {
    return (
        <EducationSection>
            <h1>Education</h1>
            <EducationBox>
                <Experience>
                    <h2>University of São Paulo, EACH-USP (2017-2020)</h2>
                    <p>
                        <span>Bachelor's degree in computing</span> with an
                        emphasis on Infomation Systems. Approved in 2nd place.
                        Rank in entrance group: 8th out of 132.
                    </p>
                    <ProjectBorder></ProjectBorder>
                </Experience>
                <Experience>
                    <h2>NodeJS - The Complet Guide (Academind)</h2>
                    <p>
                        <span>Course</span> about the connection between Nodejs
                        and MVC, REST APIs, GraphQL, Deno, APIs, Authentication,
                        MongoDB, and SQL.
                    </p>
                </Experience>
            </EducationBox>
        </EducationSection>
    );
};

const EducationSection = styled.section`
    grid-area: education;
    max-width: var(--main-width);
    text-align: left;
`;

const EducationBox = styled.div`
    /* display: flex;
    justify-content: flex-start; */
`;

const ProjectBorder = styled.div`
    background: linear-gradient(60deg, var(--primary-color), hsl(0, 0%, 100%));
    /* background: linear-gradient(60deg, hsl(0, 0%, 100%), hsl(0, 0%, 100%)); */
    background-size: 300% 300%;
    background-position: 0 50%;
    animation: moveGradient 4s alternate infinite;
    padding: 0 0 4px 0;
    width: 100%;
    margin: 20px 0;

    &:nth-child(odd) {
        margin-right: 30px;
    }
`;

const Experience = styled.div`
    height: 100%;
    h2 {
        margin: 0;
        padding: 10px 0;
        position: relative;
        font-size: 1.5rem;
        text-transform: uppercase;
    }
    h3 {
        font-size: 1.2rem;
        margin: 0;
    }
    p {
        margin: 0 0 3px 0;
        font-size: 1.4rem;
        background: var(--main-bg);
    }
    span {
        color: var(--primary-color-lighter);
        font-weight: bold;
    }
`;
