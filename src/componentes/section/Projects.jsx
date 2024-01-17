import styles from "./Projects.module.scss";
import ButtonB from "../elements/ButtonB";
import Cards from "../elements/Cards";

function Projects() {
  return (
    <div id="projects" className={styles.projects}>
      <h1>Projetos</h1>
      <div>
        <Cards
          img="https://raw.githubusercontent.com/MurilloCouto/time-to-flix/main/version%202.png"
          title="Time To Flix"
          tech="HTML, CSS, TS, REACT"
          desc="Projeto Front-end para busca de filmes pelo consumo de API REST"
          site="https://time-to-flix.vercel.app/"
          repo="https://github.com/MurilloCouto/time-to-flix"
          target="_blank"
        />

        <Cards
          img="https://github.com/MurilloCouto/facetruqueFeed/blob/main/Captura%20de%20tela%202023-12-20%20175634.png?raw=true"
          title="Facetruque"
          tech="HTML, CSS, TS, REACT"
          desc="Projeto Front-end simulando um feed de uma rede social fictícia, permitindo o usuário a adicionar e remover comentários, bem como curtí-los"
          site="https://facetruque-feed.vercel.app/"
          repo="https://github.com/MurilloCouto/facetruqueFeed"
          target="_blank"
        />

        <Cards
          img="https://raw.githubusercontent.com/MurilloCouto/rocketseat-todo/main/Captura%20de%20tela%202024-01-05%20173549.png"
          title="To Do List"
          tech="HTML, CSS, TS, REACT"
          desc="Projeto Front-end para criação de uma lista de tarefas, permitindo o usuário a adicionar e excluir tarefas da lista"
          site="https://rocketseat-todo.vercel.app/"
          repo="https://github.com/MurilloCouto/rocketseat-todo"
          target="_blank"
        />
      </div>

      <ButtonB
        link="https://github.com/MurilloCouto?tab=repositories"
        target="_blank"
        text="Acessar repositório completo"
      />
    </div>
  );
}

export default Projects;
