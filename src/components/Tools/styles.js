import styled from "styled-components";

export const ToolsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur( 13.5px );
    -webkit-backdrop-filter: blur( 13.5px );
    height: 90vh;
    width: 100%;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 100%;
    border-radius: 1em;
    padding: 0.3rem;
`;

export const Tool = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: #c1c9c8;
    width: 60%;
    height: 30%;
    background: rgba( 255, 255, 255, 0.35 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 13.5px );
    -webkit-backdrop-filter: blur( 13.5px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    @media (max-width: 950px){
        width: 85%;
        height: 25%;
    }
`;

export const ImgTool = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1em;
    width: 25%;
    height: 70%;
`;

export const DescriptionTool = styled.span`
    font-size: 1.4em;
    color: #ffffff;
    width: 50%;
    font-weight: bold;
    @media (max-width: 950px){
        font-size: 1rem;
    }
`;

export const ReactNative = styled.div``;