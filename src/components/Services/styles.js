import styled from "styled-components";

export const ServicesContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 90vh;
    background-color: #ffffff;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    height: 100%;
    border-radius: 1em;
    @media (max-width: 950px) {
        flex-direction: column;
    }
`;

export const ServicesCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 30%;
    height: 80%;
    padding: 1em;
    border-radius: 1em;
    @media (max-width: 950px) {
        height: 30%;
        width: 100%;
    }
`;

export const ServiceTitle = styled.span`
    font-size: 2em;
    color: #360b41;
    align-self: center;
    font-weight: bold;
    @media (max-width: 950px) {
        font-size: 1.5rem;
    }
`;

export const ServiceImg = styled.div`
    background-color: #fff;
    border-radius: 1em;
    width: 60%;
    height: 30%;
    align-self: center;
`;

export const ServiceDescription = styled.span`
    font-size: 1.5em;
    color: #797b7d;
    align-self: center;
    text-align: center;
    @media (max-width: 950px) {
        font-size: 1.2rem;
    }
`;