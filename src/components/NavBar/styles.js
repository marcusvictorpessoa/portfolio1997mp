import styled from "styled-components";

export const NavBarContainer = styled.nav`
    display: flex;
    position: fixed;
    z-index: 10;
    justify-content: space-between;
    align-items: center;
    padding-inline: 2rem;
    width: 100%;
    height: 10vh;
    backdrop-filter: blur( 13.5px );
    -webkit-backdrop-filter: blur( 13.5px );
    @media (max-width: 480px) {
    padding-inline: .5rem;
  }
`;

export const NavContent = styled.ul`
    display: flex;
    justify-content: space-around;
    width: 25%;
    list-style: none;
    @media (max-width: 950px) {
    width: 75%;
  }
`;

export const NavItem = styled.li`
    cursor: pointer;
    font-size: 1.5em;
    transition: .3s ease-in-out;

    &:hover {
        transform: scale(1.3);
    }
`;

export const Link = styled.a`
    color: #fff;
    text-decoration: none;
`;


export const Logo = styled.span`
    font-size: 2rem;
    color: #fff;
    font-weight: bold;
    cursor: default;
    background-color: #f3ec78;
    background-image: linear-gradient(45deg, #13cd4a, #ffffff);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;
`;