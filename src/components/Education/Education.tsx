import styled from "styled-components";
export const Education = () => {
    return (
        <EducationSection>
            <EducationBox>
                <h1>Education</h1>
                <div className="experiences">
                    <Experience $bg={"#95be6b"}>
                        <h2>University of São Paulo, EACH-USP (2017-2020)</h2>
                        <p>
                            <span>Bachelor's degree in computing</span> with an
                            emphasis on Infomation Systems. Approved in 2nd
                            place. Rank in entrance group: 8th out of 132.
                        </p>
                    </Experience>
                    <Experience $bg={"#6b6cbe"}>
                        <h2>NodeJS - The Complet Guide (Academind)</h2>
                        <p>
                            <span>Course</span> about the connection between
                            Nodejs and MVC, REST APIs, GraphQL, Deno, APIs,
                            Authentication, MongoDB, and SQL.
                        </p>
                    </Experience>
                </div>
                <div className="experiences">
                    <Experience $bg={"#6ba3be"}>
                        <h2>University of São Paulo, EACH-USP (2017-2020)</h2>
                        <p>
                            <span>Bachelor's degree in computing</span> with an
                            emphasis on Infomation Systems. Approved in 2nd
                            place. Rank in entrance group: 8th out of 132.
                        </p>
                    </Experience>
                    <Experience $bg={"#be6bb9"}>
                        <h2>NodeJS - The Complet Guide (Academind)</h2>
                        <p>
                            <span>Course</span> about the connection between
                            Nodejs and MVC, REST APIs, GraphQL, Deno, APIs,
                            Authentication, MongoDB, and SQL.
                        </p>
                    </Experience>
                </div>
            </EducationBox>
        </EducationSection>
    );
};

const EducationSection = styled.section`
    grid-area: education;
    text-align: left;
    background: white;
    color: black;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const EducationBox = styled.div`
    width: var(--main-width);

    .experiences {
        display: flex;
        justify-content: flex-start;
    }
`;

const Experience = styled.div<{ $bg: string }>`
    height: 100%;
    background: white;
    padding: 15px;
    background: ${(props) => props.$bg};
    margin-bottom: 25px;
    &:nth-child(odd) {
        margin-right: 25px;
    }
    h2 {
        margin: 0 0 15px 0;
        padding: 5px;
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
    }
    span {
        /* background: var(--primary-color-lighter); */
        padding: 3px 5px;
        font-weight: bold;
    }
`;
