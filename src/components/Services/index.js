import { ServiceDescription, ServiceImg, ServicesCard, ServicesContainer, ServiceTitle, Card } from "./styles";
import { MdWeb } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { GiGears } from "react-icons/gi";

export default function Services() {
    return (
        <ServicesContainer id="services">
            <Card>
                <ServicesCard>
                    <ServiceTitle>
                        Aplicações Web
                    </ServiceTitle>
                    <ServiceImg>
                        <MdWeb size={"1x"} color="#196ee6" />
                    </ServiceImg>
                    <ServiceDescription>
                        Elaboração de sites simples, landpages e aplicativos webs responsivos.
                    </ServiceDescription>
                </ServicesCard>
                <ServicesCard>
                    <ServiceTitle>
                        Aplicações Mobile
                    </ServiceTitle>
                    <ServiceImg>
                    <FaMobileAlt size={"1x"} color="#404245" />
                    </ServiceImg>
                    <ServiceDescription>
                        Desenvolvimento de aplicativos móveis para Android e IOS, e deploy em sua plataforma.
                    </ServiceDescription>
                </ServicesCard>
                <ServicesCard>
                    <ServiceTitle>
                        Integrações com APIs
                    </ServiceTitle>
                    <ServiceImg>
                    <GiGears size={"1x"} color="#f75e50" />
                    </ServiceImg>
                    <ServiceDescription>
                        Integrações de aplicações com APIs públicas ou privadas.
                    </ServiceDescription>
                </ServicesCard>
            </Card>
        </ServicesContainer >
    );
}