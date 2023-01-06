import styled from "styled-components";

export const ProjectsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 90vh;
    background-color: #f75e50;
    //background-color: #404245;
    //background-image: linear-gradient(to right, #196ee6, #404245, #f75e50);
`;

export const Card = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 80%;
    height: 80%;
    @media (max-width:950px){
        flex-direction: column;
        height: 100%;
        width: 100%;
        padding: 0.5rem;
    }
`;

export const ProjectsCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    align-self: ${props => props.align};
    width: 30%;
    height: 65%;
    background: rgba( 255, 255, 255, 0.2 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 13.5px );
    -webkit-backdrop-filter: blur( 13.5px );
    padding: .3em;
    box-shadow: 0 1px 1px 0 #000000;
    @media (max-width:950px){
        flex-direction: row;
        height: 25%;
        width: 90%;
        align-self: center;
        justify-content: space-around;
    }
`;

export const ProjectsTitle = styled.span`
    font-size: 2em;
    color: #fff;
    align-self: center;
    font-weight: bold;
`;

export const ProjectsImg = styled.img`
    width: 85%;
    height: 40%;
    align-self: center;
    border-width: 1px;
    border-style: solid;
    border-color: #e4e4e4;
    @media (max-width:950px){
        flex-direction: row;
        height: 40%;
        width: 50%;
        align-self: center;
    }
`;

export const ProjectBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 40%;
    @media (max-width:1300px){
        height: 30%;
    }
`;

export const ProjectTitle = styled.span`
    font-size: 1.5em;
    color: #ffffff;
    text-align: center;
    font-weight: bold;
    @media (max-width:1100px){
        font-size: 1.2rem;
    }
`;

export const Divider = styled.div`
    height: 2px;
    width: 80%;
    margin-top: 2rem;
    background-color: #ffffff;
    @media (max-width:1600px){
        display: none;
    }
`;

export const ProjectDescription = styled.span`
    font-size: 1.3em;
    color: #ffffff;
    padding: 0.5rem;
    text-align: center;
    @media (max-width:1100px){
        font-size: 1rem;
    }
`;

export const ProjectLink = styled.a`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 32%;
    font-size: 1.2em;
    color: #360b41;
    text-align: center;
    transition: .4s ease-in-out;
    cursor: pointer;
    &:hover{
        transform: scale(1.1);
    }
    @media (max-width:1100px){
        font-size: 1rem;
    }
`;