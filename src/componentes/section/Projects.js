import styles from './Projects.module.css'
import ButtonB from '../elements/ButtonB'
import Cards from '../elements/Cards'
import project1 from '../Imagens/project1.png'
import project2 from '../Imagens/project2.png'
import project3 from '../Imagens/project3.png'


function Projects() {
    return (
      <div id="projects" className={styles.projects}>
        <h1>Projetos</h1>
          <Cards img="https://raw.githubusercontent.com/MurilloCouto/ecommerceReact/main/homeEcommerce.png" 
          title="Ecommerce de roupas React" 
          tech="HTML, CSS, JS, REACT" 
          desc="Projeto Front-end para simulação de um ecommerce de roupas" 
          site="https://ecommerce-react-lilac-three.vercel.app/" 
          repo="https://github.com/MurilloCouto/ecommerceReact"/>
         
          <Cards 
          img='https://github.com/MurilloCouto/facetruqueFeed/blob/main/Captura%20de%20tela%202023-12-20%20175634.png?raw=true' 
          title="Facetruque" 
          tech="HTML, CSS, JS, REACT" 
          desc="Projeto Front-end simulando um feed de uma rede social fictícia" 
          site="https://facetruque-feed.vercel.app/" 
          repo="https://github.com/MurilloCouto/facetruqueFeed"/>

          <Cards img={project3} 
          title="Landing page" 
          tech="HTML, CSS" 
          desc="Projeto Front-end de uma empresa de arquitetura fictícia para captação de possíveis novos clientes" 
          site="https://desafio-arquitetura-dnc.netlify.app/" 
          repo="https://github.com/MurilloCouto/landing-page-arquitetura"/>
          
        <ButtonB link="https://github.com/MurilloCouto?tab=repositories" text="Acessar repositório completo"/>
      </div>
    );
  }
  
  export default Projects;
  