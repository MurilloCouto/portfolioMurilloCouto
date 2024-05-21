import React, { useEffect, useState } from "react";
import styles from "./Presentation.module.scss";
import ButtonA from "../elements/ButtonA.tsx";
import { FaLinkedinIn, FaGithub, FaInstagram, FaReadme } from "react-icons/fa";

function Presentation() {
  const [text, setText] = useState("");
  const [loop, setLoop] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(100);
  const period = 100;

  useEffect(() => {
    const toRotate = ["Murillo Couto", "Desenvolvedor Full-Stack"];

    const toType = () => {
      let i = loop % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setDelta(period);
        setLoop(loop + 1);
      }
    };

    let ticker = setInterval(() => {
      toType();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, loop, isDeleting, delta]);

  return (
    <div id="presentation" className={styles.presentation}>
      <h2>
        <strong>Olá! Bem-vindo ao meu Portfólio</strong>
      </h2>
      <h1>Eu sou {text}</h1>
      <p>
        Atualmente, trabalho como militar na Força Aérea Brasileira e desempenho a
        função de Controlador de Tráfego Aéreo em São Paulo. Ser controlador de
        voo me proporcionou o desenvolvimento de habilidades interpessoais que
        acredito serem extremamente úteis nesta nova etapa da minha carreira
        como desenvolvedor de software. Entre essas habilidades, destaco o
        trabalho em equipe, raciocínio lógico, comunicação eficaz, capacidade
        multitarefa, atenção aos detalhes e resiliência. <br /> <br />
        Iniciei meus estudos na área de programação em 2022, com foco no
        desenvolvimento em Python. Posteriormente, ingressei na Formação em
        Tecnologia pela Escola DNC, onde concentrei meus estudos em JavaScript.
        Essa formação proporcionou-me um vasto conhecimento técnico, e hoje
        sinto-me confortável para trabalhar com diversas tecnologias,
        principalmente no Front-End. <br /> <br /> Em 2024, comecei minha
        graduação em Análise e Desenvolvimento de Sistemas na Universidade
        Presbiteriana Mackenzie, com o objetivo de me profissionalizar ainda
        mais. E não pretendo parar por aqui!
      </p>
      <div className={styles.links}>
        <ButtonA 
          icon={FaReadme}
          title="Currículo"
          link="/public/MurilloCouto-CV.pdf" 
          target="_blank" 
          download="Murillo Couto - CV"
        />
        <ButtonA 
          icon={FaGithub}
          title="GitHub"
          link="https://github.com/username" 
          target="_blank" 
        />
        <ButtonA
          icon={FaLinkedinIn}
          title="LinkedIn"
          link="https://www.linkedin.com/in/murillocouto/"
          target="_blank"
        />    
        <ButtonA
          icon={FaInstagram}
          title="Instagram"
          link="https://www.instagram.com/username/"
          target="_blank"
        />     
      </div>
    </div>
  );
}

export default Presentation;
