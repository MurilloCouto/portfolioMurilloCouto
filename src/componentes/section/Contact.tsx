import React from "react";
import ButtonA from "../elements/ButtonA.tsx";
import styles from "./Contact.module.scss";
import { FaWhatsapp } from "react-icons/fa";

function Contact() {
  const createWhatsAppLink = () => {
    return `https://api.whatsapp.com/send?phone=5512981473373&text=Olá%20Murillo,%20estou%20entrando%20em%20contato%20através%20do%20seu%20website,%20podemos%20conversar%20?`;
  };

  return (
    <div id="contato" className={styles.contactContainer}>
      <h1>Contato</h1>
      <div className={styles.contact}>
        <h3>Vamos nos conectar</h3>
        <p className={styles.contact}>
          Se você quiser acompanhar meu trabalho,{" "}
          <a
            className={styles.anchor}
            href="https://www.linkedin.com/in/murillocouto"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>me siga no LinkedIn</strong>
          </a>{" "}
          ou, se preferir, você também pode me{" "}
          <a
            className={styles.anchor}
            href="mailto:murilloacouto@outlook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>enviar um e-mail</strong>
          </a>{" "}
          e eu retornarei assim que possível.
        </p>
        <div className={styles.buttonWhatsApp}>
          <ButtonA
            icon={FaWhatsapp}
            text="Me chame no WhatsApp"
            link={createWhatsAppLink()}
            target="_blank"
          />
        </div>
      </div>
      <br />
      <br />
      <p className={styles.copyright}>Murillo Couto © 2024</p>
    </div>
  );
}

export default Contact;
