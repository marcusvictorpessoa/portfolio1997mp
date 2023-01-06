import styled from "styled-components";

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 90vh;
    background-color: #f0f2eb;
    border-bottom-width: 1px;
    border-bottom-style: solid;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
    height: 80%;
    border-radius: 1em;
`;

export const InfoContact = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 47%;
    background-color: #c1c9c8;
    padding: 1em;
    border-radius: 1em;
`;

export const InfoTitle = styled.span`
    font-size: 2em;
    color: #fff;
    align-self: center;
    font-weight: bold;
`;

export const InfoDescription = styled.span`
    font-size: 1.5em;
    color: #fff;
    align-self: center;
    margin-top:30px;
`;

export const FormContact = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 47%;
    background-color: #c1c9c8;
    border-radius: 1em;
`;

export const Input = styled.input`
    border-radius: 2em;
    border-style: solid;
    border-width: 1px;
    border-color: #000;
    height: 70px;
    width: 80%;
    margin-bottom: 20px;
    padding: 1em;
    font-size: 16pt;
`;

export const TextArea = styled.textarea`
    border-radius: 2em;
    border-style: solid;
    border-width: 1px;
    border-color: #000;
    height: 140px;
    width: 80%;
    margin-bottom: 20px;
    padding: 1em;
    font-size: 16pt;
`;

export const Button = styled.button`
    cursor: pointer;
    margin-top: 10px;
    background-color: #fff;
    border-radius: 2em;
    height: 80px;
    width: 400px;
    border-style: none;
    font-size: 1.5em;
    color: #000;
    transition: 0.3s ease-in-out;
    &:hover{
        box-shadow: 5px 5px 5px #888;
    }
`;