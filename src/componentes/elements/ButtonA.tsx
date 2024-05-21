import React from "react";
import styles from "./ButtonA.module.scss";
import { IconType } from "react-icons";

interface ButtonProps {
  text?: string;
  link: string;
  target?: string;
  icon?: IconType;
  download?: string;
  title?: string;
}

function ButtonA({ text, link, target, icon, download, title }: ButtonProps) {
  return (
    <div>
      <a
        href={link}
        target={target}
        download={download}
        title={title}
        className={styles.btn}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
      >
        {icon && (
          <span className={styles.icon}>{React.createElement(icon)}</span>
        )}
        {text && <span>{text}</span>}
      </a>
    </div>
  );
}

export default ButtonA;
