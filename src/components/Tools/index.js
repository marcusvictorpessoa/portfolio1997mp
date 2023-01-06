import { Card, ToolsContainer, DescriptionTool, ImgTool, Tool, ReactNative } from "./styles";
import { FaReact, FaMobile } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

export default function Tools() {
    return (
        <ToolsContainer id="tools">
            <Card>
                <Tool style={{ alignSelf: "flex-start" }}>
                    <ImgTool>
                        <FaReact size={"2x"} color="#5ed3f3" />
                    </ImgTool>
                    <DescriptionTool>
                        React.js para desenvolvimento de sites e aplicações webs,
                        juntamente com diversas bibliotecas do ecossistema React.
                    </DescriptionTool>
                </Tool>
                <Tool style={{ alignSelf: "flex-end" }}>
                    <DescriptionTool>
                        React Native para desenvolvimento de aplicativos móveis, para as plataformas Android e IOS.
                    </DescriptionTool>
                    <ImgTool>
                        <FaMobile size={"2x"} color="#000000" />
                        <FaReact size={"2x"} color="#5ed3f3" />
                    </ImgTool>
                </Tool>
                <Tool style={{ alignSelf: "flex-start" }}>
                    <ImgTool>
                        <SiJavascript size={"2x"} color="#efd81d" />
                    </ImgTool>
                    <DescriptionTool>
                        Javascript também é usada para desenvolvimento de projetos.
                    </DescriptionTool>
                </Tool>
            </Card>

        </ToolsContainer>
    );
}