import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 40vh;
    width: 100%;
    margin-top: 10vh;
    background-image: linear-gradient(to right, #7b6ed6, #a8bdc2, #61d4b0, #360b41);
    
`;

export const TitleBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.span`
    font-size: 4rem;
    color: #fff;
    font-weight: bold;
    @media (max-width: 950px) {
    font-size: 2rem;
  }
`;

export const Subtitle = styled.span`
    font-size: 2rem;
    color: #fff;
    font-style: italic;
    &::before{
        content: "<";
    }
    &::after{
        content: " />";
    }
    @media (max-width: 950px) {
    font-size: 1rem;
  }
`;

export const Divider = styled.div`
    height: 10px;
    width: 80%;
    margin-top: 2rem;
    -webkit-clip-path: polygon(41% 54%, 53% 64%, 66% 60%, 89% 59%, 100% 73%, 100% 100%, 0 100%, 0% 70%, 10% 58%, 24% 51%);
    clip-path: polygon(41% 14%, 53% 64%, 66% 60%, 10% 59%, 100% 73%, 50% 100%, 0 100%, 0% 70%, 10% 58%, 24% 51%);
    background-color: #ffffff;
`;

export const SocialNetworksBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 25%;
    @media (max-width: 950px) {
    width: 60%;
  }
`;

export const NetworkBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    border-radius: 50%;
    padding: .2rem;
    
`;

export const Network = styled.a`
    font-size: 2rem;
    cursor: pointer;
    transition: .3s ease-in-out;
    &:hover {
        transform: scale(1.2);
    }
`;