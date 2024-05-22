import React, { useEffect, useState } from "react";
import ButtonA from "../elements/ButtonA.tsx";
import styles from "./Contact.module.scss";
import { FaWhatsapp } from "react-icons/fa";

function Contact() {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById("contato");
      if (!contactSection) return;

      const rect = contactSection.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
      if (!inView && isVisible) {
        setInView(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [inView]);

  const createWhatsAppLink = () => {
    return `https://api.whatsapp.com/send?phone=5512981473373&text=Olá%20Murillo,%20estou%20entrando%20em%20contato%20através%20do%20seu%20website,%20podemos%20conversar%20?`;
  };

  return (
    <div id="contato" className={`${styles.contactContainer} ${inView ? styles.animate : ""}`}>
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

