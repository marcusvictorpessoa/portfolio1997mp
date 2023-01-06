import { AboutContainer, Card, InfoAbout, Title } from "./styles";

export default function About() {
    return (
        <AboutContainer id="about">
            <Card>
                <Title>
                    Um pouco mais sobre mim...
                </Title>
                <InfoAbout>
                    Entrei no mercado de trabalho atuando como Estagiário Analista de redes em 2018 
                    atuando na implementação e administração de redes, conduzindo o auxílio na 
                    alimentação do banco de dados no sistema e verificando relatórios de monitoração 
                    do ambiente de infraestrutura. Logo depois em 2019 iniciei na área de suporte 
                    como Auxiliar de TI ajudando no acompanhamento e atuação em processos de geração de 
                    informações nos diversos sistemas de registro de demandas de clientes, na qual são 
                    utilizadas ferramentas, acompanhamento diário da carteira de captação de recursos, 
                    acompanhamento de instalações de redes, micros e comunicação de dados, acompanhamento 
                    supervisionado de elaboração de documentos e programas, acompanhamento supervisionado de 
                    elaboração de relatórios. Em 2021 iniciei na área de desenvolvimento criando soluções de 
                    TI com Vue.js, react.js, React Native e Python. E no momento atual atuo com Desenvolvimento 
                    de softwares, aplicativos com Expo/React Native, e sites com React JS. Atualmente tenho mais 
                    de 2 anos de experiência na areá e já atuei em 3 empresas e alguns projetos freelancers.
                </InfoAbout>
            </Card>
        </AboutContainer>
    );
}