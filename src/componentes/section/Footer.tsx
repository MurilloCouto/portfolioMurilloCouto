import React from "react";
import styles from "./Footer.module.scss";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className={styles.footer}>
      <ul className={styles.list}>
        <li>
          {" "}
          <a href="https://www.instagram.com/murilloacouto/" target="_blank">
            <FaInstagram size={35} />
          </a>
        </li>
        <li>
          {" "}
          <a href="https://github.com/MurilloCouto" target="_blank">
            <FaGithub size={35} />
          </a>
        </li>
        <li>
          {" "}
          <a href="https://www.linkedin.com/in/murillocouto" target="_blank">
            <FaLinkedin size={35} />
          </a>
        </li>
      </ul>

      <p>
        murilloacouto@outlook.com
        <br />
        <br />
        Murillo Couto © 2024
      </p>
    </div>
  );
}

export default Footer;
