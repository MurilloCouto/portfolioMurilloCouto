import styles from "./Presentation.module.scss";
import ButtonA from "../elements/ButtonA";
import { useEffect, useState } from "react";

function Presentation() {
  const [text, setText] = useState("");
  const toRotate = ["Murillo Couto", "Desenvolvedor Full-Stack"];
  const [loop, setLoop] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const period = 100;
  const [delta, setDelta] = useState(100);

  useEffect(() => {
    let ticker = setInterval(() => {
      toType();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

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

  return (
    <div id="presentation" className={styles.presentation}>
      <h2>
        <strong>Bem-vindo ao meu Portfólio</strong>
      </h2>
      <h1>Olá! Eu sou {text}</h1>
      <p>
        Atualmente sou militar da Força Aérea Brasileira e trabalho como
        Controlador de Tráfego Aéreo em São Paulo, ser controlador de voo me fez
        adquirir soft skills as quais acredito que vão me ajudar muito nessa
        nova etapa da minha carreira como desenvolvedor de software, entre elas
        destaco o trabalho em equipe, raciocínio lógico, comunicação eficaz,
        habilidade multitarefa, atenção aos detalhes e resiliência. <br />
        Iniciei meus estudos na área da programação em 2022 focando no
        desenvolvimento em Python e posteriormente iniciei a Formação em
        Tecnologia pela Escola DNC, focado em JavaScript, essa formação me
        agregou um conhecimento técnico enorme e hoje me sinto confortável para
        trabalhar com quaisquer tecnologias principalmente no Front-End. <br />
        Em 2024 iniciei minha graduação em Análise e Desenvolvimento de Sistemas
        na Universidade Presbiteriana Mackenzie com o objetivo de me
        profissionalizar cada vez mais, e não vou parar por aqui!
      </p>
      <ButtonA
        text="Conecte-se comigo!"
        link="https://www.linkedin.com/in/murillocouto/"
        target="_blank"
      />
    </div>
  );
}

export default Presentation;
