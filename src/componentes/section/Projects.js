import styles from "./Projects.module.scss";
import ButtonB from "../elements/ButtonB";
import Cards from "../elements/Cards";

function Projects() {
  return (
    <div id="projects" className={styles.projects}>
      <h1>Projetos</h1>
      <Cards
        img="https://raw.githubusercontent.com/MurilloCouto/ecommerceReact/main/homeEcommerce.png"
        title="Ecommerce de roupas React"
        tech="HTML, CSS, JS, REACT"
        desc="Projeto Front-end para simulação de um ecommerce de roupas"
        site="https://ecommerce-react-lilac-three.vercel.app/"
        repo="https://github.com/MurilloCouto/ecommerceReact"
      />

      <Cards
        img="https://github.com/MurilloCouto/facetruqueFeed/blob/main/Captura%20de%20tela%202023-12-20%20175634.png?raw=true"
        title="Facetruque"
        tech="HTML, CSS, JS, REACT"
        desc="Projeto Front-end simulando um feed de uma rede social fictícia, permitindo o usuário a adicionar e remover comentários, bem como curtí-los"
        site="https://facetruque-feed.vercel.app/"
        repo="https://github.com/MurilloCouto/facetruqueFeed"
      />

      <Cards
        img="https://github.com/MurilloCouto/challenge-3/blob/main/Captura%20de%20tela%202023-12-13%20080547.png?raw=true"
        title="To Do List"
        tech="HTML, CSS, JS, REACT"
        desc="Projeto Front-end para criação de uma lista de tarefas, permitindo o usuário a adicionar e excluir tarefas da lista"
        site="https://challenge-3-hazel.vercel.app/"
        repo="https://github.com/MurilloCouto/challenge-3"
      />

      <ButtonB
        link="https://github.com/MurilloCouto?tab=repositories"
        text="Acessar repositório completo"
      />
    </div>
  );
}

export default Projects;
