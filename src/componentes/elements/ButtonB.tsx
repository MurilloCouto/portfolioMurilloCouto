import React from "react";
import styles from "./ButtonB.module.scss";

interface ButtonProps {
  text: string;
  link: string;
  target?: string;
}

function ButtonB({ text, link, target }: ButtonProps) {
  return (
    <div>
      <a href={link} target={target} rel="noopener noreferrer">
        <button className={styles.btn}>{text}</button>
      </a>
    </div>
  );
}

export default ButtonB;
