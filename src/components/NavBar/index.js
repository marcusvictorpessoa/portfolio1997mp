import React from "react";
import { Link, NavBarContainer, NavContent, NavItem, Logo } from "./styles";
import { AiFillHome } from "react-icons/ai";
import { FcAbout, FcIdea} from "react-icons/fc";
import { MdWork } from "react-icons/md";
import { FaTools } from "react-icons/fa";

export default function NavBar() {

    /*const [fixedNav, setFixedNav] = useState(true);

    useEffect(() => {
        const intersectionObserver = new IntersectionObserver(entries => {
            if (entries.some(entry => entry.isIntersecting)) {
                setFixedNav(false);
            }
        })
        intersectionObserver.observe(document.querySelector('#header'));
        return () => intersectionObserver.disconnect();
    }, []);*/

    return (
        <NavBarContainer /*fixed={fixedNav}*/>
            <Logo>{"</>"}</Logo>
            <NavContent>
                <NavItem title="Início">
                    <Link href="#home">
                        <AiFillHome color="#360b41" />
                    </Link>
                </NavItem>
                <NavItem title="Ferramentas">
                    <Link href="#tools">
                        <FaTools color="#360b41" />
                    </Link>
                </NavItem>
                <NavItem title="Serviços">
                    <Link href="#services">
                        <MdWork color="#360b41" />
                    </Link>
                </NavItem>
                <NavItem>
                    <Link title="Projetos" href="#projects">
                        <FcIdea />
                    </Link>
                </NavItem>
                {/*<NavItem title="Contato">
                    <Link href="#contact">
                        <MdEmail color="#2196f3" style={{ borderColor: "#fff"}} />
                    </Link>
    </NavItem>*/}
                <NavItem title="Mais sobre mim">
                    <Link href="#about">
                        <FcAbout />
                    </Link>
                </NavItem>
            </NavContent>
        </NavBarContainer>
    );
}