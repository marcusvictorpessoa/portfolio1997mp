import styled from "styled-components";

export const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 90vh;
    background-color: #ffffff;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 60%;
    height: 100%;
    border-radius: 1em;
    @media (max-width: 950px){
        width: 95%;
    }
`;

export const Title = styled.span`
    font-size: 2.5em;
    color: #360b41;
    text-align: center;
    @media (max-width: 950px){
        font-size: 1.8rem;
    }
`;

export const InfoAbout = styled.span`
    font-size: 1.5em;
    color: #797b7d;
    padding: 1.5em;
    text-justify: center;
    @media (max-width: 1200px){
        font-size: 1.2rem;
    }

    @media (max-width: 950px){
        font-size: 1rem;
    }
`;
