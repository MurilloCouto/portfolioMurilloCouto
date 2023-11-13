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
          <Cards img={project1} 
          title="Controle de produtos" 
          tech="HTML, CSS, JS" 
          desc="Projeto Front-end para cadastro de produtos" 
          site="https://cadastro-produtos-dnc.netlify.app/" 
          repo="https://github.com/MurilloCouto/cadastro-produtos"/>
         
          <Cards 
          img={project2} 
          title="Consumo de API's" 
          tech="HTML, CSS, JS" 
          desc="Projeto Front-end para consulta de CEP e previsão do tempo" 
          site="https://consumodeapis.netlify.app/" 
          repo="https://github.com/MurilloCouto/consumindoApi"/>

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
  