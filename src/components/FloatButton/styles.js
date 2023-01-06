import styled from "styled-components";

export const Button = styled.button`
    cursor: pointer;
    position: fixed;
    z-index: 5;
    bottom: 2%;
    right: 2%;
    height: 70px;
    width: 70px;
    border-radius: 50%;
    transition: .3s ease-in-out;
    background-color: #2fa3d9;
    border-style: solid;
    border-color: #ffffff;
    &:hover {
        transform: scale(1.2);
        box-shadow: 5px 5px 5px #888;
    }
`;