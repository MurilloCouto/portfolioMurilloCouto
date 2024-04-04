import React from "react";
import styles from "./ButtonA.module.scss";

interface ButtonProps {
  text: string;
  link: string;
  target?: string;
}

function ButtonA({ text, link, target }: ButtonProps) {
  return (
    <div>
      <a href={link} target={target} rel="noopener noreferrer">
        <button className={styles.btn}>{text}</button>
      </a>
    </div>
  );
}

export default ButtonA;
