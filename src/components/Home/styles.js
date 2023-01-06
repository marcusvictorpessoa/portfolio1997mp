import styled from "styled-components";


export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 90vh;
    backdrop-filter: blur( 13.5px );
    -webkit-backdrop-filter: blur( 13.5px );
    z-index: 3;
    @media (max-width: 950px){
        height: 100vh;
    }
`;

export const Banner = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: #ffffff;
    width: 100%;
    height: 70%;
    overflow: hidden;

    @media (max-width: 950px){
        height: 100%;
        flex-direction: column;
        padding: 0.5rem;
    }
`;

export const ImgBanner = styled.img`
    width: 450px;
    @media (max-width: 950px){
        width: 230px;
    }
`;

export const ImgBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    height: 75%;
    overflow: hidden;
    @media (max-width: 950px){
        height: 30%;
    }
`;

export const InfoBanner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 60%;
    height: 80%;
    padding: 1rem;
    @media (max-width: 950px){
        padding: 0;
        width: 100%;
        justify-content: space-around;
    }
`;

export const AboutMe = styled.span`
    font-size: 1.5rem;
    letter-spacing: 3px;
    font-weight: bold;
    color: #360b41;
    align-self: flex-start;
    @media (max-width: 950px){
        align-self: center;
    }
`;
export const BoxSides = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 950px){
        flex-direction: column;
        align-items: center;
        height: 70%;
    }
`;

export const BannerRight = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 45%;
    height: 90%;
    @media (max-width: 950px){
        width: 100%;
    }
`;

export const BannerLeft = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 45%;
    height: 90%;
    @media (max-width: 950px){
        width: 100%;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Label = styled.label`
    font-size: 1.3rem;
    letter-spacing: 3px;
    font-weight: bold;
    color: #360b41;
`;

export const Text = styled.span`
    font-size: 1.3rem;
    margin-top: .3rem;
    color: #797b7d;
    
`;

export const Flag = styled.img``;

export const Button = styled.button`
    cursor: pointer;
    background-color: #c1c9c8;
    border-radius: 1em;
    height: 80px;
    width: 400px;
    border-style: none;
    font-size: 1.5em;
    color: #fff;
    transition: 0.3s ease-in-out;
    &:hover{
        box-shadow: 5px 5px 5px #888;
    }
`;