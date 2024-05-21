import React from "react";
import Cards from "../elements/Cards.tsx";
import ButtonA from "../elements/ButtonA.tsx";

import styles from "./Projects.module.scss";

function Projects() {
  return (
    <div id="projects" className={styles.projects}>
      <h1>Projetos</h1>
      <p className={styles.pPrincipal}>
        Estes são alguns dos meus projetos, nos quais eu costumo utilizar temas
        descontraídos que facilitam minha absorção de conhecimento em cada novo
        assunto. Sempre busco manter minhas aplicações minimalistas e suaves.
        Embora os designs não sejam os melhores, são todos de minha autoria e
        feitos com muita dedicação.
      </p>
      <div className={styles.cardsContainer}>
        <Cards
          img="https://github.com/eliasacneto/moraisribeiro/blob/main/public/banner.jpg?raw=true"
          title="Morais & Ribeiro Advocacia"
          tech="Next.js e TailwindCSS."
          desc="Página de captação de clientes feita em equipe para uma empresa de advocacia."
          site="https://moraisribeiro.vercel.app/"
          target="_blank"
        />

        <Cards
          img="https://raw.githubusercontent.com/MurilloCouto/news-front-end/main/OhBlessNews.png"
          title="Ohbless News"
          tech="TypeScript, JavaScript, ReactJS, SASS, NodeJS, Expresse MongoDB."
          desc="Projeto Full-stack para cadastro e validação de usuários bem como o cadastro de notícias."
          site="https://news-front-end.vercel.app/"
          target="_blank"
        />

        <Cards
          img="https://raw.githubusercontent.com/MurilloCouto/time-to-flix/main/version%202.png"
          title="Time To Flix"
          tech="TypeScript, JavaScript, ReactJS e SASS."
          desc="Projeto Front-end para busca de filmes pelo consumo de API REST."
          site="https://time-to-flix.vercel.app/"
          target="_blank"
        />

        <Cards
          img="https://github.com/MurilloCouto/facetruqueFeed/blob/main/Captura%20de%20tela%202023-12-20%20175634.png?raw=true"
          title="Facetruque"
          tech="TypeScript, JavaScript, ReactJS e SASS"
          desc="Projeto Front-end simulando um feed de uma rede social fictícia, permitindo o usuário a adicionar, remover e curtir comentários."
          site="https://facetruque-feed.vercel.app/"
          target="_blank"
        />

        <Cards
          img="https://raw.githubusercontent.com/MurilloCouto/rocketseat-todo/main/Captura%20de%20tela%202024-01-05%20173549.png"
          title="To do list"
          tech="HTML, CSS, TypeScript, ReactJS."
          desc="Projeto Front-end para criação de uma lista de tarefas, permitindo o usuário a adicionar e excluir tarefas da lista."
          site="https://rocketseat-todo.vercel.app/"
          target="_blank"
        />
      </div>
      <div className={styles.buttonRepo}>
        <ButtonA
        link="https://github.com/MurilloCouto?tab=repositories"
        text="Acesse meu repositório completo"
        target="_blank"
      />
      </div>
    </div>
  );
}

export default Projects;
