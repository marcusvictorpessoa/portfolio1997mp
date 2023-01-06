import React from "react";
import About from "./components/About";
import Projects from "./components/Projects";
//import Contact from "./components/Contact";
import Tools from "./components/Tools";
import FloatButton from "./components/FloatButton";
import Footer from "./components/Footer";
import { FormModal } from "./components/FormModal";
import Header from "./components/Header";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
//import { ModalProvider } from "./contexts/modal.context";
import { AppContainer } from "./styles";
import Services from "./components/Services";

//import { BsSnow2 } from "react-icons/bs";

function App() {

  /*function snowFall() {

    let container = document.querySelector("#appContainer");
    let snowFlake = document.createElement("span");
    snowFlake.className = "snowflake";
    snowFlake.style.left = Math.random() * window.innerWidth + "px";
    container.appendChild(snowFlake);

    setTimeout(() => {
      snowFlake.remove();
    }, 15000);
  }

  useEffect(() => {
    const snowEffect = setInterval(snowFall, 100)
    return () => clearInterval(snowEffect);
  }, []);*/

  return (
    <AppContainer id="appContainer">
      <NavBar />
      <Header />
      <Home />
      <Tools />
      <Services />
      <Projects />
      {/*<Contact />*/}
      <About />
      <Footer />
      <FormModal />
      <FloatButton />
    </AppContainer>
  );
}

export default App;
