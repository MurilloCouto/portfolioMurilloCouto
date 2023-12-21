import styles from "./Navbar.module.scss";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import Nav from "react-bootstrap/Nav";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <ul className={styles.list}>
        <li>
          <Nav.Link href="#presentation">Apresentação</Nav.Link>
        </li>
        <li>
          <Nav.Link href="#skills">Habilidades</Nav.Link>
        </li>
        <li>
          <Nav.Link href="#projects">Projetos</Nav.Link>
        </li>
      </ul>
      <ul className={styles.list2}>
        <li>
          {" "}
          <a href="https://www.instagram.com/murilloacouto/">
            <FaInstagram size={35} />
          </a>
        </li>
        <li>
          {" "}
          <a href="https://github.com/MurilloCouto">
            <FaGithub size={35} />
          </a>
        </li>
        <li>
          {" "}
          <a href="https://www.linkedin.com/in/murillo-alves-couto-1b072828a/">
            <FaLinkedin size={35} />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
