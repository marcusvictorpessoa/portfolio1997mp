import { ProjectTitle, ProjectDescription, ProjectsImg, ProjectsCard, ProjectsContainer, Card, Divider, ProjectLink, ProjectBox } from "./styles";
import Project1 from "../../assets/project1.png";
//import Project2 from "../../assets/project2.png";
import Project3 from "../../assets/project3.png";

import { BiLinkExternal } from "react-icons/bi";

export default function Projects() {
    return (
        <ProjectsContainer id="projects">
            <Card>
                <ProjectsCard align="flex-start">
                    <ProjectsImg src={Project1} />
                    <ProjectBox>
                        <ProjectTitle>Countries and capitals</ProjectTitle>
                        <Divider />
                        <ProjectDescription>
                            Um jogo simples para combinar o país e sua capital corretamente.
                        </ProjectDescription>
                        <ProjectLink href="https://countries-capitals-pi.vercel.app/">
                            Ver projeto
                            <BiLinkExternal size={20} />
                        </ProjectLink>
                    </ProjectBox>
                </ProjectsCard>
                {/*<ProjectsCard align="flex-end">
                    <ProjectsImg src={Project2} />
                    <ProjectBox>
                        <ProjectTitle>Wemovies</ProjectTitle>
                        <Divider />
                        <ProjectDescription>
                            Um pequeno e-commerce de filmes, com um carrinho para adição dos itens.
                        </ProjectDescription>
                        <ProjectLink>
                            Ver projeto
                            <BiLinkExternal size={20} />
                        </ProjectLink>
                    </ProjectBox>
    </ProjectsCard>*/}
                <ProjectsCard align="flex-start">
                    <ProjectsImg src={Project3} />
                    <ProjectBox>
                        <ProjectTitle>Ubook</ProjectTitle>
                        <Divider />
                        <ProjectDescription>
                            Uma agenda de contatos, para adicionar, editar, remover e buscar contatos.
                        </ProjectDescription>
                        <ProjectLink href="https://ubook-phi.vercel.app/">
                            Ver projeto
                            <BiLinkExternal size={20} />
                        </ProjectLink>
                    </ProjectBox>
                </ProjectsCard>
            </Card>
        </ProjectsContainer >
    );
}