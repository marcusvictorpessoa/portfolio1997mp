import { HeaderContainer, Title, Subtitle, Divider, TitleBox, SocialNetworksBox, Network, NetworkBox } from "./styles";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";

export default function Header() {

    return (
        <HeaderContainer id="header">
            <TitleBox>
                <Title>Marcus Pessoa</Title>
                <Subtitle>Front-end and Mobile Developer</Subtitle>
            </TitleBox>
            <Divider />
            <SocialNetworksBox>
                <Network href="https://github.com/marcusvictorpessoa">
                    <NetworkBox>
                        <AiFillGithub color="#000000" />
                    </NetworkBox>
                </Network>
                <Network href="https://www.linkedin.com/in/marcus-pessoa-9a81471b8">
                    <NetworkBox>
                        <AiFillLinkedin color="#0a66c2" />
                    </NetworkBox>
                </Network>
                <Network href="https://t.me/marcusvictorpessoa">
                    <NetworkBox>
                        <BsTelegram color="#2ea2d8" />
                    </NetworkBox>
                </Network>
            </SocialNetworksBox>
        </HeaderContainer>
    );
}