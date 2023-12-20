import styles from './Skills.module.css'
import js from '../Imagens/js.svg'
import html from '../Imagens/html.svg'
import css from '../Imagens/css.svg'
import react from '../Imagens/react.svg'

function Skills() {

      return (
      <div id="skills" className={styles.skills}>
        <h1><strong>Habilidades</strong></h1>
        <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
        <div>
          <img src="https://skillicons.dev/icons?i=js,css,html,scss,react" />
        </div>
      </div>
    );
  }
  
  export default Skills;
  