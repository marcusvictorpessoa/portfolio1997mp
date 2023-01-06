import React from "react";
import { Button } from "./styles";
import { FaTelegramPlane } from "react-icons/fa";

export default function FloatButton(){
    return (
        <Button title="Envie-me uma mensagem">
            <a href="https://t.me/marcusvictorpessoa">
             <FaTelegramPlane color={"#fff"} size={30} />
             </a>
        </Button>
    );
}