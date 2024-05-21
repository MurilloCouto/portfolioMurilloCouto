import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import Nav from "react-bootstrap/Nav";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <FaBars className={`${styles.icon} ${isMenuOpen ? styles.hideIcon : styles.showIcon}`} />
        <FaTimes className={`${styles.icon} ${isMenuOpen ? styles.showIcon : styles.hideIcon}`} />
      </div>
      <ul className={`${styles.list} ${isMenuOpen ? styles.showMenu : ""}`}>
        <li>
          <Nav.Link onClick={() => scrollToSection("presentation")}>Apresentação</Nav.Link>
        </li>
        <li>
          <Nav.Link onClick={() => scrollToSection("skills")}>Habilidades</Nav.Link>
        </li>
        <li>
          <Nav.Link onClick={() => scrollToSection("projects")}>Projetos</Nav.Link>
        </li>
        <li>
          <Nav.Link onClick={() => scrollToSection("contato")}>Contato</Nav.Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;