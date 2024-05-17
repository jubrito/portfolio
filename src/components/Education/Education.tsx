import { useEffect, useRef } from "react";
import styled from "styled-components";
export const Education = () => {
    const EdRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                document.getElementById("xp1")?.classList.add("xp1");
                document.getElementById("xp2")?.classList.add("xp2");
                document.getElementById("xp3")?.classList.add("xp3");
                document.getElementById("xp4")?.classList.add("xp4");
            } else {
                document.getElementById("xp1")?.classList.remove("xp1");
                document.getElementById("xp2")?.classList.remove("xp2");
                document.getElementById("xp3")?.classList.remove("xp3");
                document.getElementById("xp4")?.classList.remove("xp4");
            }
        });
        if (EdRef.current !== null) {
            observer.observe(EdRef.current);
        }
    }, []);

    return (
        <EducationSection ref={EdRef} id="education-section">
            <EducationBox>
                <h1>Education</h1>
                <div className="experiences">
                    <Experience $bg={"#95be6b"} id="xp1">
                        <h2>University of São Paulo, EACH-USP (2017-2020)</h2>
                        <p>
                            <span>Bachelor's degree in computing</span> with an
                            emphasis on Infomation Systems. Approved in 2nd
                            place. Rank in entrance group: 8th out of 132.
                        </p>
                    </Experience>
                    <Experience $bg={"#6b6cbe"} id="xp2">
                        <h2>NodeJS - The Complet Guide (Academind)</h2>
                        <p>
                            <span>Course</span> about the connection between
                            Nodejs and MVC, REST APIs, GraphQL, Deno, APIs,
                            Authentication, MongoDB, and SQL.
                        </p>
                    </Experience>
                </div>
                <div className="experiences">
                    <Experience $bg={"#6ba3be"} id="xp3">
                        <h2>University of São Paulo, EACH-USP (2017-2020)</h2>
                        <p>
                            <span>Bachelor's degree in computing</span> with an
                            emphasis on Infomation Systems. Approved in 2nd
                            place. Rank in entrance group: 8th out of 132.
                        </p>
                    </Experience>
                    <Experience $bg={"#be6bb9"} id="xp4">
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

    width: 100%;
    &.xp1 {
        animation: xp1 2s linear forwards;
    }
    &.xp2 {
        animation: xp2 2s linear forwards;
    }
    &.xp3 {
        animation: xp1 2s linear forwards;
    }
    &.xp4 {
        animation: xp2 2s linear forwards;
    }

    @keyframes xp1 {
        from {
            margin-right: 5px;
            opacity: 0.6;
            margin-bottom: 5px;
        }
        to {
            margin-right: 25px;
            opacity: 1;
            margin-bottom: 25px;
        }
    }
`;
