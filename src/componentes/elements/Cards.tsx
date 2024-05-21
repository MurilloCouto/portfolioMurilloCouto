import React from "react";
import { FiArrowRight } from "react-icons/fi"; 
import styles from "./Cards.module.scss";

interface CardsProps {
  img: string;
  title: string;
  tech: string;
  desc: string;
  site: string;
  target: string;
}

function Cards({ img, title, tech, desc, site, target }: CardsProps) {
  return (
    <div className={styles.cards}>
        <section className={styles.section}>
          <a href={site} target={target}>
            <img src={img} alt="erro" />
            <h3>{title}</h3>
            <p className={styles.paragraph}><strong>Stack utilizada: </strong> {tech}</p>
            <p className={styles.paragraph}><strong>Resumo: </strong>{desc}</p>
            <div className={styles.cardIcon}>
              <p>Visitar</p>
              <FiArrowRight size={20}/>
            </div>
          </a>
        </section>
    </div>
  );
}

export default Cards;
