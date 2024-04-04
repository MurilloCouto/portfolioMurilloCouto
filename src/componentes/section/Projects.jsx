import Cards from "../elements/Cards";
import ButtonA from "../elements/ButtonA";

import styles from "./Projects.module.scss";

function Projects() {
  return (
    <div id="projects" className={styles.projects}>
      <h1>Projetos</h1>
      <p>
        Estes são alguns dos meus projetos os quais eu costumo estar sempre me
        utilizando de temas descontraídos e que facilitam minha absorção de
        conhecimento em cada assunto novo, tento sempre deixar as minhas
        aplicações minimalistas e suaves, os designs não são dos melhores mas
        são todos de minha autoria feitos com muita dedicação.
      </p>
      <div>
        <Cards
          img="https://raw.githubusercontent.com/MurilloCouto/news-front-end/main/OhBlessNews.png"
          title="News"
          tech="HTML, SASS, TypeScript, JavaScript, ReactJS, NodeJS, Express, MongoDB."
          desc="Projeto Full-stack para cadastro e validação de usuários bem como o cadastro de notícias."
          site="https://news-front-end.vercel.app/"
          repo="https://github.com/MurilloCouto/news-front-end"
          target="_blank"
        />

        <Cards
          img="https://raw.githubusercontent.com/MurilloCouto/time-to-flix/main/version%202.png"
          title="Time To Flix"
          tech="HTML, SASS, TypeScript, JavaScript, ReactJS."
          desc="Projeto Front-end para busca de filmes pelo consumo de API REST."
          site="https://time-to-flix.vercel.app/"
          repo="https://github.com/MurilloCouto/time-to-flix"
          target="_blank"
        />

        <Cards
          img="https://github.com/MurilloCouto/facetruqueFeed/blob/main/Captura%20de%20tela%202023-12-20%20175634.png?raw=true"
          title="Facetruque"
          tech="HTML, SASS, TypeScript, JavaScript, ReactJS."
          desc="Projeto Front-end simulando um feed de uma rede social fictícia, permitindo o usuário a adicionar, remover e curtir comentários."
          site="https://facetruque-feed.vercel.app/"
          repo="https://github.com/MurilloCouto/facetruqueFeed"
          target="_blank"
        />

        <Cards
          img="https://raw.githubusercontent.com/MurilloCouto/rocketseat-todo/main/Captura%20de%20tela%202024-01-05%20173549.png"
          title="To Do List"
          tech="HTML, CSS, TypeScript, ReactJS."
          desc="Projeto Front-end para criação de uma lista de tarefas, permitindo o usuário a adicionar e excluir tarefas da lista."
          site="https://rocketseat-todo.vercel.app/"
          repo="https://github.com/MurilloCouto/rocketseat-todo"
          target="_blank"
        />
      </div>

      <ButtonA
        link="https://github.com/MurilloCouto?tab=repositories"
        target="_blank"
        text="Acesse meu repositório completo"
      />
    </div>
  );
}

export default Projects;
