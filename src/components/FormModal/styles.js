import styled from "styled-components";

export const Input = styled.input`
    border-radius: 1em;
    border-style: solid;
    border-width: 1px;
    border-color: #000;
    height: 50px;
    width: 80%;
    margin-bottom: 20px;
    padding: 1em;
    font-size: 16pt;
`;

export const ContentModal = styled.div`
    display: flex;
    flex-direction: column;
    height: 80vh;
    justify-content: space-around;
    align-items: center;
`;

export const TitleModal = styled.span`
    color: #000;
    font-size: 1.5em;
    align-self: center;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    
`;

export const Label = styled.div`
    font-size: 1.5em;
`;
export const Button = styled.button`
    cursor: pointer;
    align-self: center;
    height: 55px;
    background-color: #f0f2eb;
    width: 40%;
    border-radius: 1em;
    font-size: 18pt;
    font-family: Verdana;
    font-weight: 500;
`;