import { AboutMe, Banner, BannerLeft, BannerRight, BoxSides, Flag, HomeContainer, ImgBanner, ImgBox, InfoBanner, Label, Text, Wrapper } from "./styles";
import Photo from "../../assets/minhafoto.jpg";
import Brazil from "../../assets/flagBrazil.svg";

export default function Home() {

    //const { openModal } = useModalContext();

    return (
        <HomeContainer id="home">
            <Banner>
                <ImgBox>
                    <ImgBanner src={Photo} />
                </ImgBox>
                <InfoBanner>
                    <AboutMe>Um pouco sobre mim...</AboutMe>
                    <BoxSides>
                        <BannerLeft>
                            <Wrapper>
                                <Label>Perfil:</Label>
                                <Text>Gosto bastante de programação, principalmente sobre o universo de Frontend. &hearts;</Text>
                            </Wrapper>

                            <Wrapper>
                                <Label>Nascimento:</Label>
                                <Text>25/03/1997</Text>
                            </Wrapper>

                            <Wrapper>
                                <Label>E-mail:</Label>
                                <Text>marcusvictor00@gmail.com</Text>
                            </Wrapper>
                        </BannerLeft>
                        <BannerRight>
                            <Wrapper>
                                <Label>Localização:</Label>
                                <Text>Teresina, Piauí &nbsp;<Flag src={Brazil} width={30} /></Text>
                            </Wrapper>
                            <Wrapper>
                                <Label>Habilidades:</Label>
                                <Text>&bull; Front-end</Text>
                                <Text>&bull; Web</Text>
                                <Text>&bull; Mobile</Text>
                            </Wrapper>
                        </BannerRight>
                    </BoxSides>
                </InfoBanner>
            </Banner>
        </HomeContainer>
    );
}