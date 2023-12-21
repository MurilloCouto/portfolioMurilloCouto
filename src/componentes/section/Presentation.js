import styles from "./Presentation.module.scss";
import ButtonA from "../elements/ButtonA";
import { useEffect, useState } from "react";

function Presentation() {
  const [text, setText] = useState("");
  const toRotate = ["Murillo Couto", "Desenvolvedor Front-End"];
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
        Atualmente sou militar da Força Aérea Brasileira e trabalho como Controlador de Voo
        no controle de aproximação de São Paulo, essa minha vocação para
        solucionar conflitos e achar soluções rápidas e eficientes me trouxe até
        o mundo da programação, me sinto cada vez mais apto a efetuar essa migração de carreira 
        e quero cada vez mais estar incluso nesse mundo fantástico da tecnologia,
        e para isso tenho buscado cada vez mais conhecimento técnico e prático voltado para
        o desenvolvimento web, recentemente conclui o módulo de desenvolvimento Front End da Escola DNC
        e estou ansioso para adquirir novos conhecimentos! 
      </p>
      <ButtonA
        text="Conecte-se comigo!"
        link="https://github.com/MurilloCouto"
      />
    </div>
  );
}

export default Presentation;
