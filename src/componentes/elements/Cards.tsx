import React from "react";
import styles from "./Cards.module.scss";
import ButtonB from "./ButtonB.tsx";
import { useState } from "react";

interface CardsProps {
  img: string;
  title: string;
  tech: string;
  desc: string;
  site: string;
  repo: string;
  target: string;
}

function Cards({ img, title, tech, desc, site, repo }: CardsProps) {
  const [info, setInfo] = useState(false);

  function Add() {
    setInfo(true);
  }

  function Sub() {
    setInfo(false);
  }

  return (
    <div onMouseLeave={Sub} className={styles.cards}>
      <a onMouseEnter={Add} href={site}>
        <img src={img} alt="erro" />
      </a>
      <section className={styles.descricaoMobile}>
        <h3>{title}</h3>
        <p>{tech}</p>
        <p>{desc}</p>
        <ButtonB link={repo} text="Acesse o repositório" />
      </section>

      {info === true && (
        <section className={styles.section}>
          <h3>{title}</h3>
          <p className={styles.paragraph}>{tech}</p>
          <p className={styles.paragraph}>{desc}</p>
          <ButtonB link={repo} text="Acesse o repositório" />
        </section>
      )}
    </div>
  );
}

export default Cards;
